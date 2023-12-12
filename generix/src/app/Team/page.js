import Styles from "./team.module.css";
import Link from "next/link";

export const metadata = {
  title: "Meet Our Dedicated Team at Generix Express",
  description:
    "At Generix Express, our success is driven by a team of dedicated professionals committed to excellence in global shipping. Our diverse and skilled team ensures seamless transportation services by land, sea, and air to fulfill your logistics needs. From our experienced drivers and shipping experts to our customer service representatives, each member plays a crucial role in delivering unparalleled service. We take pride in our collaborative approach, innovative solutions, and customer-centric focus, making Generix Express your trusted partner for worldwide shipping. Meet the faces behind our success and discover the expertise that powers your cargo delivery across the globe.",
};

export default function Team() {
  return (
    <>
      <body>
        <header className={Styles.containerNavbar}>
          <div className={Styles.logoImg}>
            <img src="./logo navbar (1).png" alt="logo" />
          </div>
          <nav className={Styles.linkNav}>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Team">Team</Link>
            <Link href="/Service">Service</Link>
          </nav>
          <div className={Styles.btnNav}>
            <a href="#">Contact Us</a>
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
            <img src="./team1 (1).jpg" alt="team1" />
            <h2>Adrian Johnson</h2>
            <p>Development Team</p>
            <div className={Styles.linkteam}>
              <a href="#">
                <img src="./linkin-kotak.svg" alt="linkin" />
              </a>
              <a href="#">
                <img src="./instagram.svg" alt="instagram" />
              </a>
              <a href="#">
                <img src="./whatsapp.svg" alt="whatsapp" />
              </a>
              <a href="#">
                <img src="./link.svg" alt="link" />
              </a>
            </div>
          </div>
          <div className={Styles.itemcontectimg}>
            <img src="./team2 (1).jpg" alt="team2" />
            <h2>Elena Rodriguez</h2>
            <p>Content Team</p>
            <div className={Styles.linkteam}>
              <a href="#">
                <img src="./linkin-kotak.svg" alt="linkin" />
              </a>
              <a href="#">
                <img src="./instagram.svg" alt="instagram" />
              </a>
              <a href="#">
                <img src="./whatsapp.svg" alt="whatsapp" />
              </a>
              <a href="#">
                <img src="./link.svg" alt="link" />
              </a>
            </div>
          </div>
          <div className={Styles.itemcontectimg}>
            <img src="./team3 (1).jpg" alt="team3" />
            <h2>William Chen</h2>
            <p>Management Team</p>
            <div className={Styles.linkteam}>
              <a href="#">
                <img src="./linkin-kotak.svg" alt="linkin" />
              </a>
              <a href="#">
                <img src="./instagram.svg" alt="instagram" />
              </a>
              <a href="#">
                <img src="./whatsapp.svg" alt="whatsapp" />
              </a>
              <a href="#">
                <img src="./link.svg" alt="link" />
              </a>
            </div>
          </div>
        </section>
        <footer className={Styles.containerFooter}>
          <div className={Styles.imgFooter}>
            <img src="./logo navbar (1).png" alt="logo" />
          </div>
          <nav className={Styles.linkFooter}>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Team">Team</Link>
            <Link href="/Service">Service</Link>
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
