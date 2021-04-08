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

const AverageCost = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'myChart-average'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'myChart-average';

      const ctx = document
        .getElementById('canvas-ctn-average')!
        .appendChild(newCanvas);

      //----

      //@ts-ignore
      const average = sales.reduce((a, b) => ({
        price: a.price + b.price,
        cost: a.cost + b.cost,
        commission: a.commission + b.commission,
      }));

      const length = sales.length;

      new Chart(ctx!, {
        type: 'bar',
        data: {
          labels: ['Precio venta', 'Costo producto', 'Comisión empleado'],
          datasets: [
            {
              label: 'Promedios por venta',
              data: [
                average.price / length,
                average.cost / length,
                average.commission / length,
              ],
              backgroundColor: [
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
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

  return <div id="canvas-ctn-average"></div>;
};

export default AverageCost;
