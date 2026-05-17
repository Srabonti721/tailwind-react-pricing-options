
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar'
import RecapNavbar from './components/Navbar/RecapNavbar'
import PriceingOption from './components/Options/PriceingOption'

const pricingPromise = fetch("priceingData.json").then(res =>res.json())
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
</main>
    </>
  )
}

export default App
