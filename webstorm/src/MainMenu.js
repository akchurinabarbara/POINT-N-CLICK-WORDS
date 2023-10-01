import React from "react";
import LevelPanel from "./components/LevelPanel";
import levels from "./data/levels.json";

class MainMenu extends React.Component {
    goToLevel = (levelId)=>  {
        window.location.assign(`/game/${levelId}`);
    }

    render() {
        let currentLevel = localStorage.getItem("currentLevel");
        if(!currentLevel) {
            currentLevel = 0;
        }

        console.log(currentLevel);
        return (
            <div>
              <h2>Выберите уровень</h2>
              <LevelPanel count={levels["levels"].length} currentLevel={currentLevel} onClick={this.goToLevel}/>
            </div>
        );
    }
}

export default MainMenu;