import React from 'react';
import logo from './elpox_logo.jpg';
import './App.css';

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

function Header() {
  return (
    <header className="header">
      {/* Navigácia */}
      <nav>
        <a href="#sluzby">Služby</a>
        <a href="#projekty">Projekty</a>
        <a href="#kontakt">Kontakt</a>
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
      <a href="#kontakt" className="btn">Zavolajte nám</a>
    </section>
  );
}

function Services() {
  return (
    <section id="sluzby" className="services">
      <h2>Naše služby</h2>
      <ul>
        <li>Inštalácia požiarnych hlásičov a systémov</li>
        <li>Pravidelná údržba a revízie</li>
        <li>Tvorba projektovej dokumentácie</li>
        <li>Školenia a odborné poradenstvo</li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projekty" className="projects">
      <h2>Vybrané projekty</h2>
      <div className="grid">
        <div className="card">
          <img src="projekt1.jpg" alt="Administratívna budova"/>
          <h3>Administratívna budova</h3>
          <p>
            Návrh a montáž komplexného požiarného systému pre 
            moderné kancelárske priestory.
          </p>
        </div>
        <div className="card">
          <img src="projekt2.jpg" alt="Výrobná hala"/>
          <h3>Výrobná hala</h3>
          <p>
            Inštalácia automatického hasiacich zariadení v 
            priemyselnom areáli.
          </p>
        </div>
      </div>
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
