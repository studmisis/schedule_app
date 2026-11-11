export default function Button({
	children,
	onClick,
	type = "button",
	disabled = false,
	className = "",
}) {
	return (
		<button
			className={className}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
