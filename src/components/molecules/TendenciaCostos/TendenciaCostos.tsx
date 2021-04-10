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

const TendenciaCostos = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'myChart-tendencias-costs'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'myChart-tendencias-costs';

      const ctx = document
        .getElementById('canvas-tendencia-costs')!
        .appendChild(newCanvas);

      //----

      const muestraCostos = sales.map(s => s.cost);
      const costosLength = muestraCostos.length;

      //MEDIA DE PRECIOS
      const mediaCostos =
        muestraCostos.reduce((a, b) => a + b) / costosLength;

      const medianaCostos = muestraCostos[Math.round(costosLength / 2)];

      let modaDatosCostos = new Array(costosLength).fill(0);
      let auxCostos: number[] = [];

      for (let i = 0; i < costosLength; i++) {
        if (auxCostos.includes(muestraCostos[i])) {
          modaDatosCostos[i] += 1;
          continue;
        }

        auxCostos.push(muestraCostos[i]);
      }

      const modaCostos =
        muestraCostos[
          modaDatosCostos.indexOf(Math.max(...modaDatosCostos))
        ];

      new Chart(ctx!, {
        type: 'bar',
        data: {
          labels: ['Media', 'Mediana', 'Moda', 'Rango'],
          datasets: [
            {
              label: 'Tendencia central costos',
              data: [
                mediaCostos,
                medianaCostos,
                modaCostos,
                Math.max(...muestraCostos) - Math.min(...muestraCostos),
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

  return <div id="canvas-tendencia-costs"></div>;
};

export default TendenciaCostos;
