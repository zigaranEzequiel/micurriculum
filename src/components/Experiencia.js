import React, { Component } from 'react';
import './About.css';


// EN APURO POR ENTREGAR EL SITIO WEB, ME VI OBLIGADO A ESCRIBIR CODIGO NO REUTILIZABLE E ILEGIBLE
// PÓNGASE PROTECTOR OCULAR ANTES DE LEER ESTE CODIGO ESCRITO A LAS APURADAS.

class Experiencia extends Component {
    render() {
        return (
            <div className="about">

                <div className="basicInfo1 paddingDescBlock">
                    <div className="titulos-experiencias">
                        <div className="titulos-experiencias2">
                            <h4 className="title">Año</h4>
                            <h6 className="h6">2007 - 2008</h6>
                            <h6 className="h6"> <br /> <br /> <br /> <br /> 2011 - 2013</h6>
                            <h6 className="h6"> <br /> <br /> <br /><br /> <br /> <br /> 2015</h6>
                            <h6 className="h6"> <br /> <br /> <br /><br /> <br /> <br /> 2018 - 2019</h6>
                        </div>

                        <div className="titulos-experiencias2">
                            <h4 className="title">Empresa</h4>
                            <h6 className="h6">(Pasantía laboral)</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> ATENTO, Telefónica S.A.</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br /> ENOHSA</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br /> AYAMIX Hormigones</h6>
                        </div>

                        <div className="titulos-experiencias2">
                            <h4 className="title">Área</h4>
                            <h6 className="h6">(Técnico) Instalaciones</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br />Soporte Tecnico, <br />
                                Atencion al cliente</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br />Capacitación de Cooperativas, <br />
                                Programa Nacional <br />
                                • Ellas Hacen •</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> Mantenimiento</h6>
                        </div>

                        <div className="titulos-experiencias2">
                            <h4 className="title">Tareas</h4>
                            <h6 className="h6 pad1">• Instalaciones de circuitos cerrados de televisión <br />
                            • Cableado de redes informáticas</h6>

                            <h6 className="h6 pad1">• Evaluación eléctrica en líneas de telefonía fija <br />
                            • Lectura de pruebas eléctricas <br />
                            • Gestión del reclamo pertinente</h6>

                            <h6 className="h6 pad1">• Capacitaciones en instalaciones domiciliarias, <br />
                            destinadas a mujeres coperativizadas en situacion de vulnerabilidad</h6>

                            <h6 className="h6 pad1">• Mantenimiento edilicio, equipos de refrigeración e instalaciones eléctricas </h6>
                        </div>
                    </div>

                    <div className="titulos-experiencias">

                    </div>

                </div>
            </div >
        );
    }
}

export default Experiencia;