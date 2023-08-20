import React from 'react'
import Chart from '../../components/linechart/linechart'
import WorldMap from '../../components/Map/worldMap'
import WorldData from '../../components/worldData/worldData'
import "./map.css"
type Props = {}

const Map = (props: Props) => {
  return (
    <>
    <div className='mapMain'>
      <WorldData />
    <WorldMap />
    <Chart />

    </div>

    </>
  )
}

export default Map