import Button from "./Button";
import "./Modal.css";

export default function Modal({
	title,
	children,
	onClose,
	onSubmit,
	loading = false,
}) {
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal" onClick={(event) => event.stopPropagation()}>
				<div className="modal-header">
					<h2>{title}</h2>

					<button className="modal-close" type="button" onClick={onClose}>
						×
					</button>
				</div>

				<form onSubmit={onSubmit}>
					<div className="modal-content">{children}</div>

					<div className="modal-actions">
						<Button type="button" onClick={onClose}>
							Отмена
						</Button>

						<Button type="submit" disabled={loading}>
							{loading ? "Добавление..." : "Добавить"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
