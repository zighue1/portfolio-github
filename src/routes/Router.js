import { Routes, Route } from 'react-router-dom';
import { ListaGames } from '../components/ListaGames/ListaGames';
import {ListaNews} from '../components/ListaNews/ListaNews'

export const Router = () => (
    <Routes>
        <Route path={"/"} element={<ListaGames />}></Route>
       <Route path={"/news" } element={<ListaNews />} />
    </Routes>
);