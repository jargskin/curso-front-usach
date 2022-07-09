import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.scss'

const CarouselComponent = () => {
  return (
    <Carousel autoPlay renderThumbs={() => false} showStatus={false} className="carousel-contain">
      <div>
        <img alt="" src="https://raw.githubusercontent.com/jargskin/curso-front-usach/master/images/banner_1.png" />
        <p className='legend'>Curso Usach - Api Rick And Morty</p>
      </div>
      <div>
        <img alt="" src="https://raw.githubusercontent.com/jargskin/curso-front-usach/master/images/banner_2.png" />
        <p className='legend'>Curso Usach - Api Rick And Morty</p>
      </div>
    </Carousel>
  )
}
export default CarouselComponent;
