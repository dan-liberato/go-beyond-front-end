import type { NextPage } from "next";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Slider />

			<main className={styles.main}></main>

			<Footer />
		</div>
	);
};

export default Home;
