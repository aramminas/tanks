import Property from "./Property";
import "./Menu.scss";

function Menu(props) {
    return (
        <main className={"main-menu container"}>
            <Property infoData={props.infoData}/>
        </main>
    );
}

export default Menu;