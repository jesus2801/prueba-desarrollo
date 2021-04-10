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

const DesviacionEstandar = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'chart-desviacion'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'chart-desviacion';

      const ctx = document
        .getElementById('canva-desviacion')!
        .appendChild(newCanvas);

      //----

      const muestra: number[] = sales.map(s => s.price);
      const numeroDatos = muestra.length;

      //PROMEDIO
      const promedio: number =
        muestra.reduce((a, b) => a + b) / numeroDatos;

      //SACANDO DESVIACION ESTANDAR
      const valoresNumerador: number[] = muestra.map(v => {
        return Math.pow(v - promedio, 2);
      });

      const numerador: number = valoresNumerador.reduce((a, b) => a + b);

      const desviacionEstandar = Math.sqrt(numerador / (numeroDatos - 1));

      const min = Math.min(...muestra);
      const max = Math.max(...muestra);

      let intervalos: number[] = [];

      let distanciaIntervalos: number = Math.round((max - min) / 14);

      let ultimoIntervalo = max;
      for (let i = 0; i <= 14; i++) {
        intervalos.push(ultimoIntervalo - distanciaIntervalos);
        ultimoIntervalo = ultimoIntervalo - distanciaIntervalos;
      }

      let intervalosFinales: number[] = [];

      let state = true;
      for (let i = 0, n = intervalos.length; i < n; i++) {
        if (state) {
          intervalosFinales.push(intervalos[i]);
        } else {
          intervalosFinales.unshift(intervalos[i]);
        }
        state = !state;
      }

      //PUNTAJE Z
      const puntajesZ = intervalosFinales.map(
        i => (i - promedio) / desviacionEstandar
      );

      new Chart(ctx!, {
        type: 'line',
        data: {
          labels: intervalosFinales,
          datasets: [
            {
              label: 'Desviación estandar de ventas',
              data: puntajesZ,
              fill: false,
              borderColor: 'rgb(106, 75, 192)',
              tension: 0.7,
            },
          ],
        },
      });

      //----
    }
  }, [sales]);

  return <div id="canva-desviacion" className="employees"></div>;
};

export default DesviacionEstandar;
