import React, { Component } from "react";
import "./Perfil.css";
import profilePic from '../images/ProfileImg.png';
import instaPic from '../images/instagram.png';
import cv from '../images/CV_ZigaranREzequiel.pdf';

class Perfil extends Component {
    render() {
        return (
            <div className="container">
                <div className="">
                    <img src={profilePic} className="picSize" alt="Foto de perfil"></img>
                </div>

                <div className="profileDesc">
                    <h1 className="desc">Zigaran Raúl Ezequiel</h1>
                    <h6 className="desc1">· TÉCNICO EN EQUIPOS E INSTALACIONES ELECTROMECÁNICAS ·</h6>
                    <h6 className="desc1">· ESTUDIANTE AVANZADO DE INGENIERÍA ELECTROMECÁNICA ·</h6>
                </div>


                <a href={cv} className="download" download>
                    <button type="button" className="mybtn btn btn-lg">Descargar CV</button>
                </a>

                <div className="socialNetworks">

                    <a href="https://www.instagram.com/rauly_eze/" target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src={instaPic} alt="Instagram" />
                    </a>

                </div>

                <div className="caja">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </div>
        );
    }
}

export default Perfil;