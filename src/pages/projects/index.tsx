import React from 'react';
import Layout from "@/components/Layout/Layout";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
    return (
        <Layout>
            <main
                className={`flex flex-col items-center justify-between mobile:p-5 desktop:p-10 max-w-full`}
            >
                <Swiper
                    className={'w-full h-[500px]'}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade ]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    title={'Projects'}
                    about={'Look'}
                    navigation
                    
                    effect={'fade'}
                    autoplay={{
                        delay: 1,
                        waitForTransition: true,
                    }}
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true, hide: true}}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className={'slide bg_one'}>
                        <div className={'w-full h-full flex flex-col items-center justify-center'}>
                            <span>Slide 1</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'slide bg_two'}>
                        <div className={'w-full h-full flex flex-col items-center justify-center'}>
                            <span>Slide 4</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'slide bg_three'}>
                        <div className={'w-full h-full flex flex-col items-center justify-center'}>
                            <span>Slide 3</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'slide bg_four'}>
                        <div className={'w-full h-full flex flex-col items-center justify-center'}>
                            <span>Slide 2</span>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </main>
        </Layout>
    );
};

export default Projects;