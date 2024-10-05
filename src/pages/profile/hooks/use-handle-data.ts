import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/store";

import { getLanguages, getUser, getUserRepositories } from "store/user/actions";
import { isErrorResult } from "utils/helpers/is-error-result";

import { SortEnum } from "store/user/types";

export const useHandleData = () => {
  const profile = useAppSelector((state) => state.user.profile);
  const pending = useAppSelector((state) => state.user.pending);

  const { userName } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userName) {
      dispatch(getUser(userName)).then((response) => {
        if (!isErrorResult(response.payload) && response.payload) {
          dispatch(
            getUserRepositories({
              userName: userName,
              sort: SortEnum.CREATED,
              per_page: 2,
            }),
          ).then((res) => {
            if (!isErrorResult(res.payload) && res.payload) {
              dispatch(
                getLanguages({
                  userName: userName,
                  repositories: res.payload,
                }),
              );
            }
          });
        }
      });
    }
  }, [dispatch, userName]);

  return { profile, pending };
};
