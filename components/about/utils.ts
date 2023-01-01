import { StaticImageData } from "next/image"

type sectionType = {
    caption: string,
    image: StaticImageData
  }

  const sectionClass: string = "h-max p-8 w-max m-4"
  const imageClass: string = "about-image"
  const sectionTitleClass: string = "mb-5 text-4xl text-center sans-italic about-image-title"
  const imageHeight: number = 700

  export { type sectionType, sectionClass,imageClass,sectionTitleClass, imageHeight }