import Footer from "./components/Footer";
import Header from "./components/Header";

function App({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default App;
