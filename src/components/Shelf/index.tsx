import React, { useContext, useState } from "react";
import Carousel from "react-elastic-carousel";
import { ShelfItem } from "./ShelfItem";

import styles from "./shelf.module.css";

export const Shelf = () => {
	const breakPoints = [
		{ width: 300, itemsToShow: 1 },
		{ width: 486, itemsToShow: 2 },
		{ width: 728, itemsToShow: 3 },
		{ width: 960, itemsToShow: 4 },
		{ width: 1200, itemsToShow: 5 },
	];

	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<h2 className={`${styles.section__title} title`}>
					Mais Vendidos
				</h2>

				<div className={styles.section__content}>
					<Carousel
						isRTL={false}
						pagination={false}
						breakPoints={breakPoints}
					>
						<ShelfItem
							image={"/assets/shelf/sapato-floater-preto.png"}
							name={"Sapato Floater Preto"}
							rating={5}
							flag={true}
							listPrice={"299,00"}
							price={"259,90"}
							installments={"ou em 9x de R$  28,87"}
						/>

						<ShelfItem
							image={"/assets/shelf/sapato-social.jpg"}
							name={"Sapato Floater Preto"}
							rating={5}
							flag={true}
							listPrice={"99,00"}
							price={"79,90"}
							installments={"ou em 9x de R$ 39,95"}
						/>

						<ShelfItem
							image={"/assets/shelf/coturno-preto.webp"}
							name={"Coturno Preto"}
							rating={5}
							flag={true}
							listPrice={"299,00"}
							price={"223,19"}
							installments={"ou em 4x de R$ 60,00"}
						/>

						<ShelfItem
							image={"/assets/shelf/coturno-em-couro-preto.webp"}
							name={"Coturno em Couro"}
							rating={5}
							flag={true}
							listPrice={"297,70"}
							price={"147,70"}
							installments={"ou em 3x de R$ 49,23"}
						/>

						<ShelfItem
							image={"/assets/shelf/coturno-adventure-trail.jpg"}
							name={"Coturno Adventure Trail"}
							rating={5}
							flag={true}
							listPrice={"199,00"}
							price={"132,90"}
							installments={"ou em 6x de R$ 22,15"}
						/>

						<ShelfItem
							image={
								"/assets/shelf/nike-sportswear-venture-runner.webp"
							}
							name={"Nike Venture Runner"}
							rating={5}
							flag={false}
							listPrice={"269,89"}
							price={"269,89"}
							installments={"ou em 6x de R$ 44,98"}
						/>

						<ShelfItem
							image={"/assets/shelf/polo-joy-casual.jpg"}
							name={"Tênis Polo Joy Casual"}
							rating={5}
							flag={true}
							listPrice={"199,98"}
							price={"79,90"}
							installments={"ou em 2x de R$ 39,95"}
						/>
					</Carousel>
				</div>
			</section>
		</div>
	);
};
