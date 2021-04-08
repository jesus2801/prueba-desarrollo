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

const SalesLine = () => {
  const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    if (sales.length !== 0) {
      const oldCanvas = document.getElementById(
        'chart-sales-line'
      ) as HTMLCanvasElement;

      if (oldCanvas) {
        oldCanvas.remove();
      }

      const newCanvas = document.createElement('canvas');
      newCanvas.id = 'chart-sales-line';

      const ctx = document
        .getElementById('canva-sales-line')!
        .appendChild(newCanvas);

      //----

      const latestSales = sales.slice(sales.length - 30);

      const labels = latestSales.map(e => e.saleId.toString());

      const prices = latestSales.map(e => e.price);

      const costs = latestSales.map(e => e.cost);

      const commisions = latestSales.map(e => e.commission);

      new Chart(ctx!, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Precio últimas 30 ventas',
              data: prices,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
            {
              label: 'Costo últimas 30 ventas',
              data: costs,
              fill: false,
              borderColor: 'rgb(192, 75, 75)',
              tension: 0.1,
            },
            {
              label: 'Comisión últimas 30 ventas',
              data: commisions,
              fill: false,
              borderColor: 'rgb(173, 75, 192)',
              tension: 0.1,
            },
          ],
        },
      });

      //----
    }
  }, [sales]);

  return <div id="canva-sales-line" className="employees"></div>;
};

export default SalesLine;
