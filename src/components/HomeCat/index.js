import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
    return (

        <section className="homeCat">
            <div className="container">

\                    <Swiper
                        slidesPerView={10}
                        spaceBetween={20}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"
                                alt=""
                                ></img>
                                <h7>Red Apple</h7>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png"
                                alt=""></img>
                                <h7>Snack</h7>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png"
                                alt=""></img>
                                <h7>Custard Apple</h7>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png"
                                alt=""></img>
                                <h6>Strawberry</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png"
                                alt=""></img>
                                <h6>Black Plum</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png"
                                alt=""></img>
                                <h6>Custard Apple</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png"
                                alt=""></img>
                                <h6>Coffe & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png"
                                alt=""></img>
                                <h6>HeadPhone</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png"
                                alt=""></img>
                                <h6>Snack</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png"
                                alt="">
                                </img>
                                <h6>Peach</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png"
                                alt=""></img>
                                <h6>Peach

                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"
                                alt=""></img>
                                <h6>Red Apple</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"
                                alt=""></img>
                                <h6>Red Apple</h6>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
\            </div>
        </section>

    )

}

export default HomeCat;