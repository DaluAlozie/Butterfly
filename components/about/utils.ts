import { StaticImageData } from "next/image"

type sectionType = {
    caption: string,
    image: StaticImageData
  }

  const sectionClass: string = "h-max p-8 about-section  m-2"
  const imageClass: string = "about-image"
  const sectionTitleClass: string = "mb-5 text-center sans-regular about-image-title"
  const imageHeight: number = 700
  const swiperClass: string = "section-swiper"

  export { type sectionType, sectionClass,imageClass,sectionTitleClass, imageHeight, swiperClass }