import { useAppSelector } from "store/store";
import { getLanguagesResponse } from "store/user/types";

export const useHandleData = () => {
  const profile = useAppSelector((state) => state.user.profile);
  const languages = useAppSelector((state) => state.user.languages);
  const repositories = useAppSelector((state) => state.user.repositories);

  const getLanguagesArr = () => {
    const totalLanguages: getLanguagesResponse = {};

    languages.forEach((repo) => {
      for (const [language, bytes] of Object.entries(repo)) {
        if (totalLanguages[language]) {
          totalLanguages[language] += bytes;
        } else {
          totalLanguages[language] = bytes;
        }
      }
    });

    const totalBytes = Object.values(totalLanguages).reduce(
      (sum, bytes) => sum + bytes,
      0,
    );

    const res = Object.entries(totalLanguages).map(([language, bytes]) => {
      const percentage = ((bytes / totalBytes) * 100).toFixed(2);
      return { [language]: percentage };
    });

    return res;
  };

  return {
    profile,
    languages,
    repositories,
    getLanguagesArr,
  };
};
