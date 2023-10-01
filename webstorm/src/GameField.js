import './components/Buttons.css';
import React, { useState } from "react";
import Modal from 'react-modal';
import { useLoaderData } from "react-router-dom";
import WordPanel from "./components/WordPanel";
import levels from "./data/levels.json";
import Timer from "./components/Timer"
import './components/Modal.css'

export function loader({ params }) {
    const levelId = params.levelId;
    return { levelId };
}

function GameField(props) {
    const { levelId } = useLoaderData();
    const level = levels["levels"][levelId];

    const [allRightAnswer, setAllRightAnswer] = useState(allRightAnswerCount());
    const [userRightAnswer, setUserRightAnswer] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isWin, setIsWin] = useState(false);

    function allRightAnswerCount() {
        let rightCount = 0;
        for (let i = 0; i < level["words"].length; i++) {
            if (level["words"][i]["isRight"]) {
                rightCount++;
            }
        }
        return rightCount;
    }

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const nextLevel = () => {
        if(Number(levelId) + 1 < levels["levels"].length) {
            window.location.assign(`/game/${Number(levelId) + 1}`);
        }
        else {
            window.location.assign(`/`);
        }
    }

    const exit = () => {
        window.location.assign(`/`);
    }

    const restart = () => {
        window.location.assign(`/game/${levelId}`);
    }

    function ModalContent(props)
    {
        return (
            <div align={"center"} className={"modal-window-content"}>
                <div>
                    <h2>{props.header}</h2>
                    <p>{props.text}</p>
                </div>
                <div>
                    <div hidden={!isWin}>
                        <button   onClick={nextLevel} margin={5} className={"button-modal-default"}>
                            Далее
                        </button>
                    </div>
                    <div hidden={isWin}>
                        <div>
                            <button  onClick={exit} margin={5} className={"button-modal-exit"}>
                                Выйти
                            </button>
                        </div>
                        <div>
                            <button  onClick={restart} margin={5} className={"button-modal-default"}>
                                Переиграть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    function rightClick() {
        setUserRightAnswer(userRightAnswer + 1);
        if(userRightAnswer === allRightAnswer - 1)
        {
            setIsWin(true);
            let currentLevel = localStorage.getItem("currentLevel");
            if(Number(levelId) + 1 > currentLevel) {
                localStorage.setItem("currentLevel", Number(levelId) + 1);
            }
            openModal();
        }
    }

    function onTimeOut() {
        if(!isWin) {
            openModal();
        }
    }

    const time = new Date();
    time.setSeconds(time.getSeconds() + level["time"]);

    return <div>
        <div>
            <div>
                <div align={"left"}>
                    <button onClick={exit} className={"button-exit"}>В главное меню</button>
                </div>
                <div>
                    <Timer expiryTimestamp={time} onTimeOut={onTimeOut}/>
                </div>
            </div>
        </div>
        <h2>Выберите карточки со словами, в которых есть буква "{level["question"]}"</h2>
        <WordPanel level={level} rightClick={rightClick}/>
        <Modal isOpen={modalIsOpen} onRequestClose={exit} className={"modal-window"}>
            {
                isWin?
                    <ModalContent header="Успех!" text="Вы прошли этап!"/>:
                    <ModalContent header="Неудача!" text="Попробуйде еще раз!"/>
            }
        </Modal>
    </div>
}


export default GameField;