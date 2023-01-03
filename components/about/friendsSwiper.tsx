import type { NextPage } from 'next'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from '../../web_assets/web_assets/About/profile.png'
import makeFriends from '../../web_assets/web_assets/About/makeFriends.png'


import Image from 'next/image';

import { sectionType, sectionClass,imageClass,sectionTitleClass, imageHeight, swiperClass } from './utils';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const allSections : sectionType[] = [
  {
    caption: "Build your Profile",
    image: profile
  },
  {
    caption: "Make New Friends",
    image: makeFriends
  }
]

const FriendsSwiper: NextPage = () => {
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

export default FriendsSwiper
