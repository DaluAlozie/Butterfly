import type { NextPage } from 'next'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ranking from '../../web_assets/web_assets/About/ranking.png'
import prizes from '../../web_assets/web_assets/About/prizes.png'
import friendPoints from '../../web_assets/web_assets/About/friendPoints.png'

import Image from 'next/image';

import { sectionType, sectionClass,imageClass,sectionTitleClass, imageHeight } from './utils';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const allSections : sectionType[] = [
  {
    caption: "Gain Points",
    image: friendPoints
  },
  {
    caption: "Climb the Ranks",
    image: ranking
  },
  {
    caption: "Win Prizes !!",
    image: prizes
  }
]

const PointSwiper: NextPage = () => {
  return (
    <div>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        initialSlide={3}
        className="section-swiper ml-24 mr-10 p-36"

        >
          {
            allSections.map((section: sectionType) => 
              <SwiperSlide key={section.caption}>
                <div className={sectionClass}>
                  <div className={sectionTitleClass}>{section.caption}</div>
                  <div className={imageClass}>
                    <Image
                        src={section.image}
                        alt={section.caption}
                        height={imageHeight}
                      />
                  </div>
                </div>      
              </SwiperSlide>
            )
          }
        </Swiper>

    </div>
  )
}

export default PointSwiper
