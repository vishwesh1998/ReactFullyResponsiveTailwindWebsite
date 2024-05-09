import React from 'react'
import Header from './components/header'
import Banner from './components/banner'
import FingerTipsComponent from './components/fingertipsComponent'
import SolarBasicsComponent from './components/solarBasicsComponent'
import PublishComponent from './components/publishComponent'
import Footer from './components/footer'
import ProductsAndFilterComponent from './components/productsAndFilterComponent'
import InnovationComponent from './components/innovationComponent'
import FormComponent from './components/formComponent'
import NumbersDeliveredComponent from './components/numbersDeliverComponent'

export default function() {
  return (
    <div>
      <Header/>
      <Banner/>
      <ProductsAndFilterComponent/>
      <InnovationComponent/>
      <FormComponent/>
      <NumbersDeliveredComponent/>
      <FingerTipsComponent/>
      <SolarBasicsComponent/>
      <PublishComponent/>
      <Footer/>
    </div>
  )
}
