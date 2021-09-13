import type { NextPage } from "next";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Shelf } from "../components/Shelf";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/home.module.css";
import Newsletter from "../components/Newsletter";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Slider />

			<main className={styles.main}>
				<Shelf />
			</main>

			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
