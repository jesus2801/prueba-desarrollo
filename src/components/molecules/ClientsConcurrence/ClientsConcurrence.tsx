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

const ClientsConcurrence = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'chart-clients-con'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'chart-clients-con';

      const ctx = document
        .getElementById('canvas-clients-con')!
        .appendChild(newCanvas);

      //----

      let clients: string[] = [];
      let concurrence: number[] = [];

      for (let i = 0, n = sales.length; i < n; i++) {
        const actualSale = sales[i];
        const position = clients.indexOf(actualSale.client);

        if (position !== -1) {
          concurrence[position] += 1;
          continue;
        }

        clients.push(actualSale.client);
        concurrence.push(0);
      }

      new Chart(ctx!, {
        type: 'radar',
        data: {
          labels: clients,
          datasets: [
            {
              label: 'Concurrencia de clientes',
              data: concurrence,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
          ],
        },
      });

      //----
    }
  }, [sales]);

  return <div id="canvas-clients-con"></div>;
};

export default ClientsConcurrence;
