import logo from './elpox_logo.jpg';
import './App.css';
import ph_image from './placeholder.png';  

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

const scrollTo = id => e => {
  e.preventDefault();                        // no default href behavior
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function Header() {
  return (
    <header className="header">
    <nav>
      <button type="button" onClick={scrollTo('sluzby')}>Služby</button>
      <button type="button" onClick={scrollTo('projekty')}>Projekty</button>
      <button type="button" onClick={scrollTo('kontakt')}>Kontakt</button>
    </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* logo overlay */}
      <div className="hero__logo-overlay">
        <img src={logo} alt="ELPOX logo" />
      </div>

      {/* existujúci obsah */}
      <h2>Vaša bezpečnosť, naša priorita</h2>
      <p>
        ELPOX poskytuje komplexné riešenia požiarnej ochrany pre priemyselné i obytné objekty.
      </p>
      <button
        type="button"
        className="btn"
        onClick={scrollTo('kontakt')}
      >
        Zavolajte nám
      </button>    </section>
  );
}

function Services() {
  return (
    <section id="sluzby" className="services">
      <h2>Naše služby</h2>
      <ul>
        <li> 
          Pravidelná údržba a revízie
          <img 
            src={ph_image} 
            alt="Ilustrácia služieb" 
            className="placeholder-image"
            />
       </li>
              
        <li>
          Tvorba projektovej dokumentácie
          <img src={ph_image} 
          alt="Ilustrácia služieb" 
          className="placeholder-image"/>
        </li>

        <li>
          Školenia a odborné poradenstvo
          <img 
            src={ph_image}
            alt="Ilustrácia služieb"
            className="placeholder-image"/>
        </li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projekty" className="projects">
      <h2>Vybrané projekty</h2>
      <ul>
        <li>
          <img 
            src={ph_image}
            alt="Administratívna budova"
          />
          <h3>Administratívna budova</h3>
          <p>
            Návrh a montáž komplexného požiarného systému pre 
            moderné kancelárske priestory.
          </p>
        </li>

        <li>
          <img 
            src={ph_image}
            alt="Administratívna budova"
          />
          <h3>Výrobná hala</h3>
          <p>
            Inštalácia automatického hasiacich zariadení v 
            priemyselnom areáli.
          </p>
        </li>

      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <h2>Kontaktujte nás</h2>
      <p>Adresa: Solivarská 124/2, 821 03 Bratislava</p>
      <p>Telefón: +421 902 433 359</p>
      <p>Email: elpox.lukacova@gmail.com</p>
      <form>
        <input type="text" placeholder="Meno a priezvisko" />
        <input type="email" placeholder="Emailová adresa" />
        <textarea placeholder="Vaša požiadavka"></textarea>
        <button type="submit">Odoslať správu</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 ELPOX. Všetky práva vyhradené.</p>
    </footer>
  );
}

export default App;
