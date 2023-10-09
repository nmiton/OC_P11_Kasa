export default function Title(props) {
	return (
		<div className="rental__title">
			<span className="title">{props.title}</span>
			<span className="location">{props.location}</span>
		</div>
	);
}
