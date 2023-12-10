import Styles from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <body>
        <header className={Styles.containerNavbar}>
          <div className={Styles.logoImg}>
            <img src="./logo navbar.png" alt="" />
          </div>
          <nav className={Styles.linkNav}>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Team">Team</Link>
            <Link href="/Service">Service</Link>
          </nav>
          <div className={Styles.btnNav}>
            <a href="">Contact Us</a>
          </div>
        </header>
        <section className={Styles.banerheroabout}>
          <div className={Styles.heroservice}>
            <h1>Generix - supporting your business with logistics</h1>
            <p>
              We, at Generix Express, are dedicated to ensuring your safety and
              comfort when exporting goods from within the country to overseas.
              Established since 1989, we bring extensive experience in managing
              your shipments until they reach their intended recipients. Your
              trust is our foremost priority, and we are committed to providing
              top-notch services for customer satisfaction
            </p>
          </div>
        </section>

        <section className={Styles.numberservice}>
          <div>
            <h2>320K +</h2>
            <p>People working at Generix</p>
          </div>
          <div>
            <h2>1,035K</h2>
            <p>Parcels deliver per year</p>
          </div>
          <div>
            <h2>409</h2>
            <p>Territories served</p>
          </div>
        </section>

        <section className={Styles.infoabout}>
          <h1>Get more info about us</h1>
          <div className={Styles.cardofabout}>
            <div className={Styles.cardabout}>
              <img src="./bag office.svg" alt="" />
              <p>Team and company</p>
              <a href="">See More</a>
            </div>
            <div className={Styles.cardabout}>
              <img src="./building.svg" alt="" />
              <p>Generix branches</p>
              <a href="">See More</a>
            </div>
            <div className={Styles.cardabout}>
              <img src="./award.svg" alt="" />
              <p>Award and certification</p>
              <a href="">See More</a>
            </div>
            <div className={Styles.cardabout}>
              <img src="./people.svg" alt="" />
              <p>Official Clients</p>
              <a href="">See More</a>
            </div>
          </div>
        </section>

        <section>
          <div className={Styles.aboutcontact}>
            <h1>
              Make sure you choose the right expidition sevices for your
              delivery
            </h1>
            <a href="">Contack Us</a>
          </div>
        </section>
        <footer className={Styles.containerFooter}>
          <div className={Styles.imgFooter}>
            <img src="./logo navbar.png" alt="" />
          </div>
          <nav className={Styles.linkFooter}>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Team">Team</a>
            <a href="/Service">Service</a>
          </nav>
          <div className={Styles.iconFooter}>
            <a href="#">
              <img src="./instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="./linkin.svg" alt="" />
            </a>
            <a href="#">
              <img src="./pinterest.svg" alt="" />
            </a>
            <a href="#">
              <img src="./blogger.svg" alt="" />
            </a>
            <a href="#">
              <img src="./facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="./link.svg" alt="" />
            </a>
          </div>
        </footer>
      </body>
    </>
  );
}
