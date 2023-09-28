import logo from './logo.svg';
import './App.css';
import levels from './data/levels.json';
import LevelPanel from "./components/LevelPanel";
import MainMenu from "./MainMenu";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import GameField from "./GameField";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainMenu/>
    },
    {
        path: "/game",
        element: <GameField/>
    }
]);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <React.StrictMode>
                    <RouterProvider router={router}/>
                </React.StrictMode>
            </header>
        </div>
    );
}

export default App;
