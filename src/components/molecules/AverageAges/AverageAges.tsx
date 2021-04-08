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

const AverageAges = () => {
  const { employees } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (employees.length !== 0) {
      const oldCanvas = document.getElementById(
        'myChart-averageAges'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'myChart-averageAges';

      const ctx = document
        .getElementById('canvas-averagesAges')!
        .appendChild(newCanvas);

      //----
      const edades: number[] = employees.map(e => {
        return e.age;
      });

      //@ts-ignore
      const average = employees.slice(0).reduce((a, b) => {
        return { age: a.age + b.age };
      });

      new Chart(ctx!, {
        type: 'pie',
        data: {
          labels: ['Mayor edad', 'Promedio edad', 'Menor edad'],
          datasets: [
            {
              label: 'Edades de empleados',
              data: [
                Math.max(...edades),
                average.age / employees.length,
                Math.min(...edades),
              ],
              backgroundColor: [
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(255, 99, 132)',
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
  }, [employees]);

  return <div id="canvas-averagesAges"></div>;
};

export default AverageAges;
