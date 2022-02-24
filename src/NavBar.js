import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {

    const navigate=useNavigate();

    function logOut(){
        sessionStorage.clear()
        navigate.push('/');
    }
    return(
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-8 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"></svg>
                <img class="mb-4" src={require("./cacib.png")} alt="cacib" width="360" height="57"/>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><a href="/?" class="nav-link" onClick={logOut}>Log out</a></li>
            </ul>
            </header>
        </div>
    )
}