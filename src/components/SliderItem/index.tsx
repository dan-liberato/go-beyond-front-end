/* eslint-disable @next/next/no-img-element */
import styles from "../Slider/slider.module.css";

type SliderItemProps = {
	mobileImage: string;
	desktopImage: string;
	title: string;
	subtitle: string;
};

export const SliderItem = ({
	mobileImage,
	desktopImage,
	title,
	subtitle,
}: SliderItemProps) => {
	return (
		// <SwiperSlide className={styles.slider__contentItem}>
		<div className={styles.itemSlider}>
			<div className={styles.itemSlider__mobileImage}>
				<div className={styles.mobileImage__overlay}></div>

				<div className={styles.mobileImage__image}>
					<img src={mobileImage} alt="Buy" />
				</div>
			</div>

			<div className={styles.itemSlider__desktopImage}>
				<img src={desktopImage} alt="Buy" />
			</div>

			<div className={styles.itemSlider__text}>
				<span className={styles.textSubtitle}>{subtitle}</span>
				<h2 className={styles.textTitle}>{title}</h2>
			</div>
		</div>
		// </SwiperSlide>
	);
};
