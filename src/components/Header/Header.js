import {Link} from "react-router-dom";

function Header() {
    return (
        <div class="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use href="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">Sattuit</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
                    <li className="nav-item"><Link to="/feature" className="nav-link">Features</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;