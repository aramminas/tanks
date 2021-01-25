import {useSelector} from "react-redux";
import Menu from "../menu/Menu";
import GameArea from "../game/GameArea";

function Main() {
    const {gameStateData: DATA, gameInfoData: infoData} = useSelector(state => state);
    const gameMode = DATA.state ? "game-mode" : "";

    return (
        <main className={"container"}>
            <div className={`main-area ${gameMode}`}>
                {!DATA.state ?
                    <Menu infoData={infoData}/>
                    :
                    <GameArea/>
                }
            </div>
        </main>
    );
}

export default Main;