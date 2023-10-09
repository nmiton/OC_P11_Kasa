import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

export default function Home() {
	return (
		<div className="home__page">
			<Banner src="assets/img/banner_img_1.png" alt="Chez vous, partout et ailleurs">
				Chez vous, <br className='mobile-break'/> partout et ailleurs
			</Banner>
			<Gallery />
		</div>
	);
}
