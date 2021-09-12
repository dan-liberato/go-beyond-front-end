/* eslint-disable @next/next/no-img-element */
import { Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./slider.module.css";

export const Slider = () => {
	return (
		<div className={styles.slider}>
			<Swiper
				modules={[Autoplay, Pagination, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={true}
				className={styles.slider__content}
			>
				<SwiperSlide className={styles.slider__contentItem}>
					<div className={styles.itemSlider}>
						<div className={styles.itemSlider__mobileImage}>
							<div className={styles.mobileImage__overlay}></div>

							<div className={styles.mobileImage__image}>
								<img
									src="/assets/slider/buy-online.png"
									alt="Buy"
								/>
							</div>
						</div>

						<div className={styles.itemSlider__desktopImage}>
							<img src="/assets/slider/front-end.png" alt="Buy" />
						</div>

						<div className={styles.itemSlider__text}>
							<span className={styles.textSubtitle}>
								front-end • back-end • mobile
							</span>
							<h2 className={styles.textTitle}>
								Olá, você quer entrar de cabeça em
								desenvolvimento?
							</h2>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className={styles.slider__contentItem}>
					<div className={styles.itemSlider}>
						<div className={styles.itemSlider__mobileImage}>
							<div className={styles.mobileImage__overlay}></div>

							<div className={styles.mobileImage__image}>
								<img
									src="/assets/slider/buy-online.png"
									alt="Buy"
								/>
							</div>
						</div>

						<div className={styles.itemSlider__desktopImage}>
							<img src="/assets/slider/front-end.png" alt="Buy" />
						</div>

						<div className={styles.itemSlider__text}>
							<span className={styles.textSubtitle}>
								front-end • back-end • mobile
							</span>
							<h2 className={styles.textTitle}>
								Olá, você quer entrar de cabeça em
								desenvolvimento?
							</h2>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className={styles.slider__contentItem}>
					<div className={styles.itemSlider}>
						<div className={styles.itemSlider__mobileImage}>
							<div className={styles.mobileImage__overlay}></div>

							<div className={styles.mobileImage__image}>
								<img
									src="/assets/slider/buy-online.png"
									alt="Buy"
								/>
							</div>
						</div>

						<div className={styles.itemSlider__desktopImage}>
							<img src="/assets/slider/front-end.png" alt="Buy" />
						</div>

						<div className={styles.itemSlider__text}>
							<span className={styles.textSubtitle}>
								front-end • back-end • mobile
							</span>
							<h2 className={styles.textTitle}>
								Olá, você quer entrar de cabeça em
								desenvolvimento?
							</h2>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
