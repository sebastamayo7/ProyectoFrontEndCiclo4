import "./css/App.css";
//Componentes
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/Nosotros";
import Home from "./components/Home";
import EjemplosIndex from "./components/ejemplos";
import ComponenteFuncion from "./components/ejemplos/ComponenteFuncion";
import ComponenteClase from "./components/ejemplos/ComponenteClase";
import CategoriasIndex from "./components/categoria";
import UsuariosIndex from "./components/usuarios";
import ProductosIndex from "./components/productos";
import Footer from "./components/Footer";
import LoginView from "./components/productos/login";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="App">
                <Navbar logged={false} />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/nosotros" element={<Nosotros />}></Route>
                    <Route path="/ejemplos" element={<EjemplosIndex />}></Route>
                    <Route
                        path="/productos"
                        element={<ProductosIndex />}
                    ></Route>
                    <Route path="/login" element={<LoginView />}></Route>
                    <Route path="/usuarios" element={<UsuariosIndex />}></Route>

                    <Route
                        path="/categorias"
                        element={<CategoriasIndex />}
                    ></Route>
                    <Route
                        path="/ejemplos/funcion"
                        element={
                            <ComponenteFuncion
                                msn={"Mensaje por PROPS de componente funcion"}
                            />
                        }
                    ></Route>
                    <Route
                        path="/ejemplos/clase"
                        element={
                            <ComponenteClase
                                msn={"Mensaje por PROPS de componente clase"}
                            />
                        }
                    ></Route>
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
