import React, { Fragment } from 'react';
import Chart from '../../_common/components/chart';
import ChartOverview from '../../_common/components/chart_overview';

export default function MainHome() {
  return (
    <Fragment>
      <Chart />
      <ChartOverview />
    </Fragment>
  );
}
