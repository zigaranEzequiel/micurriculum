import React, { Component } from 'react';
import './About.css';

const age = 30;
const email = "zigaran114@gmail.com";
const adress = "AV. 9 de Julio 2050 P.0 D.2 - Resistencia, CH.";
const language = "Castellano, Inglés.";

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutDesc paddingDescBlock">
                    <h4 className="title">
                        Acerca de Mi
                    </h4>
                    <h6 className="h6">
                        Hola!, permitime presentarme brevemente: <br /> <br />

                        Soy nacido en Formosa, capital. Actualmente en Resistencia, Chaco. <br />
                        Busco la oportunidad de crecer profesionalmente, aportar al
                        crecimiento y logro de los objetivos dentro de un equipo de trabajo,
                        dispuesto a aprender, progresar y compartir conocimientos. <br />
                    </h6></div>
                <div className="basicInfo paddingDescBlock">
                    <h4 className="title">Información Básica</h4>

                    <div className="descBasicInfo">

                        <div className="box-data">
                            <h6 className="title padding h6">EDAD:</h6>
                            <h6 className="h6">{age}</h6>
                        </div>

                        <div className="box-data">
                            <h6 className="title padding h6">EMAIL:</h6>
                            <h6 className="h6">{email}</h6>
                        </div>

                        <div className="box-data">
                            <h6 className="title padding h6">DIRECCION:</h6>
                            <h6 className="h6">{adress}</h6>
                        </div>

                        <div className="box-data-whitout-pad">
                            <h6 className="title padding h6">IDIOMA:</h6>
                            <h6 className="h6">{language}</h6>
                        </div>

                    </div>

                </div>
            </div >
        );
    }
}

export default About;