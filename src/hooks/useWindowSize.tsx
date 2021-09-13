// reference https://usehooks.com/useWindowSize/
import { useState, useEffect } from "react";

export type Size = {
	width: string | number;
	height: string | number;
};

export const useWindowSize = (): Size => {
	const [windowSize, setWindowSize] = useState<Size>({
		width: "",
		height: "",
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};
