import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {set_map_data} from "../../store/actions/mapsAction";
import {set_tank_data} from "../../store/actions/tanksAction";
import {set_game_state} from "../../store/actions/gameStateAction";
import {change_game_info_data} from "../../store/actions/gameInfoAction";
import {connect} from "react-redux";
import data from '../../constants';

const defMapsData = data.maps;
const defTanksData = data.tanks;
const greetingMusic  = data.sound.music;

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '80%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    soundIcon: {
        textAlign: 'right',
        '& input': {
            width: 35,
            display: "inline-block",
        },
    }
}));

function Property(props) {
    const classes = useStyles();
    const [audio, setAudio] = useState(null);
    const [map, setMap] = useState({...defMapsData[0]});
    const [tank, setTank] = useState({...defTanksData[0]});
    const [music, setMusic] = useState({sound:false, image: "speaker_delete.png"});

    const playPauseMusic = (action = "") => {
        if(music.sound || action === "mute"){
            if(audio){
                audio.pause();
                audio.currentTime = 0;
            }
            setMusic(() => {
                return {sound: false, image: "speaker_delete.png"};
            });
            setAudio(null);
        }else {
            if(!audio){
                setAudio(() => {
                    const newAudio = new Audio(greetingMusic);
                    newAudio.play();
                    return newAudio;
                });
            }else {
                audio.play();
            }
            setMusic(()=>{
                return {sound:true, image: "speaker_accept.png"};
            });
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if(name === "map"){
            const changeMap = defMapsData.filter(item => item.id === +value)[0];
            setMap({...changeMap});
            props.setMapData(changeMap.path);
        }else if(name === "tank"){
            const changeTank = defTanksData.filter(item => item.id === +value)[0];
            setTank({...changeTank});
            props.setTankData(changeTank.path);
        }
    };

    const startGame = () => {
        playPauseMusic("mute");
        props.changeGameState(1);
        props.changeGameInfo({
            ...props.infoData,
            life: 100,
            enemy: 10,
        });
    }

    return (
        <section className={"property"}>
            <h3 className={"title"}> - Select a map and a tank to start the battle - </h3>
            <div>
                <div className={"map-section"}>
                    <figure>
                        <img src={`./images/maps/${map.path}`} alt="map"/>
                    </figure>
                    <div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-map">Maps</InputLabel>
                            <Select
                                native
                                value={map.id}
                                onChange={handleChange}
                                label="Maps"
                                inputProps={{
                                    name: 'map',
                                    id: 'outlined-map',
                                }}
                            >
                                <option aria-label="None" value="" />
                                {
                                    defMapsData.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className={"tank-section"}>
                    <h3 className={"title tank-title"}> - Select a tank - </h3>
                    <figure className={"tank-image"}>
                        <img src={`./images/tanks/${tank.path}`} alt="tank"/>
                    </figure>
                    <div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-tank">Tanks</InputLabel>
                            <Select
                                native
                                value={tank.id}
                                onChange={handleChange}
                                label="Tanks"
                                inputProps={{
                                    name: 'tank',
                                    id: 'outlined-tank',
                                }}
                            >
                                <option aria-label="None" value="" />
                                {
                                    defTanksData.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className={"instruction-section"}>
                    <h3 className={"title instruction-title"}> - Instruction - </h3>
                    <div className={"instruction-content"}>
                        <h4>Movement buttons</h4>
                        <div className={"movement"}>
                            <p>Move left <span className={"left"}>&#10156;</span></p>
                            <p>Move right <span>&#10156;</span></p>
                            <p>Move up <span className={"up"}>&#10155;</span></p>
                            <p>Move down <span className={"down"}>&#10155;</span></p>
                        </div>
                        <h4>Fire buttons</h4>
                        <div className={"fire"}>
                            <p>Space <span className={"space"}>&#10073;</span></p>
                        </div>
                        <div className={classes.soundIcon}>
                            <input type="image" onClick={() => playPauseMusic()}
                                   src={`./images/others/${music.sound ? "speaker_delete.png" : "speaker_accept.png"}`}  alt="sound"/>
                        </div>
                    </div>
                </div>
                <div className={"btn-start"}>
                    <Button variant="contained" color="primary" onClick={() => startGame()}>
                        Start
                    </Button>
                </div>
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
        setMapData: (data) => {dispatch(set_map_data(data))},
        setTankData: (data) => {dispatch(set_tank_data(data))},
        changeGameState: (data) => {dispatch(set_game_state(data))},
        changeGameInfo: (data) => {dispatch(change_game_info_data(data))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Property);