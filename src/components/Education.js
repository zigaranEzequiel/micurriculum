import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
    render() {
        return (
            <div className="about">
                <div className="rspnsv width">
                    <h6 className="bold">Secundaria</h6>
                    <h6 className="bold">Técnico en Equipos e Instalaciones Electromecánicas</h6>
                    <h6 className="">Escuela de Educación Técnica N°1</h6>
                    <h6 className="">Formosa, Capital. 2002 - 2008</h6>
                </div>

                <div className="rspnsv width">
                    <h6 className="bold">Ingeniería Electromecánica</h6>
                    <h6 className="">Universidad Tecnologica Nacional - FRRe</h6>
                    <h6>Cursando el 5to y último año de la carrera</h6>
                    <h6 className="">Resistencia, Chaco</h6>
                </div>
            </div >
        );
    }
}

export default Education;