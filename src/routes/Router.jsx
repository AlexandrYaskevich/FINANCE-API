import { Route, Routes } from "react-router-dom";
import ContentApi  from "../components/ContentApi/ContentApi.jsx";
import  Stocks  from "../components/Stocks/Stocks.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ContentApi />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="*" element={<div>Page not found!!!</div>} />
        </Routes>
    )
}

export default Router;