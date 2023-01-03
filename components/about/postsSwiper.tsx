import type { NextPage } from 'next'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pics from '../../web_assets/web_assets/About/pics.png'
import events from '../../web_assets/web_assets/About/events.png'


import Image from 'next/image';

import { sectionType, sectionClass,imageClass,sectionTitleClass, imageHeight, swiperClass } from './utils';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const allSections : sectionType[] = [
  {
    caption: "Post Pics",
    image: pics
  },
  {
    caption: "Plan Events",
    image: events
  }
]

const PostsSwiper: NextPage = () => {
  return (
    <div>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={swiperClass}
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

export default PostsSwiper
