import './Box.css'

export default function Box({ children, className = "" }) {
	return <div className={`box ${className}`}>{children}</div>;
}
