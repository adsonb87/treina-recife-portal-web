import logo from "../../assets/treina_recife_logo.png"
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

function Footer(){
    return (
        <div className="container-fluid bg-light px-5">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <img src={logo} alt="Logo" width="35" class="d-inline-block align-text-top" />
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">Treina Recife &copy; {new Date().getFullYear()}</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a class="text-body-secondary" href="/">< AiFillTwitterCircle size={30} color="blue"/></a></li>
            <li className="ms-3"><a class="text-body-secondary" href="https://www.instagram.com/treina_recife/?hl=pt-br">< AiFillInstagram size={30} color="blue" /></a></li>
            <li className="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/TreinaRecife/"><AiFillFacebook size={30} color="blue"/></a></li>
            </ul>
        </footer>
        </div>
    )
}

export default Footer;