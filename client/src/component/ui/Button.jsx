import "./Button.css";

export default function Button({
	children,
	onClick,
	type = "button",
	disabled = false,
}) {
	return (
		<button
			className="button"
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
