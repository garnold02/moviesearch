import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DiscoverPage from "./pages/DiscoverPage";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/discover" element={<DiscoverPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
