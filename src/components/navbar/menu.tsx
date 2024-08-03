import { useEffect, useState } from "react";
import { MenuIcon } from "./menu-icon.tsx";
import { useMediaQuery } from "usehooks-ts";

export function Menu(props: { menuLink?: any[] }) {
	const [show, setShow] = useState(false);
	const matches = useMediaQuery("(min-width: 641px)");
	useEffect(() => {
		if (matches) {
			setShow(false);
		}
	}, [matches]);
	return (
		<>
			<ul
				aria-hidden={show}
				data-show={show}
				className=" max-[640px]:data-[show=false]:pointer-events-none max-[640px]:data-[show=false]:opacity-0 max-[640px]:data-[show=false]:transition-opacity max-[640px]:data-[show=true]:duration-300  flex flex-col sm:flex-row max-[640px]:w-full max-[640px]:rounded-lg max-[640px]:p-4 max-[640px]:absolute top-full max-[640px]:bg-background-100/80 max-[640px]:backdrop-blur-sm gap-x-2 max-[640px]:border max-[640px]:data-[show=true]:z-50 max-[640px]:border-background-200">
				{props.menuLink}
			</ul>
			<MenuIcon
				onClick={() => {
					setShow(!show);
				}}
			/>
		</>
	);
}
