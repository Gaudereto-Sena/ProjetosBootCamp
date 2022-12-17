import "./index.css"
import "./styles/estilosGlobais.css"

import { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

/* import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Catalogo from "./Pages/Catalogo";
import Produto from "./Pages/Produto";
import Carrinho from "./Pages/Carrinho";
import Checkout from "./Pages/Checkout"; */
import { Toltip } from "./componentes/Toltip";
import Loading from './componentes/Loading';

const Login = lazy(() => import('./Pages/Login'))
const Register = lazy(() => import('./Pages/Register'));
const Carrinho = lazy(() => import('./Pages/Carrinho'));
const Catalogo = lazy(() => import('./Pages/Catalogo'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const Produto = lazy(() => import('./Pages/Produto'));

function App() {
  const [dadosUsuariosRegistrados, setDadosUsuariosRegistrados] = useState(JSON.parse(localStorage.getItem("usuarios")))
  const [user, setUser] = useState({});
  const [carrinho, setCarrinho] = useState([]);
  const [toltip, setToltip] = useState({});



  const registrado = (usuarioRegistrado) => {
    dadosUsuariosRegistrados === null ? setDadosUsuariosRegistrados([usuarioRegistrado]) : setDadosUsuariosRegistrados([...dadosUsuariosRegistrados, usuarioRegistrado])
  }

  const logar = (usuario) => {
    setUser(usuario)
  }

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(dadosUsuariosRegistrados))
  }, [dadosUsuariosRegistrados])

  useEffect(() => {
  }, [carrinho])

  const addCarrinho = (event, item) => {
    const top = `${event.pageY + 35}px`;
    const left = `${event.pageX - 75}px`;
    const hasItem = carrinho.filter(itemCarrinho => {
      return (
        itemCarrinho.id === item.id
      )
    }).length
    console.log(item.id)

    if (!toltip.isActive) {
      if (hasItem > 0) {
        setToltip({
          isActive: true,
          title: 'Produto ja foi adicionado',
          estilo: {
            top: top,
            left: left
          }
        })
      } else {
        setCarrinho([...carrinho, item])
        setToltip({
          isActive: true,
          title: 'Produto adicionado ao carrinho',
          estilo: {
            top: top,
            left: left
          }
        })
      }

      setTimeout(() => {
        setToltip({
          isActive: false
        })
      }, 3000);
    }
  }

  return (
    <Router>
      {toltip.isActive ? <Toltip title={toltip.title} estiloInline={toltip.estilo} /> : ''}
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register dadosUsuariosRegistrados={dadosUsuariosRegistrados} aoRegistrado={(usuarioRegistrado) => registrado(usuarioRegistrado)} />} />
          <Route path="/login" element={<Login dadosUsuariosRegistrados={dadosUsuariosRegistrados} aoLogar={(usuario) => logar(usuario)} />} />
          <Route path="/catalogo" element={<Catalogo usuario={user} addCarrinho={addCarrinho} />} />
          <Route path="/produto/:id" element={<Produto usuario={user} addCarrinho={addCarrinho} />} />
          <Route path="/carrinho" element={<Carrinho usuario={user} setCarrinho={setCarrinho} carrinho={carrinho} />} />
          <Route path="/checkout" element={<Checkout usuario={user} setCarrinho={setCarrinho} carrinho={carrinho} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </Router>

  );
}

export default App;
