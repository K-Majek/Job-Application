import {Component} from "react";
class career extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <section className="section-m career">
                    <h1>My career:</h1>
                    <div className="career-wrapper">
                        <h2>Freelance website developer</h2>
                        <ul>
                            <li>Developing code with compliance to client's needs. Currently working on a charter service.</li>
                            <li className="is-bold">2020.09 - now</li>
                        </ul>
                    </div>
                    <div className="career-wrapper">
                        <h2>Warehouse worker</h2>
                        <ul>
                            <li className="is-bold">DPD Polska SA</li>
                            <li>Scanning and sorting of the shipment.</li>
                            <li className="is-bold">2019.10 - now</li>
                        </ul>
                    </div>
                    <div className="career-wrapper">
                        <h2>Warehouse worker</h2>
                        <ul>
                            <li className="is-bold">Biazet SA</li>
                            <li>Working with the WMS system in order to keep assembly line working.</li>
                            <li className="is-bold">2019.8 - 2019.10</li>
                        </ul>
                    </div>
                    <div className="career-wrapper">
                        <h2>Labeller</h2>
                        <ul>
                            <li className="is-bold">Tensorflight</li>
                            <li>Marking properties on satellite maps with border labels.</li>
                            <li className="is-bold">2018.9 - 2019.8</li>
                        </ul>
                    </div>
                </section>
                <section className="section-s career">
                    <h1>Other activities:</h1>
                    <div className="career-wrapper">
                        <h2>Code mentoring</h2>
                        <ul>
                            <li>Helping fellow programmers out with materials, advices and explanations. More of the time it's a voluntary service than a paid job.</li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default career;