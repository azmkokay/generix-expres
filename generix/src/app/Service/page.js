import Styles from "./service.module.css";
import Link from "next/link";

export const metadata = {
  title: "Global Freight Shipping",
  description:
    "Generix Express offers comprehensive global freight shipping services, ensuring efficient and secure transportation of your cargo across continents. From door-to-door delivery to customized logistics solutions, we cater to diverse shipping needs.",
};

export default function Service() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="Global Freight Shipping"
          content="Generix Express offers comprehensive global freight shipping services, ensuring efficient and secure transportation of your cargo across continents. From door-to-door delivery to customized logistics solutions, we cater to diverse shipping needs."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
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
            <a href="#">Contact Us</a>
          </div>
        </header>
        <section>
          <div className={Styles.heroservice}>
            <h1>
              Together with our carefully selected partners, we offer you global
              service
            </h1>
            <p>
              We provide customised transportation, forwarding and storage
              services as well as versatile delivery management solutions
              everywhere in the world
            </p>
          </div>
        </section>

        <section className={Styles.specialservice}>
          <div className={Styles.textspecialservice}>
            <h1>Transportation and special services</h1>
            <p>
              Whatever your transportation needs, you can rest assured that we
              will ensure timely delivery together with our competent partners,
              while you focus on your core business.
            </p>
          </div>
          <div className={Styles.imgspecialservice}>
            <img src="./logistik-tata.jpg" alt="logistik" />
          </div>
        </section>

        <section className={Styles.sectiontestimonials}>
          <div className={Styles.testimonialscontainer}>
            <span>Testimonials</span>
            <h2 className={Styles.headingsecondary}>
              Once you try it, you can't go back
            </h2>

            <div className={Styles.testimonials}>
              <figure className={Styles.testimonial}>
                <img alt="Photo of customer Dave Bryson" src="./dave.jpg" />
                <blockquote>
                  "Navigating the Generix Export website was a breeze! The
                  user-friendly interface and well-organized content made it
                  easy for me to find the information I needed about their
                  export services. Kudos to the team for creating a seamless and
                  efficient online experience."
                </blockquote>
                <p>&mdash; Dave Bryson</p>
              </figure>

              <figure className={Styles.testimonial}>
                <img alt="Photo of customer Ben Hadley" src="./ben.jpg" />
                <blockquote>
                  "I was impressed by the wealth of information provided on the
                  Generix Export website. From detailed explanations of their
                  export processes to comprehensive FAQs, the site left no
                  question unanswered. It's evident that they prioritize
                  transparency and aim to empower their clients with knowledge."
                </blockquote>
                <p>&mdash; Ben Hadley</p>
              </figure>

              <figure className={Styles.testimonial}>
                <img alt="Photo of customer Steve Miller" src="./steve.jpg" />
                <blockquote>
                  "The Customer Care section on the Generix Export website is
                  outstanding. I had a few questions about their shipping
                  process, and the prompt and helpful responses from their
                  support team were beyond my expectations. It's reassuring to
                  know that assistance is just a click away."
                </blockquote>
                <p>&mdash; Steve Miller</p>
              </figure>

              <figure className={Styles.testimonial}>
                <img alt="Photo of customer Hannah Smith" src="/hannah.jpg" />
                <blockquote>
                  "What sets Generix Export apart is their commitment to
                  customer satisfaction, and it reflects in every aspect of
                  their website. The clean design, coupled with intuitive
                  navigation, showcases a dedication to user experience. It's
                  evident that they prioritize not only the quality of their
                  export services but also the overall satisfaction of their
                  clients."
                </blockquote>
                <p>&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>

          <div className={Styles.gallery}>
            <figure className={Styles.galleryitem}>
              <img
                src="/gallery-1.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src=".//gallery-2.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-3.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-4.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-5.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-6.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-7.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-8.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-9.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-10.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-11.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
            <figure className={Styles.galleryitem}>
              <img
                src="./gallery-12.jpg"
                alt="Photo of beautifully
          arranged food"
              />
            </figure>
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
