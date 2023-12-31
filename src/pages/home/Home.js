import React from 'react'
import Slider from '../../components/slider/Slider'
import styles from '../../components/homeInfoBox/HomeInfoBox.module.scss'
import HomeInfoBox from '../../components/homeInfoBox/HomeInfoBox'
import ProductCarousel from '../../components/carousel/Carousel'
import { productData } from '../../components/carousel/data'
import CarouselItem from '../../components/carousel/CarouselItem'
import ProductCategory from './ProductCategory'
import FooterLinks from '../../components/footer/FooterLinks'

const SectionHeadings = ({heading, btnText})=>{
 return(
  <>
   <div className='--flex-between'>
    <h2 className='--fw-thin'>{heading}</h2>
    <button className='--btn'>{btnText}</button>
   </div>
   <div className='--hr'></div>
  </>
 )
}

const Home = () => {
 const productss = productData.map((item)=>(
  <div key={item.id}>
   <CarouselItem 
    name={item.name}
    imgUrl={item.imageurl}
    price={item.price}
    description={item.description}
   />
  </div>
 ))
  return (
    <>
      <Slider />
      <section className={'container'}>
        <HomeInfoBox />
        <SectionHeadings heading={"Latest Product"} btnText={"Shop Now>>>"}/>
        <ProductCarousel products={productss}></ProductCarousel>
      </section>

      <section className={'--bg-grey'}>
       <div className='container'>
        <h3>Categories</h3>
        <ProductCategory />
       </div>
      </section>

      <section className={'container'}>
        <SectionHeadings heading={"Mobile Phones"} btnText={"Shop Now>>>"}/>
        <ProductCarousel products={productss}></ProductCarousel>
      </section>

      <FooterLinks />
    </>
  )
}

export default Home

