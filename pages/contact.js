import Footer from "../components/Footer";

export default function contact() {
    return (
        <div className="fade-in">
            <section className="section-m contact">
                <h1>Contact information:</h1>
                <p>Mail: <a href="mailto:kamil.majek95@gmail.com">kamil.majek95@gmail.com</a></p>
                <p>Phone: <a href="tel:+48530784259">+48530784259</a></p>
                <h2>External links:</h2>
                <div className="contact-links">
                    <a className="neon-anchor" href="https://www.linkedin.com/in/kamil-majek-083b761b2/">linkedin.com/in/kamil-majek-083b761b2/</a>
                    <a className="neon-anchor" href="https://github.com/K-majek">github.com/K-majek</a>
                </div>
            </section>
        </div>
    );
}