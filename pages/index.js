import Footer from "../components/Footer";
import {Component} from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        document.addEventListener("scroll", () => {
            let elements = document.querySelectorAll("h1,h2,h3,h4,h5,p");
            let height = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
            for(let i = 0; i < elements.length; i++){
                if(elements[i].offsetTop - window.pageYOffset < height - 100 && !elements[i].classList.contains("show")) {
                    elements[i].classList.add("show");
                }
                else if(elements[i].offsetTop - window.pageYOffset > height - 100 && elements[i].classList.contains("show")){
                    elements[i].classList.remove("show");
                }
            }
        });
    }

    render() {
        return (
            <div className="fade-in">
                <header className="section-m header">
                    <div>
                        <h1>Hello, I'm Kamil Majek, a one, simple guy aspiring to be a fullstack developer.</h1>
                        <p>(To browse the application, use scroll and navigation bar)</p>
                    </div>
                </header>
                <section className="section-l section-about">
                    <h2>Why Me?</h2>
                    <p>I've been learning to code since middle school and I was programming on and off until 2020, then I started to make my own projects and was trying to get customer attention and being active on groups and forums to help other fellow programmers out there.</p>
                    <p>I'm looking right now for a job. I even went as far as to make an independent app to apply for a job, not just show up with CV in pdf or html/css format and leave. I have everything what it takes to be a successful programmer in the future. I know how to write backend, how to write frontend and even configure my own VPS and run the app in production environment.</p>
                    <p>I'm quick learner as well, most of the stack I work on right now is picked up in like a month, so if there's anything I don't know, I will learn it.</p>
                </section>
                <section className="section-l section-about">
                    <h3>My tech stack.</h3>
                    <p>Programming languages I worked with the most are C++, C# and JavaScript.</p>
                    <p>To write frontend of web apps, I use mostly JavaScript with ES6+ standard, ReactJS library, SASS and some NPM packages if it will speed up my work.</p>
                    <p>To write backend of the web apps, I use Node.js, Express.js, Next.js, SQL and some NPM packages like BCrypt, Busboy, Sharp.</p>
                    <p>Last thing I can mention is that I can use Linux commands, Linux tools and git.</p>
                </section>
            </div>
        );
    }
}

export default index;