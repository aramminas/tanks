import React from "react";

function GameInfo(props) {
    const {life, enemy} = props.data;

    return (
        <div className={"game-info"}>
            <div>
                <p className={"game-info-title"}>
                    Streak of life
                </p>
                <div>
                    <progress max="100" value={life} className="life">
                        <div className="progress-bar">
                            <span style={{width: `${life}%`}}>{life}%</span>
                        </div>
                    </progress>
                </div>
            </div>
            <div>
                <p className={"game-info-title enemy"}>
                    Enemy number
                </p>
                <p className={"enemy-count"}>
                    {enemy}
                </p>
            </div>
        </div>
    );
}

export default GameInfo;