import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Importa as imagens corretamente
import logo from "./assets/logo.svg";
import thumbnail from "./assets/miniatura.png";
import play from "./assets/play.png";
import logoAspPe from "./assets/logo-asp-pe.png";
import imgs from "./assets/imgs.png";
import missao from "./assets/missao.svg";
import visao from "./assets/visao.svg";
import valores from "./assets/valores.svg";

// Novas importações de imagens para a seção "Faça Parte"
import voluntarioIcon from "./assets/voluntario.png";
import voluntarioHoverIcon from "./assets/voluntario_hover.png";
import associadoIcon from "./assets/associado.png";
import associadoHoverIcon from "./assets/associado_hover.png";
import parceiroIcon from "./assets/parceiro.png";
import parceiroHoverIcon from "./assets/parceiro_hover.png";
import doacaoIcon from "./assets/doacao.png";
import doacaoHoverIcon from "./assets/doacao_hover.png";

// Novas importações de imagens para a seção "Histórias que Inspiram"
import historia1 from "./assets/historia1.png";
import historia2 from "./assets/historia2.png";

// Novas importações de imagens para a seção "Nossos Parceiros"
import parceiro1 from "./assets/arcomix.png";
import parceiro2 from "./assets/agua.png";
import parceiro3 from "./assets/lukarla.png";

// Importações para o Footer
import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import youtubeIcon from "./assets/youtube.svg";
import emailIcon from "./assets/email.svg";
import whatsappIcon from "./assets/whatsapp.svg";
import phoneIcon from "./assets/phone.svg";

