import React from "react";
import LevelPanel from "./components/LevelPanel";
import levels from "./data/levels.json";

class GameField extends React.Component {
    render() {
        return <div>
            <h2>Выберите карточки со словами, в которых есть буква "ы"</h2>
            <LevelPanel count={levels.length}/>
        </div>
    }
}

export default GameField;