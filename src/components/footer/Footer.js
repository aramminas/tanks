import "./Footer.scss";

function Footer() {
    const year = new Date().getFullYear();
    const linksJSX = ["Privacy Policy", "About us", "Support"]
        .map((el, i) => <li key={i}><a href="/">{el}</a></li>);

    return (
        <footer>
            <div className="footer_bottom">
                <div className="container-fluid">
                    <div className="copyright_column">
                        <ul id="menu-copyright">
                            {linksJSX}
                        </ul>
                        <span>© {year} The Art of Programming</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;