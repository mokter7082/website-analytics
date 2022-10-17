import { useEffect, useState } from 'react';

export const useData = () => {
  // ACTIVE BUTTON STATE
  const [sourceActive, setSourceActive] = useState(1);
  const [pageActive, setPageActive] = useState(1);
  const [countryActive, setCountryActive] = useState(1);
  const [deviceActive, setDeviceActive] = useState(1);
  //PARAMETTER
  const [sourceParameter, setSourceParameter] = useState('sources');
  const [pageParameter, setPageParameter] = useState('pages');
  const [deviceParameter, setDeviceParameter] = useState('screen-sizes');
  //DATA
  const [period, setPeriod] = useState('day');
  const [chartData, setChartData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [pageData, setpageData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  //CHART DEPENDENCY
  const [chartPriod, setChartPriod] = useState('day');
  //LOADING SET
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [countryLoading, setPageCountryLoading] = useState(true);
  const [deviceLoading, setDeviceLoading] = useState(true);

  //REGULAR FUNCTION
  const periodHandleClick = (e) => {
    setPeriod(e.target.value);
  };
  const chartPriodHandler = (e) => {
    setChartPriod(e.target.value);
  };
  // CHART API
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://analytics.myunisearch.com/api/stats/dev.myunisearch.com/main-graph?period=${period}&auth=29sPfCPnu5-vdBhR4S2BR`
    )
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
        setLoading(false);
      });
  }, [period]);
  //SOURCE API
  useEffect(() => {
    setSourceLoading(true);
    fetch(
      `https://analytics.myunisearch.com/api/stats/dev.myunisearch.com/${sourceParameter}?period=${chartPriod}&date=2022-09-19&filters=%7B%7D&auth=29sPfCPnu5-vdBhR4S2BR&show_noref=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setSourceData(data);
        setSourceLoading(false);
      });
  }, [sourceParameter, period]);
  //PAGE PARAMITTER
  useEffect(() => {
    setPageLoading(true);
    fetch(
      `https://analytics.myunisearch.com/api/stats/dev.myunisearch.com/${pageParameter}?period=${chartPriod}&date=2022-10-07&filters=%7B%7D&auth=29sPfCPnu5-vdBhR4S2BR`
    )
      .then((res) => res.json())
      .then((data) => {
        setpageData(data);
        setPageLoading(false);
      });
  }, [pageParameter, period]);
  //COUNTRY API
  useEffect(() => {
    setPageCountryLoading(true);
    fetch(
      `https://analytics.myunisearch.com/api/stats/dev.myunisearch.com/countries?period=${chartPriod}&date=2022-09-19&filters=%7B%7D&auth=29sPfCPnu5-vdBhR4S2BR`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setPageCountryLoading(false);
      });
  }, [countryActive, period]);
  // DEVICE API
  useEffect(() => {
    setDeviceLoading(true);
    fetch(
      `https://analytics.myunisearch.com/api/stats/dev.myunisearch.com/${deviceParameter}?period=${chartPriod}&date=2022-10-07&filters=%7B%7D&auth=29sPfCPnu5-vdBhR4S2BR`
    )
      .then((res) => res.json())
      .then((data) => {
        setDeviceData(data);
        setDeviceLoading(false);
      });
  }, [deviceParameter, period]);
  // RETURN ALL FUNCTION
  return {
    chartData,
    period,
    setPeriod,
    periodHandleClick,
    chartPriodHandler,
    sourceActive,
    setSourceActive,
    sourceParameter,
    sourceData,
    setSourceParameter,
    pageActive,
    setPageActive,
    setPageParameter,
    pageData,
    setCountryActive,
    countryActive,
    countriesData,
    deviceActive,
    setDeviceActive,
    setDeviceParameter,
    deviceData,
    setChartPriod,
    loading,
    sourceLoading,
    pageLoading,
    countryLoading,
    deviceLoading,
  };
};
export default useData;
