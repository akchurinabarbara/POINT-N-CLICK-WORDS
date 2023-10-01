import React from "react";
import LevelPanel from "./components/LevelPanel";
import levels from "./data/levels.json";

class MainMenu extends React.Component {
    render() {
        return (
            <div>
              <h2>Выберите уровень</h2>
              <LevelPanel count={levels["levels"].length} />
            </div>
        );
    }
}

export default MainMenu;