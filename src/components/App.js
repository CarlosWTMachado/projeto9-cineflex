import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import FirstPage from "./Pages/FirstPage/FirstPage";
import Sessions from "./Pages/Sessoes/Sessions";
import Seats from "./Pages/Seats";
import Success from "./Pages/Success";
import Footer from "./Footer/Footer";

export default function App () {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<FirstPage />} />
				<Route path="/sessoes/:idFilme" element={<Sessions />} />
			</Routes>
		</BrowserRouter>
	);
}

/**
 * <Routes>
				<Route path="/assentos/:idSessao" element={<Seats />} />
				<Route path="/sucesso" element={<Success />} />
			</Routes>
			<Footer />
 */