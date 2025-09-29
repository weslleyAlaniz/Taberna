import logo from "../../assets/logo.png";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";
import "./styles.css";
const opcoes = ["Produtos", "Contato"];
const icones = [ShoppingBag, User];

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} className="logo-image" alt="logo" />
      </div>
      <span className="header-divider"></span>
      <ul className="header-nav-opcoes">
        {opcoes.map((opcao) => (
          <li key={opcao} className="nav-item">
            {opcao}
          </li>
        ))}
      </ul>
      <span className="header-divider"></span>
      <input
        type="text"
        className="header-search-input"
        placeholder="Qual o mimo de hoje?"
      />
      <ul className="header-nav-icones">
        {icones.map((Icone, idx) => (
          <li key={idx} className="nav-item">
            <Icone className="header-nav-icone" />
          </li>
        ))}
      </ul>
    </header>
  );
}
