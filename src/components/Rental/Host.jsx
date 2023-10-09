export default function Host(props) {
	return (
		<div className="rental__host">
			<span className="host__identity">{props.host.name}</span>
			<img src={props.host.picture} alt={props.host.name} className="host__picture" />
		</div>
	);
}
