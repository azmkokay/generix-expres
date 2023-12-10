import Styles from "./team.module.css";
import Link from "next/link";
import Image from 'next/image'


export default function Team() {
  return (
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
      <section className={Styles.heroteam}>
        <h1>Our leadership Generix Team</h1>
        <p>
          With over 25 years of combined experience, we have a well-seasoned
          team at the helm.
        </p>
      </section>

      <section className={Styles.containerteam}>
        <div className={Styles.itemcontectimg}>
          <img src="./team1.jpg" alt="" />
          <h2>Adrian Johnson</h2>
          <p>Development Team</p>
          <div className={Styles.linkteam}>
            <a href="">
              <img src="./linkin-kotak.svg" alt="" />
            </a>
            <a href="">
              <img src="./instagram.svg" alt="" />
            </a>
            <a href="">
              <img src="./whatsapp.svg" alt="" />
            </a>
            <a href="">
              <img src="./link.svg" alt="" />
            </a>
          </div>
        </div>
        <div className={Styles.itemcontectimg}>
          <img src="./team2.png" alt="" />
          <h2>Elena Rodriguez</h2>
          <p>Content Team</p>
          <div className={Styles.linkteam}>
            <a href="">
              <img src="./linkin-kotak.svg" alt="" />
            </a>
            <a href="">
              <img src="./instagram.svg" alt="" />
            </a>
            <a href="">
              <img src="./whatsapp.svg" alt="" />
            </a>
            <a href="">
              <img src="./link.svg" alt="" />
            </a>
          </div>
        </div>
        <div className={Styles.itemcontectimg}>
          <img src="./team3.png" alt="" />
          <h2>William Chen</h2>
          <p>Management Team</p>
          <div className={Styles.linkteam}>
            <a href="">
              <img src="./linkin-kotak.svg" alt="" />
            </a>
            <a href="">
              <img src="./instagram.svg" alt="" />
            </a>
            <a href="">
              <img src="./whatsapp.svg" alt="" />
            </a>
            <a href="">
              <img src="./link.svg" alt="" />
            </a>
          </div>
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
  );
}
