import { useState } from "react";

import styles from "./star.module.css";

type Star = {
	selected: boolean;
	onClick: () => void;
};

type StarRating = {
	totalStars: number;
};

export const Star = ({ selected = false, onClick }: Star) => (
	<div
		className={selected ? `${styles.item} ${styles.selected}` : styles.item}
		onClick={onClick}
	/>
);

export const StarRating = ({ totalStars }: StarRating) => {
	const [starsSelected, selectStar] = useState<number>(0);
	return (
		<div className={styles.rating}>
			{[...Array(totalStars)].map((n, item) => (
				<Star
					key={item}
					selected={item < starsSelected}
					onClick={() => selectStar(item + 1)}
				/>
			))}
		</div>
	);
};
