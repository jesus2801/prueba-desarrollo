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

const ClientsCosts = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'chart-clients-costs'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'chart-clients-costs';

      const ctx = document
        .getElementById('canvas-clients-costs')!
        .appendChild(newCanvas);

      //----

      let clients: string[] = [];
      let compras: number[] = [];

      for (let i = 0, n = sales.length; i < n; i++) {
        const actualSale = sales[i];
        const position = clients.indexOf(actualSale.client);

        if (position !== -1) {
          compras[position] += actualSale.price;
          continue;
        }

        clients.push(actualSale.client);
        compras.push(0);
      }

      new Chart(ctx!, {
        type: 'radar',
        data: {
          labels: clients,
          datasets: [
            {
              label: 'Total dinero gastado clientes',
              data: compras,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)',
            },
          ],
        },
      });

      //----
    }
  }, [sales]);

  return <div id="canvas-clients-costs"></div>;
};

export default ClientsCosts;
