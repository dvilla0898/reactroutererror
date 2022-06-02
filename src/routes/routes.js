import { Route } from 'react-router'
import { Routes } from 'react-router'
import { BrowserRouter } from "react-router-dom";

import Home from "../views/Home/Home";
import Results from "../views/Results/Results";
import Detail from "../views/Detail/Detail";
import { Counter } from '../features/counter/Counter';

const RoutesComponents = () => {
    <>
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/results" element={<Counter/>}/>
            <Route path="/detail" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
};

export default RoutesComponents;