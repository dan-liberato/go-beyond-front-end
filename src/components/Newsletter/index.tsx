import React, { useState, FormEvent } from "react";

import styles from "./newsletter.module.css";

export const Newsletter = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [nameError, setNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [submitedLead, setSubmitedLead] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const hanldeSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (!name) {
			setNameError("Preencha com seu nome completo");
			setDisabled(true);
		}
		if (!email) {
			setEmailError("Preencha com um e-mail válido");
			setDisabled(true);
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.content}>
				{!submitedLead ? (
					<>
						<h2 className={styles.title}>
							Participe de nossas news com promoções e novidades!
						</h2>
						<form className={styles.form} onSubmit={hanldeSubmit}>
							<label
								htmlFor="name"
								className={styles.form__label}
							>
								<input
									className={`${styles.form__input} ${
										!name && nameError
											? styles.form__inputBorder
											: ""
									}`}
									type="text"
									name="name"
									placeholder="Digite seu nome"
									onChange={(e) => setName(e.target.value)}
								/>
								{!name && nameError}
							</label>

							<label
								htmlFor="email"
								className={styles.form__label}
							>
								<input
									className={`${styles.form__input} ${
										!email && emailError
											? styles.form__inputBorder
											: ""
									}`}
									type="email"
									name="email"
									placeholder="Digite seu e-mail"
									onChange={(e) => setEmail(e.target.value)}
								/>
								{!email && emailError}
							</label>

							{(disabled && !name) || (disabled && !email) ? (
								<button
									className={`btn-primary ${styles.form__button}`}
									type="submit"
									disabled
									style={{ opacity: 0.7 }}
								>
									Eu quero!
								</button>
							) : (
								<button
									className={`btn-primary ${styles.form__button}`}
									type="submit"
								>
									Eu quero!
								</button>
							)}
						</form>
					</>
				) : (
					<div className={`${styles.form__submited} flexColCenter`}>
						<h2 className={styles.form__submited__title}>
							Seu e-mail foi cadastrado com sucesso!
						</h2>
						<p className={styles.form__submited__description}>
							A partir de agora você receberá as novidades e
							ofertas exclusivas.
						</p>
						<button
							onClick={() => setSubmitedLead(false)}
							className={`btn-primary ${styles.form__button} ${styles.form__submited__button}`}
						>
							Cadastrar novo e-mail
						</button>
					</div>
				)}
			</div>
		</section>
	);
};
export default Newsletter;
