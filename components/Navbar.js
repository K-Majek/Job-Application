import Link from "next/link";
import {Component} from "react";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isVisible: true,
            burger: false
        };
        this.toggler = (e) => {
            if(!document.querySelector(".navbar-link").classList.contains("highres"))
            this.setState({isVisible: !this.state.isVisible});
        }
        this.updateNavbar = () => {
            let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if(width <= 768 && !this.state.burger) {
                this.setState({burger: true, isVisible: false, width: width});
            }
            else if(width <= 768 && this.state.burger){
                this.setState({width: width});
            }
            else{
                this.setState({burger: false, isVisible: true, width: width});
            }
        }
    }
    componentDidMount(){
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width <= 768){
            this.setState({
                nodelist: document.querySelectorAll(".navbar-link"), 
                nav: document.querySelector(".navbar-right"), 
                width: width,
                burger: true,
                isVisible: false
            });
        }
        else{
            this.setState({nodelist: document.querySelectorAll(".navbar-link"), nav: document.querySelector(".navbar-right"), width: width});
        }
        window.addEventListener('resize', this.updateNavbar);
        console.log("mounted");
        
        
    }
    componentDidUpdate(){
        if(this.state.width <= 768){
            this.state.nodelist.forEach(element => {
                if(!element.classList.contains("smallres"))element.classList.add("smallres");
                if(element.classList.contains("highres"))element.classList.remove("highres");
            });
        }
        else{
            this.state.nodelist.forEach(element => {
                if(element.classList.contains("smallres"))element.classList.remove("smallres");
                if(!element.classList.contains("highres"))element.classList.add("highres");
                if(element.classList.contains("toggled"))element.classList.remove("toggled");
            });
        }
        
        if(this.state.isVisible) {
            this.state.nodelist.forEach(element => {if(!element.classList.contains("toggled"))element.classList.add("toggled")});
        }
        else {
            this.state.nodelist.forEach(element => {if(element.classList.contains("toggled"))element.classList.remove("toggled")})
        }
        
    }
    render() {
        return (
            <nav>
                <div className="navbar-left"></div>
                <div className="navbar-right">
                        <Link href="/">
                            <a className="navbar-link" onClick={this.toggler}>About me</a>
                        </Link> 
                        <Link href="/career">
                            <a className="navbar-link" onClick={this.toggler}>My career</a>
                        </Link>
                        <Link href="/contact">
                            <a className="navbar-link" onClick={this.toggler}>Contact</a>
                        </Link>
                        <Link href="/docs">
                            <a className="navbar-link" onClick={this.toggler}>Docs</a>
                        </Link>
                    {
                        this.state.burger ?
                        <button className="navbar-burger" onClick={this.toggler}>
                            <div className={this.state.burger && this.state.isVisible ? "navbar-burger-animate" : null} ></div>
                            <div className={this.state.burger && this.state.isVisible ? "navbar-burger-animate" : null}></div>
                            <div className={this.state.burger && this.state.isVisible ? "navbar-burger-animate" : null}></div>
                        </button>
                        : null
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar;