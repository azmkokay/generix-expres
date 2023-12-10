import Styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
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
      <section className={Styles.container}>
        <section className={Styles.hero}>
          <div className={Styles.heroleft}>
            <p>Hey, welcome to generix Export</p>
            <h1>
              We Provide{" "}
              <strong className={Styles.strong}>
                logistics solution tailor
              </strong>
              -made for
              <strong className={Styles.strong}>individual customer!</strong>
            </h1>
            <p>
              "Welcome to Generix Export, home to customized export services for
              customers worldwide. With our expertise spanning more than 50
              leading industries, Generix is committed to providing solutions
              that can be personalized to suit your business needs.
            </p>
            <ul className={Styles.btnhero}>
              <li className={Styles.undecor}>
                <a
                  className={`${Styles.mainnavlink} ${Styles.navcta}`}
                  href="https://api.whatsapp.com/send/?phone=081293230213&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.heroright}>
            <img src="./ilustrator-expor.png" alt="personal picture" />
          </div>
        </section>

        <section className={Styles.containerchooseus}>
          <div className={Styles.choosecontainer}>
            <h1>Why choose us?</h1>
            <div className={Styles.cardofchooseus}>
              <div className={Styles.cardchoose}>
                <img src="./peapole.svg" alt="" />
                <h2>Top Team Generix</h2>
                <p>
                  At Top Team Generix, our success is driven by our exceptional
                  team of professionals. We take pride in assembling a top-tier
                  group of individuals who bring a diverse range of skills,
                  expertise, and innovative thinking to the table. Our team is
                  dedicated to delivering high-quality solutions and ensuring
                  the success of our clients. With a commitment to excellence,
                  collaboration, and continuous improvement, we stand out as a
                  leader in the industry.
                </p>
                <div className={Styles.angkerchoose}>
                  <a
                    className={`${Styles.mainnavlinkchoose} ${Styles.navctachoose}`}
                    href="https://api.whatsapp.com/send/?phone=081293230213&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    See More
                  </a>
                </div>
              </div>
              <div className={Styles.cardchoose}>
                <img src="./custumer.svg" alt="" />
                <h2>Costomer Suport</h2>
                <p>
                  Our commitment to customer satisfaction sets us apart. At Top
                  Team Generix, we understand the importance of providing
                  excellent customer support to ensure a seamless experience for
                  our clients. Our customer support team is always ready to
                  assist, addressing inquiries, resolving issues, and ensuring
                  that our clients receive the assistance they need promptly.
                  Your satisfaction is our priority, and we strive to build
                  lasting relationships through exceptional service.
                </p>
                <div className={Styles.angkerchoose}>
                  <a
                    className={`${Styles.mainnavlinkchoose} ${Styles.navctachoose}`}
                    href="https://api.whatsapp.com/send/?phone=081293230213&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    See More
                  </a>
                </div>
              </div>
              <div className={Styles.cardchoose}>
                <img src="./lable.svg" alt="" />
                <h2>Competitive Rate</h2>
                <p>
                  We recognize the significance of offering competitive rates to
                  our clients. At Top Team Generix, we provide cost-effective
                  solutions without compromising on quality. Our competitive
                  rates ensure that you receive excellent value for your
                  investment. We understand the importance of financial
                  considerations, and our commitment to offering competitive
                  pricing reflects our dedication to delivering affordability
                  while maintaining the highest standards of service and product
                  excellence. Choose Top Team Generix for quality solutions at a
                  competitive rate.
                </p>
                <div className={Styles.angkerchoose}>
                  <a
                    className={`${Styles.mainnavlinkchoose} ${Styles.navctachoose}`}
                    href="https://api.whatsapp.com/send/?phone=081293230213&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={Styles.needtowin}>
          <h1 className={Styles.needtowinh1}>
            The tolls you need to win and keep more clients
          </h1>
          <div className={Styles.cardofneedtowin}>
            <div className={Styles.cardofneed}>
              <img src="./kapal.svg" alt="" />
              <h2>Marine Cargo Services</h2>
              <p>
                Our Marine Cargo Services deliver dependable and efficient
                transportation solutions for your goods by sea. Our team of
                seasoned professionals guarantees the secure and reliable
                handling of your cargo, providing peace of mind throughout the
                shipping process. We prioritize the safety and efficiency of
                your shipments, ensuring a seamless and trustworthy ocean
                freight experience. 
              </p>
            </div>
            <div className={Styles.cardofneed}>
              <img src="./pesawat.svg" alt="" />
              <h2>Air Cargo Services</h2>
              <p>
                With our Air Cargo Services, we accelerate the delivery of your
                shipments with unmatched speed and efficiency. Our commitment to
                excellence ensures a swift and reliable option for transporting
                your valuable cargo. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Esse dolorum veritatis rem magni amet deleniti
                ullam totam quam repellendus expedita, libero asperiores
                nostrum, optio animi, in velit culpa et. Id.
              </p>
            </div>
            <div className={Styles.cardofneed}>
              <img src="./cargo.svg" alt="" />
              <h2>Inland Cargo Services</h2>
              <p>
                Experience seamless inland logistics with our Inland Cargo
                Services, offering comprehensive transportation solutions within
                the country. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Esse dolorum veritatis rem magni amet deleniti ullam totam
                quam repellendus expedita, libero asperiores nostrum, optio
                animi, in velit culpa et. Id. Whether transported by road or
                rail, we guarantee the efficient movement of your goods,
                ensuring a reliable and timely delivery experience.
              </p>
            </div>
            <div className={Styles.cardofneed}>
              <img src="./truk berat.svg" alt="" />
              <h2>Heavy Equipment Services</h2>
              <p>
                Rely on our Heavy Equipment Services for the transportation of
                large and heavy machinery. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Esse dolorum veritatis rem magni
                amet deleniti ullam totam quam repellendus expedita, libero
                asperiores nostrum, optio animi, in velit culpa et. Id. Our
                specialized team and advanced equipment are specifically
                tailored to meet the unique challenges posed by heavy cargo. 
              </p>
            </div>
            <div className={Styles.cardofneed}>
              <img src="./car.svg" alt="" />
              <h2>car Shipping Services</h2>
              <p>
                Enjoy a hassle-free car shipping experience with our dedicated
                Car Shipping Services. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Esse dolorum veritatis rem magni amet deleniti
                ullam totam quam repellendus expedita, libero asperiores
                nostrum, optio animi, in velit culpa et. Id. Our services are
                designed to provide efficient and secure transportation for your
                vehicles, guaranteeing they reach their destination in pristine
                condition.
              </p>
            </div>
            <div className={Styles.cardofneed}>
              <img src="./cargo ship.svg" alt="" />
              <h2>Container Sea Cargo</h2>
              <p>
                Choose our Container Sea Cargo services for efficient and
                organized shipping in standardized containers. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Esse dolorum veritatis
                rem magni amet deleniti ullam totam quam repellendus expedita,
                libero asperiores nostrum, optio animi, in velit culpa et. Id.
                Our containerized sea cargo solutions are designed to streamline
                the shipping process, providing a secure and cost-effective way
                to transport goods internationally. 
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className={Styles.bannerpeta}>
        <div className={Styles.peta}>
          <p>Industry Knowledge</p>
          <h1>Powering inovation across industries, globally.</h1>
        </div>
        <div className={Styles.imgandtextpeta}>
          <div className={Styles.imgpeta}>
            <img src="./world-map-with-flags.png" alt="" />
          </div>
          <div className={Styles.nilaipeta}>
            <div className={Styles.itempeta}>
              <div className={Styles.petatextbwh}>
                <h2>$5b+</h2>
                <h3>Equity Value</h3>
                <p>More than $5b USD in equaly value created</p>
              </div>
            </div>
            <div className={Styles.itempeta}>
              <div className={Styles.petatextbwh}>
                <h2>932</h2>
                <h3>Ventures</h3>
                <p>
                  We've built, invested in and accelerated hundres of venturan,
                  globally
                </p>
              </div>
            </div>
            <div className={Styles.itempeta}>
              <div className={Styles.petatextbwh}>
                <h2>81%</h2>
                <h3>Successfull Pilots</h3>
                <p>
                  We have facilitated hundres of pilots netwath componentes and
                  startup with an unmethed success rate
                </p>
              </div>
            </div>
            <div className={Styles.itempeta}>
              <div className={Styles.petatextbwh}>
                <h2>85+</h2>
                <h3>Fortune 500 Partners</h3>
                <p>working with us to solve big challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={Styles.containerFooter}>
        <div className={Styles.imgFooter}>
          <img src="./logo navbar.png" alt="" />
        </div>
        <nav className={Styles.linkFooter}>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Team">Team</Link>
          <Link href="/Service">Service</Link>
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