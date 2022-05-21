import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route path="/assentos/:idSessao" element={<Seats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}