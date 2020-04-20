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
                            <h6 className="h6"> <br /> <br /> <br /><br /> <br /> <br /> <br /><br /> <br /> 2018 - 2019</h6>
                            <h6 className="h6"> <br /> <br /> <br /><br /> <br /> <br /> actualmente </h6>
                        </div>

                        <div className="titulos-experiencias2">
                            <h4 className="title">Empresa</h4>
                            <h6 className="h6">(Pasantía laboral)</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> ATENTO, Telefónica S.A.</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br /> E.N.O.H.S.A.</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br /> AYAMIX Hormigones</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> I.P.A.P. Chaco</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br />  Konecta</h6>
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
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> Soporte Técnico</h6>
                            <h6 className="h6"><br /> <br /> <br /> <br /> <br /> <br />Soporte Técnico</h6>
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

                            <h6 className="h6 pad1">• Plan de mantenimiento preventivo y cumplimiento de higiene y seguridad
                                                    en el trabajo segun norma ISO 9001, en plantas dosificadoras de hormigón. <br />
                                                    • Verificación y corrección de instalaciones eléctricas, mecánicas e hidráulicas en planta de producción.</h6>

                            <h6 className="h6 pad1">• Mantenimiento edilicio, equipos de refrigeración e instalaciones eléctricas <br />
                            • Realización del 'Estudio de higiene y seguridad en el trabajo' (ley 19587) <br />
                            • Instalación de boxes de trabajo, pantallas y proyectores</h6>

                            <h6 className="h6 pad1">• Atención al cliente <br />
                            • Soporte técnico de telefonía, cable TV e internet.</h6>
                        </div>
                    </div>

                </div>

                <div className="exp-nuevo">

                    <div className="centro">
                        <h6 className="title">2007 - 2008</h6>
                        <h6 style={{ textDecoration: "underline" }}>(Pasantía laboral)</h6>
                        <h6> (Técnico) Instalaciones</h6>
                        <h6>• Instalaciones de circuitos cerrados de televisión</h6>
                        <h6>• Cableado de redes informáticas</h6>
                    </div>

                    <div className="centro">
                        <h6 className="title">2011 - 2013</h6>
                        <h6 style={{ textDecoration: "underline" }}>ATENTO - Telefónica S.A.</h6>
                        <h6> Sopórte técnico, Atencion al Cliente</h6>
                        <h6>• Evaluación eléctrica en líneas de telefonía fija</h6>
                        <h6>• Lectura de pruebas eléctricas </h6>
                        <h6>• Gestión del reclamo pertinente</h6>
                    </div>

                    <div className="centro">
                        <h6 className="title">2015</h6>
                        <h6 style={{ textDecoration: "underline" }}>E.N.O.H.S.A.</h6>
                        <h6> Capacitación de Cooperativas, </h6>
                        <h6> Programa Nacional:
                                •Ellas Hacen•</h6>
                        <h6>• Capacitaciones en instalaciones domiciliarias,
                        destinadas a mujeres coperativizadas en situacion de vulnerabilidad</h6>
                    </div>

                    <div className="centro">
                        <h6 className="title">2018 - 2019</h6>
                        <h6 style={{ textDecoration: "underline" }}>AYAMIX Hormigones</h6>
                        <h6> Mantenimiento</h6>
                        <h6>• Plan de mantenimiento preventivo y cumplimiento de higiene y seguridad
                          en el trabajo segun norma ISO 9001, en plantas dosificadoras de hormigón.</h6>
                        <h6>• Verificación y corrección de instalaciones eléctricas, mecánicas e hidráulicas en planta de producción. </h6>
                    </div>

                    <div className="centro">
                        <h6 className="title">2018 - 2019</h6>
                        <h6 style={{ textDecoration: "underline" }}>I.P.A.P. Chaco</h6>
                        <h6> Soporte Técnico</h6>
                        <h6>• Mantenimiento edilicio, equipos de refrigeración e instalaciones eléctricas</h6>
                        <h6>• Realización del 'Estudio de higiene y seguridad en el trabajo' (ley 19587) </h6>
                        <h6>• Instalación de boxes de trabajo, pantallas y proyectores</h6>
                    </div>

                    <div className="centro">
                        <h6 className="title">Actualmente</h6>
                        <h6 style={{ textDecoration: "underline" }}>Konecta</h6>
                        <h6> Soporte Técnico</h6>
                        <h6>• Atención al Cliente</h6>
                        <h6>• Soporte técnico de telefonía, cable TV e internet.</h6>
                    </div>

                </div>



            </div >
        );
    }
}

export default Experiencia;