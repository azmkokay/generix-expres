import Styles from "./about.module.css";
import Link from "next/link";

export const metadata = {
  title: "About Generix Express",
  description:
    "Generix Express is a leading name in the global logistics industry, dedicated to providing unparalleled shipping solutions. With a commitment to excellence, we specialize in delivering cargo seamlessly through land, sea, and air, connecting businesses and individuals across continents. Our experienced team ensures the safe and timely transportation of goods, utilizing state-of-the-art technology and a modern fleet. Generix Express takes pride in its award-winning service, recognized for innovation and reliability. With a strategic presence in over 100 countries, we offer a global network that facilitates efficient shipping and accessibility to diverse markets. As your trusted partner in logistics, Generix Express is poised to exceed expectations and drive success in your global shipping endeavors.",
};

export default function About() {
  return (
    <>
      <body>
        <header className={Styles.containerNavbar}>
          <div className={Styles.logoImg}>
            <img src="./logo navbar.png" alt="logo" />
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
              your shipments until they reach their intended recipients.
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
              <img src="./bag office.svg" alt="bag-office" />
              <p>Team and company</p>
              <a href="">See More</a>
            </div>
            <div className={Styles.cardabout}>
              <img src="./building.svg" alt="building" />
              <p>Generix branches</p>
              <a href="">See More</a>
            </div>
            <div className={Styles.cardabout}>
              <img src="./award.svg" alt="award" />
              <p>Award and certification</p>
              <a href="">See More</a>
            </div>
            <div className={Styles.cardabout}>
              <img src="./people.svg" alt="people" />
              <p>Official Clients</p>
              <a href="">See More</a>
            </div>
          </div>
        </section>

        <section>
          <div className={Styles.aboutcontact}>
            <h1>
              Make sure you choose the right expedition services for your
              delivery
            </h1>
            <a href="">Contact Us</a>
          </div>
        </section>
        <footer className={Styles.containerFooter}>
          <div className={Styles.imgFooter}>
            <img src="./logo navbar.png" alt="logo" />
          </div>
          <nav className={Styles.linkFooter}>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Team">Team</a>
            <a href="/Service">Service</a>
          </nav>
          <div className={Styles.iconFooter}>
            <a href="#">
              <img src="./instagram.svg" alt="instagram" />
            </a>
            <a href="#">
              <img src="./linkin.svg" alt="linkin" />
            </a>
            <a href="#">
              <img src="./pinterest.svg" alt="pinterest" />
            </a>
            <a href="#">
              <img src="./blogger.svg" alt="blogger" />
            </a>
            <a href="#">
              <img src="./facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="./link.svg" alt="link" />
            </a>
          </div>
        </footer>
      </body>
    </>
  );
}
