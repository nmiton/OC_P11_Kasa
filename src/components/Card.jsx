export default function Card(props) {
	return (
		<div className="card" onClick={() => handleClickCard(props.link)}>
			<img src={props.src} alt={props.alt} />
		</div>
	);
}
