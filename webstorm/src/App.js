import './App.css';
import MainMenu from "./MainMenu";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import GameField,{ loader } from "./GameField";
import React from "react";
import levels from "./data/levels.json";



class App extends React.Component {
    state = {
        levelId: 0
    }

    render() {
        let router = createBrowserRouter([
            {
                path: "/",
                element: <MainMenu />
            },
            {
                path: "/game/:levelId",
                element: <GameField />,
                loader: loader
            }
        ]);

        return (
                <div className="App">
                <div className="App-header">
                    <React.StrictMode>
                        <RouterProvider router={router}/>
                    </React.StrictMode>
                </div>
            </div>
        )
    };
}

export default App;
