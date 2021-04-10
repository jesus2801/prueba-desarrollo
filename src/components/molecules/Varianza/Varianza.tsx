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

const Varianza = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'chart-varianza'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'chart-varianza';

      const ctx = document
        .getElementById('canva-varianza')!
        .appendChild(newCanvas);

      //----

      const muestraPrecios: number[] = sales.map(s => s.price);

      const promedioVentas: number =
        muestraPrecios.reduce((a, b) => a + b) / muestraPrecios.length;

      const varianzaVentas = muestraPrecios.map(p => p - promedioVentas);

      //----------

      const muestraCostos: number[] = sales.map(s => s.cost);

      const PromedioCostos: number =
        muestraCostos.reduce((a, b) => a + b) / muestraCostos.length;

      const varianzaCostos = muestraCostos.map(p => p - PromedioCostos);

      new Chart(ctx!, {
        type: 'line',
        data: {
          labels: muestraPrecios,
          datasets: [
            {
              label: 'Varianza de precios',
              data: varianzaVentas,
              fill: false,
              borderColor: 'rgb(106, 75, 192)',
              tension: 0.4,
            },
            {
              label: 'Varianza de costos',
              data: varianzaCostos,
              fill: false,
              borderColor: 'rgb(75, 169, 192)',
              tension: 0.4,
            },
          ],
        },
      });

      //----
    }
  }, [sales]);

  return <div id="canva-varianza" className="employees"></div>;
};

export default Varianza;