const donationText = `Se preferir, você pode fazer uma doação de qualquer valor por meio de:

Depósito Bancário

Banco: Banco do Brasil
Agência: 1835-0
Conta Corrente: 77303-4

PIX

Chave: parkinsonpernambuco@gmail.com

Toda contribuição faz a diferença. Obrigado por apoiar a nossa causa! 💙`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Missão",
      text: "Proporcionar uma melhor qualidade de vida para pessoas com Parkinson de Pernambuco, promovendo acolhimento, acesso a profissionais da saúde e mostrando que há vida após o diagnóstico.",
      image: missao,
    },
    {
      title: "Visão",
      text: "Ser referência no apoio e na transformação da realidade de quem convive com Parkinson em Pernambuco, ajudando a construir uma sociedade mais inclusiva e consciente.",
      image: visao,
    },
    {
      title: "Valores",
      text: [
        `Acreditamos que cada passo dado com o coração faz a diferença. Por isso, a empatia é a nossa bússola: ouvimos com atenção e acolhemos com carinho quem precisa de apoio.<br><br>`,
        `Transparência também é essencial para nós – atuamos com ética e responsabilidade na gestão de recursos, garantindo que cada ação tenha um impacto positivo.<br><br>`,
        `E acreditando que juntos somos mais fortes, a colaboração nos permite construir uma rede de apoio cada vez mais sólida. Acima de tudo, valorizamos o respeito, porque cada pessoa tem uma história única e merece ser reconhecida.`,
      ],
      image: valores,
      scroll: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Nossa Essência</h2>
      <div className="carousel-content">
        <button className="carousel-arrow left" onClick={prevSlide}>
          {"<"}
        </button>
        <div className="carousel-slide">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="carousel-image"
          />
          <div className="carousel-text">
            <h3>{slides[currentSlide].title}</h3>
            {slides[currentSlide].scroll ? (
              <div className="scrollable-text">
                {Array.isArray(slides[currentSlide].text) ? (
                  slides[currentSlide].text.map((paragraph, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))
                ) : (
                  <p>{slides[currentSlide].text}</p>
                )}
              </div>
            ) : (
              <p>{slides[currentSlide].text}</p>
            )}
          </div>
        </div>
        <button className="carousel-arrow right" onClick={nextSlide}>
          {">"}
        </button>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openDonationModal = () => {
    setIsDonationModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="menu">
          <button className="menu-button">HOME</button>
          <button
            className="menu-button"
            onClick={() => scrollToSection("quem-somos")}
          >
            QUEM SOMOS?
          </button>
          <button
            className="menu-button"
            onClick={() => scrollToSection("faca-parte-section")}
          >
            FAÇA PARTE
          </button>
          <button
            className="menu-button"
            onClick={() => scrollToSection("inspiradoras-section")}
          >
            DEPOIMENTOS
          </button>
          <button
            className="menu-button"
            onClick={() => scrollToSection("nossos-parceiros")}
          >
            PARCEIROS
          </button>
          <button
            className="menu-button"
            onClick={() => scrollToSection("main-footer")}
          >
            FALE CONOSCO
          </button>
        </nav>
        <button className="donate-button" onClick={openDonationModal}>
          FAÇA SUA DOAÇÃO!
        </button>
      </header>

      <Modal isOpen={isDonationModalOpen} onClose={closeDonationModal}>
        <h2>Faça sua Doação</h2>
        <p>
          {donationText.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </Modal>
      <main className="main-content">
        <div className="text-content">
          <h1>
            <span>Abraçando vidas,</span>
          </h1>
          <h2>
            <span>transformando movimentos.</span>
          </h2>
          <div className="welcome-container">
            <div className="yellow-line" />
            <p className="welcome-message">
              Bem-vindos à Associação de Parkinson de Pernambuco
            </p>
          </div>
        </div>

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

      {/* Quem somos? */}
      <div id="quem-somos" className="quem-somos-container">
        <img src={imgs} alt="Fotos" className="imagens" />
        <div className="texto">
          <h2>Quem Somos?</h2>
          <img
            src={logoAspPe}
            alt="ASP-PE - Associação de Parkinson de Pernambuco"
            className="logo-titulo"
          />
          <p>
            {expanded
              ? "A ASP-PE (Associação de Parkinson de Pernambuco) é uma organização sem fins lucrativos que acolhe, informa e promove qualidade de vida para pessoas com Parkinson e seus familiares. <br> Aqui, você encontra suporte especializado, atividades terapêuticas e um espaço de troca e aprendizado. Tudo feito com carinho, amor e respeito para que ninguém precise enfrentar essa jornada sozinho. <br> Nosso propósito é fortalecer a autonomia e o bem-estar de cada pessoa, proporcionando mais dignidade e inclusão no dia a dia. Atualmente atendemos cerca de 80 associados que se dividem nas mais diversas atividades realizadas pela associação, como serviços de fisioterapia, acupuntura, psicanálise, terapia em grupo, atendimento jurídico, aulas de canto, arteterapia, e oficinas de memória e emoções."
                  .split("<br>")
                  .map((paragraph, index, array) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      {index < array.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))
              : "A ASP-PE (Associação de Parkinson de Pernambuco) é uma organização sem fins lucrativos que acolhe, informa e promove qualidade de vida para pessoas com Parkinson e seus familiares."}
          </p>
          <button className="ler-tudo" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Ver menos" : "Ler tudo"}
          </button>
        </div>
      </div>
      <Carousel />

      {/* Seção Faça Parte */}
      <section
        id="faca-parte-section"
        className="faca-parte-section full-width-section"
      >
        <h2>Faça parte!</h2>
        <p>Cada ação, por menor que pareça, gera um impacto real.</p>
        <p>
          Venha somar forças e fazer parte dessa jornada de esperança e
          transformação!
        </p>
        <div className="faca-parte-grid">
          <div className="faca-parte-item">
            <img
              className="default-icon"
              src={voluntarioIcon}
              alt="Quero ser voluntário"
            />
            <img
              className="hover-icon"
              src={voluntarioHoverIcon}
              alt="Quero ser voluntário (Hover)"
            />
          </div>
          <div className="faca-parte-item">
            <img
              className="default-icon"
              src={associadoIcon}
              alt="Quero ser associado"
            />
            <img
              className="hover-icon"
              src={associadoHoverIcon}
              alt="Quero ser associado (Hover)"
            />
          </div>
          <div className="faca-parte-item">
            <img
              className="default-icon"
              src={parceiroIcon}
              alt="Quero ser um parceiro"
            />
            <img
              className="hover-icon"
              src={parceiroHoverIcon}
              alt="Quero ser um parceiro (Hover)"
            />
          </div>
          <div className="faca-parte-item">
            <img
              className="default-icon"
              src={doacaoIcon}
              alt="Quero fazer uma doação"
            />
            <img
              className="hover-icon"
              src={doacaoHoverIcon}
              alt="Quero fazer uma doação (Hover)"
            />
          </div>
        </div>
      </section>

      {/* Seção Histórias que Inspiram */}
      <section id="inspiradoras-section" className="inspiradoras-section">
        <div className="inspiradoras-background">
          <div className="inspiradoras-title-container">
            <h2 className="inspiradoras-title">Histórias que Inspiram</h2>
            <div className="inspiradoras-line top-line"></div>
          </div>
          <div className="inspiradoras-grid">
            <img
              src={historia1}
              alt="História 1"
              className="inspiradoras-item"
            />
            <img
              src={historia2}
              alt="História 2"
              className="inspiradoras-item historia2-item"
            />
          </div>
          <div className="inspiradoras-line bottom-line"></div>
        </div>
      </section>

      {/* Seção Nossos Parceiros */}
      <section id="nossos-parceiros" className="nossos-parceiros-section">
        <h2>Nossos Parceiros</h2>
        <p className="juntos-somos-mais-fortes">juntos somos mais fortes</p>
        <div className="texto-e-logos">
          <div className="texto-com-botao">
            <p className="texto-parceiros">
              Empresas e organizações que <br />
              caminham ao nosso lado nessa missão
            </p>
            <div className="quero-ser-parceiro-container">
              <a
                href="https://forms.gle/9A4QVKNkk4Y5xYM9A"
                target="_blank"
                rel="noopener noreferrer"
                className="quero-ser-parceiro-button"
              >
                Quero ser um parceiro
              </a>
              <span className="seta-parceiro">→</span>
            </div>
          </div>
          <div className="parceiros-grid">
            <img src={parceiro1} alt="Arco-Mix" className="parceiro-logo" />
            <img
              src={parceiro2}
              alt="Água Santa Clara"
              className="parceiro-logo"
            />
            <img
              src={parceiro3}
              alt="Lukarla Jaboatão"
              className="parceiro-logo"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section onde-estamos">
            <h3>ONDE ESTAMOS :</h3>
            <p>
              Av. Caxangá, 2200 - Cordeiro,
              <br /> Recife, sede da ASP-PE.
            </p>
            <p>CNPJ: 05.564.949 / 0001-38</p>
          </div>
          <div className="footer-section gostaria-de-saber">
            <h3>GOSTARIA DE SABER MAIS ?</h3>
            <p>
              Acompanhe a ASP - PE nas redes sociais <br /> e fique por dentro
              das novidades !
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/parkinson.asp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/asp-pe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://www.youtube.com/@asppeassociacaodeparkinsonpe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="Youtube" />
              </a>
            </div>
          </div>
          <div className="footer-section fale-conosco">
            <h3>FALE CONOSCO :</h3>
            <div className="contact-icons">
              <a
                href="mailto:parkinsonpernambuco@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emailIcon} alt="Email" />
              </a>
              <a
                href="https://wa.me/558134242710"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
              <a
                href="tel:+558134242710"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={phoneIcon} alt="Telefone" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
