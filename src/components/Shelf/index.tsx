/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from "react";
import Carousel from "react-elastic-carousel";
// import ReactStars from "react-rating-stars-component";

import styles from "./shelf.module.css";

export const Shelf = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 2 },
		{ width: 500, itemsToShow: 3 },
		{ width: 768, itemsToShow: 4 },
		{ width: 1200, itemsToShow: 5 },
	];

	// const ratingChanged = (newRating: number) => {
	// 	setRating(newRating);
	// };

	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<h2 className={`${styles.section__title} title`}>Mais Vendidos</h2>

				<div className={styles.section__content}>
					<Carousel
						isRTL={false}
						pagination={true}
						breakPoints={breakPoints}
					>
						<article className={`${styles.product} flexColCenter`}>
							<img
								className={styles.product__image}
								src="/assets/shelf/sapato-floater-preto.png"
								alt="Sapato Floater"
							/>

							<img
								className={styles.product__flag}
								src="/assets/shelf/flag.png"
								alt="Off"
							/>

							<h2 className={styles.product__title}>
								Sapato Floater Preto
							</h2>

							<div className={styles.product__rating}>
								{/* <ReactStars
									count={5}
									value={rating || product.stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
							</div>

							<div className={styles.product__listPrice}>
								<span>
									de R$ 299,00
								</span>
							</div>

							<div className={styles.product__price}>
								<span>por</span>
								<span>R$ 259,90</span>
							</div>

							<div className={styles.product__installments}>
								ou em 9x de R$ 28,87
							</div>

							<button
								onClick={() =>{}}
								className={`btn-primary add-to-cart`}
							>
								Comprar
							</button>
						</article>

						<article className={`${styles.product} flexColCenter`}>
							<img
								className={styles.product__image}
								src="/assets/shelf/sapato-floater-preto.png"
								alt="Sapato Floater"
							/>

							<img
								className={styles.product__flag}
								src="/assets/shelf/flag.png"
								alt="Off"
							/>

							<h2 className={styles.product__title}>
								Sapato Floater Preto
							</h2>

							<div className={styles.product__rating}>
								{/* <ReactStars
									count={5}
									value={rating || product.stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
							</div>

							<div className={styles.product__listPrice}>
								<span>
									de R$ 299,00
								</span>
							</div>

							<div className={styles.product__price}>
								<span>por</span>
								<span>R$ 259,90</span>
							</div>

							<div className={styles.product__installments}>
								ou em 9x de R$ 28,87
							</div>

							<button
								onClick={() =>{}}
								className={`btn-primary add-to-cart`}
							>
								Comprar
							</button>
						</article>

						<article className={`${styles.product} flexColCenter`}>
							<img
								className={styles.product__image}
								src="/assets/shelf/sapato-floater-preto.png"
								alt="Sapato Floater"
							/>

							<img
								className={styles.product__flag}
								src="/assets/shelf/flag.png"
								alt="Off"
							/>

							<h2 className={styles.product__title}>
								Sapato Floater Preto
							</h2>

							<div className={styles.product__rating}>
								{/* <ReactStars
									count={5}
									value={rating || product.stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
							</div>

							<div className={styles.product__listPrice}>
								<span>
									de R$ 299,00
								</span>
							</div>

							<div className={styles.product__price}>
								<span>por</span>
								<span>R$ 259,90</span>
							</div>

							<div className={styles.product__installments}>
								ou em 9x de R$ 28,87
							</div>

							<button
								onClick={() =>{}}
								className={`btn-primary add-to-cart`}
							>
								Comprar
							</button>
						</article>

						<article className={`${styles.product} flexColCenter`}>
							<img
								className={styles.product__image}
								src="/assets/shelf/sapato-floater-preto.png"
								alt="Sapato Floater"
							/>

							<img
								className={styles.product__flag}
								src="/assets/shelf/flag.png"
								alt="Off"
							/>

							<h2 className={styles.product__title}>
								Sapato Floater Preto
							</h2>

							<div className={styles.product__rating}>
								{/* <ReactStars
									count={5}
									value={rating || product.stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
							</div>

							<div className={styles.product__listPrice}>
								<span>
									de R$ 299,00
								</span>
							</div>

							<div className={styles.product__price}>
								<span>por</span>
								<span>R$ 259,90</span>
							</div>

							<div className={styles.product__installments}>
								ou em 9x de R$ 28,87
							</div>

							<button
								onClick={() =>{}}
								className={`btn-primary add-to-cart`}
							>
								Comprar
							</button>
						</article>

						<article className={`${styles.product} flexColCenter`}>
							<img
								className={styles.product__image}
								src="/assets/shelf/sapato-floater-preto.png"
								alt="Sapato Floater"
							/>

							<img
								className={styles.product__flag}
								src="/assets/shelf/flag.png"
								alt="Off"
							/>

							<h2 className={styles.product__title}>
								Sapato Floater Preto
							</h2>

							<div className={styles.product__rating}>
								{/* <ReactStars
									count={5}
									value={rating || product.stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
							</div>

							<div className={styles.product__listPrice}>
								<span>
									de R$ 299,00
								</span>
							</div>

							<div className={styles.product__price}>
								<span>por</span>
								<span>R$ 259,90</span>
							</div>

							<div className={styles.product__installments}>
								ou em 9x de R$ 28,87
							</div>

							<button
								onClick={() =>{}}
								className={`btn-primary add-to-cart`}
							>
								Comprar
							</button>
						</article>

						<article className={`${styles.product} flexColCenter`}>
							<img
								className={styles.product__image}
								src="/assets/shelf/sapato-floater-preto.png"
								alt="Sapato Floater"
							/>

							<img
								className={styles.product__flag}
								src="/assets/shelf/flag.png"
								alt="Off"
							/>

							<h2 className={styles.product__title}>
								Sapato Floater Preto
							</h2>

							<div className={styles.product__rating}>
								{/* <ReactStars
									count={5}
									value={rating || product.stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
							</div>

							<div className={styles.product__listPrice}>
								<span>
									de R$ 299,00
								</span>
							</div>

							<div className={styles.product__price}>
								<span>por</span>
								<span>R$ 259,90</span>
							</div>

							<div className={styles.product__installments}>
								ou em 9x de R$ 28,87
							</div>

							<button
								onClick={() =>{}}
								className={`btn-primary add-to-cart`}
							>
								Comprar
							</button>
						</article>

						<article className={`${styles.product} flexColCenter`}>
							<img
								className={styles.product__image}
								src="/assets/shelf/sapato-floater-preto.png"
								alt="Sapato Floater"
							/>

							<img
								className={styles.product__flag}
								src="/assets/shelf/flag.png"
								alt="Off"
							/>

							<h2 className={styles.product__title}>
								Sapato Floater Preto
							</h2>

							<div className={styles.product__rating}>
								{/* <ReactStars
									count={5}
									value={rating || product.stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
							</div>

							<div className={styles.product__listPrice}>
								<span>
									de R$ 299,00
								</span>
							</div>

							<div className={styles.product__price}>
								<span>por</span>
								<span>R$ 259,90</span>
							</div>

							<div className={styles.product__installments}>
								ou em 9x de R$ 28,87
							</div>

							<button
								onClick={() =>{}}
								className={`btn-primary add-to-cart`}
							>
								Comprar
							</button>
						</article>
					</Carousel>
				</div>
			</section>
		</div>
	);
};
