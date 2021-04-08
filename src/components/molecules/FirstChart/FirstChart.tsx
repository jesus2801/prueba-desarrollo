import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppCtx } from '../../../interfaces/context';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);

const FirstChart = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'myChart'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'myChart';

      const ctx = document
        .getElementById('canvas-ctn')!
        .appendChild(newCanvas);

      //----

      //@ts-ignore
      const average = sales.reduce((a, b) => ({
        price: a.price + b.price,
        cost: a.cost + b.cost,
      }));

      new Chart(ctx!, {
        type: 'bar',
        data: {
          labels: ['Ingresos', 'Egresos', 'Ganancias'],
          datasets: [
            {
              label: 'Ventas',
              data: [
                average.price,
                average.cost,
                average.price - average.cost,
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 205, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgb(255, 205, 86)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      //----
    }
  }, [sales]);

  return <div id="canvas-ctn"></div>;
};

export default FirstChart;
