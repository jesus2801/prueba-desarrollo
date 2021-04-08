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

const Employees = () => {
  const { employees } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (employees.length !== 0) {
      const oldCanvas = document.getElementById(
        'chart-employees'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'chart-employees';

      const ctx = document
        .getElementById('canva-employees')!
        .appendChild(newCanvas);

      //----

      const latestEmployees = employees.slice(employees.length - 20);

      const labels = latestEmployees.map(e => e.name);

      const ages = latestEmployees.map(e => e.age);

      new Chart(ctx!, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Edades últimos 20 empleados',
              data: ages,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
      });

      //----
    }
  }, [employees]);

  return <div id="canva-employees" className="employees"></div>;
};

export default Employees;
