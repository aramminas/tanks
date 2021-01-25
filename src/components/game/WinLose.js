const defaultEnemyCount = 10;

function WinLose(props) {
    const {win, data} = props;

    return (
        <div className={"win-lose"}>
            {win ?
                <div className={"win-lose-image"}>
                    <img src="./images/others/you-win.jpg" alt="win"/>
                </div> :
                <div className={"win-lose-image"}>
                    <img src="./images/others/you-lose.png" alt="lose"/>
                </div>
            }
            <div className={"win-lose-result"}>
                <h2>Game results</h2>
                <div><b>Player health:</b> {data.life}.</div>
                <div><b>Destroyed tanks:</b> {defaultEnemyCount - data.enemy}.</div>
                <div><b>Tanks left:</b> {data.enemy}.</div>
            </div>
        </div>
    );
}

export default WinLose;