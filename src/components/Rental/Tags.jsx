import TagItem from "./TagItem";

export default function Tags(props) {
	return (
		<div className="rental__tags">
			{props.tags.map((tag, index) => (
				<TagItem key={index} tag={tag} />
			))}
		</div>
	);
}
