import logo from '../assets/images/logo.png';
const Navbar2 = () => {
    return (
        <nav>
            <a href="./index.html">
                <img className='' src={logo} alt="Logo de olimpo"></img>
            </a>

                <ul>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="./pages/imc/imc.html">Calcular IMC</a></li>
                    <li><a href="#aboutUs">Conócenos</a></li>
                </ul>

            <a href="./pages/login/login.html">Login</a>
        </nav>
    )};
    export default Navbar2;