import { LucideMenu } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function MenuIcon({
	class: classes,
	onClick,
	...props
}: {
	class?: string;
	onClick?: () => void;
	[key: string]: any;
}) {
	return (
		<>
			<button className="block sm:hidden" onClick={onClick}>
				<LucideMenu
					className={twMerge(
						"lucide lucide-menu size-5 stroke-background-950 transition-colors duration-300 hover:stroke-background-700 hover:cursor-pointer",
						classes
					)}
				/>
			</button>
		</>
	);
}
