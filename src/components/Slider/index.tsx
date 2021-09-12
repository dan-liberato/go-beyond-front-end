/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "../SliderItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./slider.module.css";

export const Slider = () => {
	return (
		<section className={styles.slider}>
			<Swiper
				modules={[Autoplay, Pagination, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={true}
				className={styles.slider__content}
			>
				<SwiperSlide className={styles.slider__contentItem}>
					<SliderItem
						title="Olá, você quer entrar de cabeça em
								desenvolvimento?"
						subtitle="front-end • back-end • mobile"
						desktopImage="/assets/slider/front-end.png"
						mobileImage="/assets/slider/buy-online.png"
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.slider__contentItem}>
					<SliderItem
						title="Olá, você quer entrar de cabeça em
								desenvolvimento?"
						subtitle="front-end • back-end • mobile"
						desktopImage="/assets/slider/front-end.png"
						mobileImage="/assets/slider/buy-online.png"
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.slider__contentItem}>
					<SliderItem
						title="Olá, você quer entrar de cabeça em
								desenvolvimento?"
						subtitle="front-end • back-end • mobile"
						desktopImage="/assets/slider/front-end.png"
						mobileImage="/assets/slider/buy-online.png"
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.slider__contentItem}>
					<SliderItem
						title="Olá, você quer entrar de cabeça em
								desenvolvimento?"
						subtitle="front-end • back-end • mobile"
						desktopImage="/assets/slider/front-end.png"
						mobileImage="/assets/slider/buy-online.png"
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
