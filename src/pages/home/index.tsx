import React, { useEffect, useRef, useState } from "react";

import { Flex } from "components";
import { Chart } from "./components/chart";
import { Bar } from "./components/bar";

import { StyledCanvas } from "./styled";

import { useAppDispatch } from "store/store";
import { getCharts } from "store/ft-charts/actions";

import { BrokerEnum, SymbolEnum } from "store/ft-charts/types";
import { isErrorResult } from "utils/helpers/is-error-result";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getCharts({
        Broker: BrokerEnum.ADVANCED,
        Symbol: SymbolEnum.EURUSD,
        Timeframe: 1,
        Start: 57674,
        End: 59113,
        UseMessagePack: false,
      }),
    ).then((res) => {
      if (!isErrorResult(res.payload) && res.payload) {
        const bars: Bar[] = [];

        res.payload[0].Bars.forEach((bar: any) => {
          const barData = new Bar(
            bar.Time,
            bar.Open,
            bar.High,
            bar.Low,
            bar.Close,
          );
          bars.push(barData);
        });

        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");

          const chart = new Chart({
            bars: bars,
            ctx: ctx,
            canvas: canvasRef.current,
          });
          setChart(chart);

          chart.draw();
          canvasRef.current.addEventListener("wheel", chart.handleZoom);
          canvasRef.current.addEventListener("mousedown", chart.startDrag);
          canvasRef.current.addEventListener("mouseup", chart.stopDrag);
          canvasRef.current.addEventListener("mouseleave", chart.stopDrag);
          canvasRef.current.addEventListener("mousemove", chart.onDrag);
        }
      }
    });

    return () => {
      if (canvasRef.current && chart) {
        canvasRef.current.removeEventListener("wheel", chart.handleZoom);
        canvasRef.current.removeEventListener("mousedown", chart.startDrag);
        canvasRef.current.removeEventListener("mouseup", chart.stopDrag);
        canvasRef.current.removeEventListener("mouseleave", chart.stopDrag);
        canvasRef.current.removeEventListener("mousemove", chart.onDrag);
      }
    };
  }, []);

  return (
    <Flex>
      <StyledCanvas ref={canvasRef} width={1600} height={500}></StyledCanvas>
    </Flex>
  );
};

export default Home;
