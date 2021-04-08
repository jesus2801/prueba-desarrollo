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

const FourthChart = () => {
  const { sales, employees } = useSelector(
    (state: AppCtx) => state.files
  );

  useEffect(() => {
    if (sales.length !== 0 && employees.length !== 0) {
      const oldCanvas = document.getElementById(
        'myChart-4'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'myChart-4';

      const ctx = document
        .getElementById('canvas-ctn-4')!
        .appendChild(newCanvas);

      //----

      new Chart(ctx!, {
        type: 'doughnut',
        data: {
          labels: ['N° Ventas', 'N° Empleados'],
          datasets: [
            {
              label: 'Ventas',
              data: [sales.length, employees.length],
              backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
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
  }, [sales, employees]);

  return <div id="canvas-ctn-4" className="fourth"></div>;
};

export default FourthChart;
