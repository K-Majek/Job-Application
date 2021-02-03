import Footer from "../components/Footer";

export default function docs() {
    return (
        <div className="fade-in">
            <header className="section-m docs">
                <h1>Documents are available below.</h1>
                <a className="neon-anchor" href="static/assets/Print-safe CV.pdf">
                    <img class="docs-image" src="static/assets/doc.svg"/>
                    <p>Curriculum Vitae</p>
                </a>
            </header>
        </div>
    );
} 