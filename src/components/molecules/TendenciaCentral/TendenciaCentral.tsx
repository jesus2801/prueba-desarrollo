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

const TendenciaCentral = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'myChart-tendencias'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'myChart-tendencias';

      const ctx = document
        .getElementById('canvas-tendencia')!
        .appendChild(newCanvas);

      //----

      const muestraPrecios = sales
        .map(s => s.price)
        .sort((a, b) => a + b);
      const preciosLength = muestraPrecios.length;

      //MEDIA DE PRECIOS
      const mediaPrecios =
        muestraPrecios.reduce((a, b) => a + b) / preciosLength;

      const medianaPrecios =
        muestraPrecios[Math.round(preciosLength / 2)];

      let modasDatosPrecios = new Array(preciosLength).fill(0);
      let auxPrecios: number[] = [];

      for (let i = 0; i < preciosLength; i++) {
        if (auxPrecios.includes(muestraPrecios[i])) {
          modasDatosPrecios[i] += 1;
          continue;
        }

        auxPrecios.push(muestraPrecios[i]);
      }

      const modaPrecios =
        muestraPrecios[
          modasDatosPrecios.indexOf(Math.max(...modasDatosPrecios))
        ];

      new Chart(ctx!, {
        type: 'bar',
        data: {
          labels: ['Media', 'Mediana', 'Moda', 'Rango'],
          datasets: [
            {
              label: 'Tendencia central Precios',
              data: [
                mediaPrecios,
                medianaPrecios,
                modaPrecios,
                Math.max(...muestraPrecios) - Math.min(...muestraPrecios),
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

  return <div id="canvas-tendencia"></div>;
};

export default TendenciaCentral;
