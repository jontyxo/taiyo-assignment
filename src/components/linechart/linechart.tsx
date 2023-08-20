import "./linechart.css"
import { useQuery } from '@tanstack/react-query'
import {Line}from "react-chartjs-2"
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

interface CovidData {
  cases: {
    [date: string]: number;
  };
  
}

const Chart = ( ) => {
  const { data:chartData, isLoading, isError } = useQuery<CovidData>(
    ['covidData'],
    async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      return response.json();
    }
  );
  // console.log(chartData?.cases)
  if (isLoading) {
    return <div className="chart">Loading...</div>;
  }

  if (isError || !chartData) {
    return <div className="chart">Error fetching data</div>;
  }
  const data={
    labels:Object.keys(chartData.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(chartData.cases),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ]
  }

  return (
    <>
    <div className="headlineC">Case Fluctuation Chart:</div>
    <div className="chart">
      <div className='chart' >
        <Line data={data}></Line>
      </div>
  
    </div>
          </>
  )
}

export default Chart