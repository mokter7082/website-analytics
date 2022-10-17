import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './chart.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { ReactSVG } from 'react-svg';
import getApi from '../../../hooks/getApi';

export default function Chart() {
  const { chartData, periodHandleClick, chartPriodHandler } = getApi();
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const data = {
    labels: chartData.labels || [],
    datasets: [
      {
        label: 'Visitors',
        data: chartData.plot || [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <section>
      <div className="container">
        <div className="custom_container">
          <div className="flex justify-between items-center  mt-[50px]">
            <div className="flex gap-[30px]">
              <div className="flex items-center gap-2">
                <ReactSVG src="/icons/icon.svg" alt="myunisearch" />
                <p className="font-bold">dev.myunisearch.com</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[8px] h-[8px] bg-green-500 rounded"></div>
                <p className="font-bold">0 current visitors</p>
              </div>
            </div>
            <div>
              <select
                id="period"
                onChange={(e) => {
                  periodHandleClick(e);
                  chartPriodHandler(e);
                }}
                className="font-medium flex justify-between gap-[20px] w-[176px] py-2 px-3 shadow-[0_1px_3px_0px_rgba(0,0,0,0.1),0_1px_2px_0px_rgba(0,0,0,0.06)] rounded outline-none text-[#1f2937]"
              >
                <option value="realtime">Realtime</option>
                <option value="day">Today</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="month">Month to Date</option>
                <option value="6mo">Last Month</option>
                <option value="12mo">Last 12 Month</option>
              </select>
            </div>
          </div>
          <div className="w-full bg-white rounded shadow-xl dark:bg-gray-825 p-[50px]">
            <div className="flex flex-wrap">
              {chartData.top_stats &&
                chartData.top_stats.map((item, i) => {
                  return (
                    <div
                      className="w-1/2 px-8 my-4 border-r lg:w-auto "
                      key={i}
                    >
                      <div class="text-xs font-bold tracking-wide text-gray-500 uppercase dark:text-gray-400 whitespace-nowrap">
                        {item.name ?? ''}
                      </div>
                      <div className="flex items-center justify-between my-1 whitespace-nowrap">
                        <b
                          class="mr-4 text-xl md:text-2xl dark:text-gray-100"
                          tooltip="4 unique visitors"
                        >
                          {item.value ?? 0}
                        </b>
                        <span class="text-xs dark:text-gray-100">
                          <span class="text-red-400 font-bold">↓</span>{' '}
                          {item.change ?? '000'}%
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="h-[400px]">
              <div className={styles.canvas_wrapper}>
                {' '}
                <Line options={options} data={data} />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
