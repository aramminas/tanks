import './Header.scss';

function Header() {
    const starsJSX = Array.apply(null, {length: 5})
        .map((el, i) => <span key={i}>&#9733;</span>);

    return (
        <header className="header">
            <h2 className={"main-star"}><span>&#9885;</span></h2>
            <h1>
                <span>&#9886;</span>
                Battle of tanks
                <span>&#9887;</span>
            </h1>
            <h2>{starsJSX}</h2>
        </header>
    );
}

export default Header;