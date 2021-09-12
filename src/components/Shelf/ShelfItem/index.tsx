/* eslint-disable @next/next/no-img-element */
import styles from "../shelf.module.css";

type ShelfItemProps = {
	image: string;
	name: string;
	flag: boolean;
	listPrice: string;
	price: string;
	installments: string;
};

export const ShelfItem = ({
	image,
	name,
	flag,
	listPrice,
	price,
	installments,
}: ShelfItemProps) => {
	return (
		<article className={`${styles.product} flexColCenter`}>
			<img className={styles.product__image} src={image} alt={name} />

			{flag && (
				<img
					className={styles.product__flag}
					src="/assets/shelf/flag.png"
					alt="Off"
				/>
			)}

			<h2 className={styles.product__title}>{name}</h2>

			<div className={styles.product__rating}>
				{/* <ReactStars
									count={5}
									value={rating || stars}
									onChange={ratingChanged}
									size={24}
									isHalf={true}
									activeColor="#F8475F"
								/> */}
			</div>

			<div className={styles.product__listPrice}>
				<span>de R$ {listPrice}</span>
			</div>

			<div className={styles.product__price}>
				<span>por</span>
				<span>R$ {price}</span>
			</div>

			<div className={styles.product__installments}>{installments}</div>

			<a
				href={`https://api.whatsapp.com/send?phone=5514996154131&text=Olá,%20tudo%20bem?%20O%20${name}%20ainda%20está%20disponível?`}
				onClick={() => {}}
				className={`btn-primary add-to-cart`}
				target="_blank"
				rel="noreferrer"
			>
				<img src="/assets/icons/whatsapp.png" alt="WhatsApp" />
				Comprar
			</a>
		</article>
	);
};
