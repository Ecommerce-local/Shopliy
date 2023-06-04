import { Carousel } from '@mantine/carousel'
import { Carousel1, Carousel2, Carousel3 } from './../../../assets'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import bannerApi from '../../../api/bannerApi'

const HeroCarousel = () => {
  const [banners, setBanners] = useState([])
  const allBanners = async () => {
    try {
      const res = await bannerApi.getAllBanner()
      setBanners(res.banners)
    } catch (error) {console.log(error);}
  }

  useEffect(() => {
    allBanners()
  }, [])
  return (
    <div className="mb-20 mt-12">
      <Carousel
        slideSize="70%"
        height="100%"
        slideGap="xs"
        controlsOffset="md"
        controlSize={29}
        loop
        withIndicators
      >
        
        {banners.map((item) => (
          <Carousel.Slide className="flex justify-center">
          {''}
          <Link to={item.redirect}>
            <img className=" h-fit" src={item.src} alt="carousel"/>
          </Link>
        </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}

export default HeroCarousel
