import 'bootstrap/dist/css/bootstrap.min.css';
import './Top.css';
import {Link} from 'react-scroll';

function Top(props) {
    return (
        <div className='navb'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://niraj2003.github.io/MyMovies/">MoviesToWatch</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <button style={{border: 'none', background: 'none' } }><Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true}>About</Link></button>
                            </li>
                        
                            <li className="nav-item">
                            <button style={{border: 'none', background: 'none' } }><Link className="nav-link" activeClass="active" to="footer" spy={true} smooth={true}>Project Developer</Link></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Top;