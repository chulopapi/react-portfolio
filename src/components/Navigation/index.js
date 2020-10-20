import React from "react";

function Nav(props) {

    const {
        setPageSelected,
        pageSelected
    } = props;

    return (
        <nav className="blue lighten-3">
            <ul className="flex-row">
                <li className={`mx-2 ${(pageSelected === "about me") ? 'active' : ''}`}>
                    <a data-testid="about" href="#about" onClick={() => setPageSelected("about me")}>
                        About me
            </a>
                </li>
                <li className={`mx-2 ${(pageSelected === "portfolio") ? 'active' : ''}`}>
                    <a data-testid="portfolio" href="#portfolio" onClick={() => setPageSelected("portfolio")}>
                        Portfolio
            </a>
                </li>
                <li className="mx-2">
                    <a data-testid="contact" href="#contact" onClick={() => setPageSelected("contact")}>
                        Contact
            </a>
                </li>
                <li className="mx-2">
                    <a data-testid="resume" href="#resume" onClick={() => setPageSelected("resume")}>
                        Resume
            </a>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;