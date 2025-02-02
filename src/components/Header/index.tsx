/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { useCallback, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize, Size } from "../../hooks/useWindowSize";

import styles from "./header.module.css";
import { MenuMobile } from "../MenuMobile";

export const Header = () => {
	const size: Size = useWindowSize();
	const [openMenu, setOpenMenu] = useState(false);

	const handleOpenMenu = () => {
		setOpenMenu(true);
	};

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<>
			<Head>
				<title>Go Beyond - CoreBiz</title>
				<meta
					name="description"
					content="Venha fazer parte do futuro"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="crossOrigin"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.container}>
				<div className={styles.topbar}>
					<div
						className={styles.topbar__icon}
						onClick={handleOpenMenu}
					>
						<svg
							width="23"
							height="16"
							viewBox="0 0 23 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								id="Icon"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 15.0154H22.5V12.5128H0V15.0154ZM0 8.75904H22.5V6.25647H0V8.75904ZM0 0V2.50257H22.5V0H0Z"
								fill="black"
							></path>
						</svg>
					</div>

					<div
						className={`${styles.topbar__contents} ${styles.contentLogo}`}
					>
						<Link href="/">
							<a>
								<img
									src="/assets/brand/gobeyond.svg"
									alt="CoreBiz"
									className={styles.contentLogo}
								/>
							</a>
						</Link>
					</div>

					<nav
						className={`${styles.topbar__contents} ${styles.menu}`}
					>
						<ul className={styles.menu__list}>
							<li className={styles.menu__list__item}>
								<Link href="/">Home</Link>
							</li>
							<li className={styles.menu__list__item}>
								<Link href="#">
									<a>
										<span>Sapatos</span>
										<Image
											src="/assets/icons/coolicon.png"
											alt="arrow_down"
											width="10"
											height="5"
										/>
									</a>
								</Link>
							</li>
							<li className={styles.menu__list__item}>
								<Link href="#">
									<a>
										<span>Sandálias</span>
										<Image
											src="/assets/icons/coolicon.png"
											alt="arrow_down"
											width="10"
											height="5"
										/>
									</a>
								</Link>
							</li>
							<li className={styles.menu__list__item}>
								<Link href="#">Contato</Link>
							</li>
						</ul>
					</nav>

					<div
						className={`${styles.topbar__contents} ${styles.search}`}
					>
						<form className={styles.search__form}>
							<input
								type="search"
								name="search"
								placeholder="O que está procurando?"
								id="search"
								className={styles.search__formInput}
							/>
							<button
								type="submit"
								placeholder="Busque por modelos ou coleção"
								className={styles.search__formSubmit}
							>
								<img
									src="/assets/icons/search.svg"
									alt="Search"
								/>
							</button>
						</form>
					</div>

					<ul
						className={`${styles.topbar__contents} ${styles.contentUtilities}`}
					>
						<li
							className={`${styles.utilitiesItem} ${styles.itemAccount}`}
						>
							<Link href="/">
								<a>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path
												d="M8.87173 8.67069C10.0629 8.67069 11.0943 8.24346 11.9372 7.40053C12.7798 6.55774 13.2072 5.52654 13.2072 4.33521C13.2072 3.14429 12.78 2.11295 11.9371 1.26988C11.0941 0.427231 10.0628 0 8.87173 0C7.6804 0 6.6492 0.427231 5.80641 1.27002C4.96362 2.11281 4.53625 3.14415 4.53625 4.33521C4.53625 5.52654 4.96362 6.55788 5.80641 7.40067C6.64948 8.24332 7.68082 8.67069 8.87173 8.67069ZM6.55238 2.01585C7.19907 1.36917 7.95767 1.05483 8.87173 1.05483C9.78566 1.05483 10.5444 1.36917 11.1912 2.01585C11.8379 2.66267 12.1524 3.42142 12.1524 4.33521C12.1524 5.24927 11.8379 6.00787 11.1912 6.6547C10.5444 7.30152 9.78566 7.61586 8.87173 7.61586C7.95795 7.61586 7.19934 7.30138 6.55238 6.6547C5.90556 6.00801 5.59108 5.24927 5.59108 4.33521C5.59108 3.42142 5.90556 2.66267 6.55238 2.01585Z"
												fill="black"
											></path>
											<path
												d="M16.4577 13.8412C16.4334 13.4904 16.3842 13.1078 16.3118 12.7038C16.2388 12.2968 16.1447 11.912 16.0321 11.5603C15.9156 11.1968 15.7576 10.8378 15.5619 10.4938C15.359 10.1367 15.1206 9.82581 14.8531 9.56996C14.5734 9.30231 14.2309 9.08711 13.8348 8.93015C13.4401 8.774 13.0027 8.6949 12.5349 8.6949C12.3511 8.6949 12.1734 8.77029 11.8302 8.99373C11.619 9.13147 11.372 9.29077 11.0962 9.46697C10.8604 9.6172 10.541 9.75797 10.1464 9.88541C9.76149 10.01 9.37065 10.0731 8.98476 10.0731C8.59914 10.0731 8.2083 10.01 7.82309 9.88541C7.42896 9.7581 7.10939 9.61734 6.87401 9.4671C6.60086 9.29256 6.35367 9.13326 6.1393 8.99359C5.79639 8.77016 5.61868 8.69476 5.43494 8.69476C4.96692 8.69476 4.52966 8.774 4.13512 8.93028C3.73933 9.08698 3.3967 9.30217 3.11668 9.5701C2.84917 9.82608 2.61076 10.1369 2.40807 10.4938C2.21265 10.8378 2.05444 11.1966 1.93799 11.5604C1.82552 11.9121 1.73145 12.2968 1.65839 12.7038C1.58588 13.1073 1.53685 13.49 1.51254 13.8416C1.48865 14.1853 1.47656 14.5431 1.47656 14.9045C1.47656 15.8441 1.77525 16.6048 2.36426 17.1658C2.94598 17.7194 3.71558 18.0001 4.65175 18.0001H13.3189C14.2548 18.0001 15.0244 17.7194 15.6062 17.1658C16.1954 16.6052 16.4941 15.8443 16.4941 14.9044C16.4939 14.5417 16.4817 14.1839 16.4577 13.8412ZM14.8789 16.4015C14.4945 16.7674 13.9842 16.9452 13.3187 16.9452H4.65175C3.98611 16.9452 3.4758 16.7674 3.09155 16.4017C2.71458 16.0428 2.53139 15.553 2.53139 14.9045C2.53139 14.5672 2.54251 14.2342 2.56476 13.9145C2.58646 13.6009 2.63081 13.2563 2.69659 12.8902C2.76155 12.5286 2.84422 12.1892 2.94255 11.882C3.0369 11.5875 3.16557 11.2958 3.32515 11.0148C3.47745 10.747 3.65268 10.5173 3.84604 10.3321C4.0269 10.159 4.25487 10.0172 4.52348 9.91095C4.77191 9.81262 5.0511 9.75879 5.35419 9.75069C5.39113 9.77033 5.45691 9.80782 5.56348 9.87731C5.78032 10.0186 6.03026 10.1798 6.30657 10.3563C6.61803 10.5549 7.0193 10.7342 7.49872 10.889C7.98885 11.0475 8.48873 11.128 8.9849 11.128C9.48107 11.128 9.98108 11.0475 10.4709 10.8891C10.9508 10.7341 11.3519 10.5549 11.6638 10.356C11.9465 10.1753 12.1895 10.0188 12.4063 9.87731C12.5129 9.80795 12.5787 9.77033 12.6156 9.75069C12.9188 9.75879 13.198 9.81262 13.4466 9.91095C13.7151 10.0172 13.943 10.1591 14.1239 10.3321C14.3172 10.5171 14.4925 10.7469 14.6448 11.0149C14.8045 11.2958 14.9333 11.5876 15.0275 11.8819C15.126 12.1895 15.2088 12.5287 15.2736 12.89C15.3393 13.2568 15.3837 13.6015 15.4054 13.9146V13.9149C15.4278 14.2334 15.4391 14.5663 15.4392 14.9045C15.4391 15.5531 15.2559 16.0428 14.8789 16.4015Z"
												fill="black"
											></path>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect
													width="18"
													height="18"
													fill="white"
												></rect>
											</clipPath>
										</defs>
									</svg>
									<span>Minha Conta</span>
								</a>
							</Link>
						</li>
						<li
							className={`${styles.utilitiesItem} ${styles.itemCart}`}
						>
							<Link href="/">
								<a>
									<svg
										className="item--cart__icon"
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="#000"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.8717 4.43517C17.7713 4.31982 17.6261 4.25391 17.4736 4.25391H4.10245L3.72188 1.32659C3.5957 0.557719 2.93909 0 2.16045 0H0.52832C0.23684 0 0.000976562 0.235863 0.000976562 0.527344C0.000976562 0.818824 0.23684 1.05469 0.52832 1.05469H2.16045C2.42001 1.05469 2.63886 1.24059 2.67851 1.48057L3.1147 4.83015C3.11624 4.84407 3.11779 4.85743 3.12036 4.87083L4.10346 12.3707C4.13011 12.5333 4.19276 12.6803 4.26406 12.8209C3.64686 13.0367 3.20016 13.6186 3.20016 14.3086C3.20016 15.181 3.90982 15.8836 4.78219 15.8836H5.40667C5.34757 16.0494 5.30953 16.2322 5.30953 16.418C5.30953 17.2903 6.0192 18 6.89157 18C7.76393 18 8.4736 17.2903 8.4736 16.418C8.4736 16.2322 8.43556 16.0494 8.37646 15.8836H11.77C11.7109 16.0494 11.6728 16.2322 11.6728 16.418C11.6728 17.2903 12.3825 18 13.2548 18C14.1272 18 14.8369 17.2903 14.8369 16.418C14.8369 16.2322 14.7988 16.0564 14.7397 15.8906H16.4189C16.7104 15.8906 16.9463 15.6548 16.9463 15.3633C16.9463 15.0718 16.7104 14.8359 16.4189 14.8359H4.78219C4.49124 14.8359 4.25485 14.5995 4.25485 14.3086C4.25485 14.0176 4.49127 13.7812 4.83011 13.7792L8.03428 13.4877L15.6552 12.7981C16.3721 12.7332 16.955 12.192 17.075 11.469L17.9958 4.85437C18.0169 4.70296 17.9716 4.55052 17.8717 4.43517ZM5.71228 12.6395C5.43163 12.6704 5.18856 12.4716 5.1463 12.2162L4.51919 7.41797H6.40764L6.84319 12.5367L5.71228 12.6395ZM10.0908 12.2447L8.13128 12.4196H8.13114L8.10038 12.4225L7.89324 12.4413L7.46588 7.41797H10.0908V12.2447ZM13.2948 11.9535L11.1455 12.1489V7.41797H13.7291L13.2948 11.9535ZM16.0327 11.3093C15.9931 11.5457 15.7989 11.7259 15.5599 11.7476L14.3634 11.8563L14.7883 7.41797H16.5724L16.0327 11.3093Z"
											fill="black"
										></path>
									</svg>
									<div className={styles.itemCart__amount}>
										0
									</div>
								</a>
							</Link>
						</li>
					</ul>
				</div>

				{size.width < 1024 && (
					<MenuMobile open={openMenu}>
						<button
							className={styles.closeButton}
							onClick={handleCloseMenu}
						>
							x
						</button>
					</MenuMobile>
				)}
			</header>
		</>
	);
};
