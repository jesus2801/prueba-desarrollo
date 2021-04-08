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

const EmployeesPosition = () => {
  const { employees } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (employees.length !== 0) {
      const oldCanvas = document.getElementById(
        'positionsChart'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'positionsChart';

      const ctx = document
        .getElementById('canvas-postitions')!
        .appendChild(newCanvas);

      //----

      let desarrolladores = 0;
      let limpieza = 0;
      let supervisores = 0;

      for (let i = 0, n = employees.length; i < n; i++) {
        if (employees[i].potisiton === 'desarrollador') {
          desarrolladores++;
        } else if (employees[i].potisiton === 'supervisor') {
          supervisores++;
        } else if (employees[i].potisiton === 'limpieza') {
          limpieza++;
        }
      }

      new Chart(ctx!, {
        type: 'polarArea',
        data: {
          labels: [
            'N° Desarrolladores',
            'N° Supervisores',
            'N° Aseadores',
          ],
          datasets: [
            {
              label: 'Posciciones de empleados',
              data: [desarrolladores, supervisores, limpieza],
              backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 99, 132)',
              ],
              borderWidth: 1,
            },
          ],
        },
      });

      //----
    }
  }, [employees]);

  return <div id="canvas-postitions"></div>;
};

export default EmployeesPosition;
