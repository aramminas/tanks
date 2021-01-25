import React, {useState} from "react";
import {connect, useSelector} from "react-redux";
import {set_game_state} from "../../store/actions/gameStateAction";
import {change_game_info_data} from "../../store/actions/gameInfoAction";
import GameInfo from "./GameInfo";
import WinLose from "./WinLose";
import Button from '@material-ui/core/Button';
import Canvas from "./Canvas";
import "./GameArea.scss";

function GameArea(props) {
    const [finish, setFinish] = useState(false);
    const [win, setWin] = useState(false);
    const {gameInfoData, gameStateData: DATA, mapsData, tanksData} = useSelector(state => state);


    const endGame = () => {
        props.changeGameState(0);
    }

    const gameResult = (type) => {
        if(type === "player"){
            props.changeGameInfo({
                ...gameInfoData,
                enemy: 0,
            });
            setWin(type);
        }else if(type === "enemy"){
            props.changeGameInfo({
                ...gameInfoData,
                life: 0,
            });
        }
        setFinish(true);
    }

    const receivedDamage = (x, y, pos, height, width, eX, eY, ePos, eHeight, eWidth) => {
        props.changeGameInfo({
            ...gameInfoData,
            x, y, pos, height, width, eX, eY, ePos, eHeight, eWidth,
            life: gameInfoData.life - 25,
        });
    }

    const enemyDestroyed = (x, y, pos, height, width, eX, eY, ePos, eHeight, eWidth) => {
        props.changeGameInfo({
            ...gameInfoData,
            x, y, pos, height, width, eX, eY, ePos, eHeight, eWidth,
            enemy: gameInfoData.enemy - 1,
        });
    }

    return (
        <section className={"game-area"}>
            <div className={"game-info-block"}>
                <GameInfo data={gameInfoData}/>
            </div>
            <div className={"battlefield"}>
                { finish ?
                    <WinLose win={win} data={gameInfoData}/> :
                    <Canvas width={750} height={700} data={DATA} map={mapsData} tank={tanksData} game={gameInfoData}
                            destroyed={enemyDestroyed} damage={receivedDamage} gameResult={gameResult}
                    />
                }
            </div>
            <div className={"end-game"}>
                <Button onClick={() => endGame()} variant="contained" color="secondary">
                    {finish ? "Back to the main menu" : "End game"}
                </Button>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeGameState: (data) => {dispatch(set_game_state(data))},
        changeGameInfo: (data) => {dispatch(change_game_info_data(data))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameArea);