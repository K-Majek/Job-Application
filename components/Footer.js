import {Component} from "react";
import Link from "next/link";
class Footer extends Component {
    state = {  }
    render() {
        return (
            <footer className="footer">
                <div className="footer-contact">
                    <a href="mailto:kamil.majek95@gmail.com">kamil.majek95@gmail.com</a>
                </div>
                <div className="footer-links">
                    <Link href="/">
                        <a className="footer-link" onClick={this.toggler}>About me</a>
                    </Link> 
                    <Link href="/career">
                        <a className="footer-link" onClick={this.toggler}>My career</a>
                    </Link>
                    <Link href="/contact">
                        <a className="footer-link" onClick={this.toggler}>Contact</a>
                    </Link>
                    <Link href="/docs">
                        <a className="footer-link" onClick={this.toggler}>Docs</a>
                    </Link>
                </div>
                <div className="footer-rodo">
                    <p>I agree to the processing of personal data provided in this website and any document it contains for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
                </div>
            </footer>
        );
    }
}

export default Footer;