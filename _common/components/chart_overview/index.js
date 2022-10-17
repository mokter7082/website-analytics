import React from 'react';
import Countries from './components/countries/countries';
import Device from './components/device/device';
import TopSource from './components/source/top_source';
import Pages from './components/top_pages/pages';

export function ChartOverview() {
  return (
    <section>
      <div className="custom_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-[20px] lg:mx-0">
          <div>
            <TopSource />
          </div>
          <div>
            <Pages />
          </div>
          <div>
            <Countries />
          </div>
          <div>
            <Device />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChartOverview;
