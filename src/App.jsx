
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar'
import RecapNavbar from './components/Navbar/RecapNavbar'
import PriceingOption from './components/Options/PriceingOption'
import ResultCharts from './components/ResultCharts/ResultCharts'
import BarCharts from './components/ResultCharts/BarCharts'
import PaiCharts from './components/ResultCharts/PieCharts'
import AxiosData from './components/axiosData/AxiosData'
import axios, { Axios } from 'axios'


const pricingPromise = fetch("priceingData.json").then(res => res.json())

const markPromise = axios.get('markData.json')
function App() {

  return (
    <>

      <header>
        <RecapNavbar></RecapNavbar>
        {/* <Navbar></Navbar> */}
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PriceingOption pricingPromise={pricingPromise}></PriceingOption>
        </Suspense>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
<AxiosData markPromise={markPromise}></AxiosData>
        </Suspense>
        <PaiCharts></PaiCharts>
        <BarCharts></BarCharts>
        <ResultCharts></ResultCharts>
      </main>
    </>
  )
}

export default App
