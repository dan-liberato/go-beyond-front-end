/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "../SliderItem";

import styles from "./slider.module.css";

export const Slider = () => {
	return (
		<section className={styles.container}>
			<Swiper
				modules={[Autoplay, Navigation, Pagination, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={true}
				pagination={{ clickable: true }}
				autoplay={true}
				className={styles.content}
			>
				<SwiperSlide className={styles.contentItem}>
					<SliderItem
						title="Olá, você quer entrar de cabeça em
								desenvolvimento?"
						subtitle="front-end • back-end • mobile"
						desktopImage="/assets/slider/front-end.png"
						mobileImage="/assets/slider/buy-online.png"
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.contentItem}>
					<SliderItem
						title="Olá, você quer entrar de cabeça em
								desenvolvimento?"
						subtitle="front-end • back-end • mobile"
						desktopImage="/assets/slider/front-end.png"
						mobileImage="/assets/slider/buy-online.png"
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.contentItem}>
					<SliderItem
						title="Olá, você quer entrar de cabeça em
								desenvolvimento?"
						subtitle="front-end • back-end • mobile"
						desktopImage="/assets/slider/front-end.png"
						mobileImage="/assets/slider/buy-online.png"
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.contentItem}>
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
