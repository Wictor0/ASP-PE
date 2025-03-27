import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Importa as imagens corretamente
import logo from "./assets/logo.svg";
import thumbnail from "./assets/miniatura.png";
import play from "./assets/play.png";
import logoAspPe from "./assets/logo-asp-pe.png";
import imgs from "./assets/imgs.png";

const App = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="container">
      {/* Cabeçalho com logo e menu */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="menu">
          <button className="menu-button">HOME</button>
          <button className="menu-button">QUEM SOMOS?</button>
          <button className="menu-button">DEPOIMENTOS</button>
          <button className="menu-button">PARCEIROS</button>
          <button className="menu-button">FAÇA PARTE</button>
          <button className="menu-button">FALE CONOSCO</button>
        </nav>
        <button className="donate-button">FAÇA SUA DOAÇÃO!</button>
      </header>

      {/* Seção principal */}
      <main className="main-content">
        <div className="text-content">
          <h1>
            <span>Abraçando vidas,</span>
          </h1>
          <h2>
            <span>transformando movimentos.</span>
          </h2>

          <div className="welcome-container">
            <div className="yellow-line" />{" "}
            {/* Linha amarela ao lado do texto */}
            <p className="welcome-message">
              Bem-vindos à Associação
              <br /> de Parkinson de Pernambuco
            </p>
          </div>
        </div>

        {/* Vídeo com botão de play */}
        <div className="video-container">
          <p className="video-caption">Conheça a ASP-PE de perto!</p>
          {showVideo ? (
            <iframe
              className="video"
              src="https://www.youtube.com/embed/zcpo5cLWywI?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="thumbnail-container"
              onClick={() => setShowVideo(true)}
            >
              <img
                src={thumbnail}
                alt="Miniatura do vídeo"
                className="thumbnail"
              />
              <img src={play} alt="Play" className="play-button" />
            </div>
          )}
        </div>
      </main>
      <div className="quem-somos-container">
        <img src={imgs} alt="Fotos" className="imagens" />
        <div className="texto">
          <h2>Quem Somos?</h2>
          <img
            src={logoAspPe}
            alt="ASP-PE - Associação de Parkinson de Pernambuco"
            className="logo-titulo"
          />
          <p>
            A ASP-PE (Associação de Parkinson de Pernambuco) é uma organização
            sem fins lucrativos que acolhe, informa e promove qualidade de vida
            para pessoas com Parkinson e seus familiares.
          </p>
          <button className="ler-tudo">Ler tudo</button>
        </div>
      </div>
    </div>
  );
};

// Renderiza a aplicação
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
