import '../css/contacts.css';

import phone from '../images/contacts_img/Phone.svg';
import timeImg from '../images/contacts_img/timeImg.svg';
import mailImg from '../images/contacts_img/mail_img.svg';
import locationImg from '../images/contacts_img/locationImg.svg';
import facebook from '../images/footer_img/Facebook.svg';
import instagram from '../images/footer_img/Instagram.svg';

import { Link, } from "react-router-dom";
import React, { Component } from "react";
import Header_contacts from "../Header/Header_contacts";
import Footer from "../Footer/Footer";

class Contacts extends Component {
    render() {
        return (
            <>
                <Header_contacts />
                <main>
                    <div className="main main__contacts">
                        <hr className="top__main__hr"/>
                        <div className="block__contacts">
                            <div className="block__contacts__text">
                                <p><Link to='/'>Главная</Link><span>/</span>Контакты</p>
                                <h2>Контакты</h2>
                                <div className="block__contacts__list">
                                    <h3>Контакты</h3>
                                    <ul>
                                        <li className="contact__item">
                                            <a className="phone__link contact__phone__link" href="tel:+38 (096) 123 45 67">
                                                <img src={ phone } alt="Call +38 (096) 123 45 67"/>+38 (096) 123 45 67
                                            </a>
                                        </li>

                                        <li className="contact__item">
                                            <a className="phone__link contact__phone__link" href="tel:+38 (096) 123 45 67">
                                                <img src={ phone } alt="Call +38 (096) 123 45 67"/>+38 (096) 123 45 67
                                            </a>
                                        </li>

                                        <li className="contact__item">
                                            <img src={ timeImg } alt=""/>пн-пт, 10:00-18:00
                                        </li>

                                        <li className="contact__item">
                                            <a className="contact__mail__link" href="mailto:someone@example.com">
                                                <img src={ mailImg } alt=""/>mail@gmail.com
                                            </a>
                                        </li>

                                        <li className="contact__item">
                                            <img src={ locationImg } alt=""/>Одесса, ул. Французский бульвар 66/2
                                        </li>
                                    </ul>
                                </div>
                                <div className="block__social__network">
                                    <h3>Соцсети</h3>
                                    <ul>
                                        <li className="contact__item">
                                            <Link className="contact__link__facebook" to='https://uk-ua.facebook.com/'>
                                                <img src={ facebook } alt="facebook"/>Facebook
                                            </Link>
                                        </li>
                                        <li className="contact__item">
                                            <Link className="contact__link__instagram" to='https://www.instagram.com/'>
                                                <img src={ instagram } alt="instagram"/>Instagram
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <button className="button__contact">Связаться с нами</button>
                            </div>

                            <div className="block__contacts__map">
                                <iframe className="map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.5387845195937!2d30.7687344!3d46.4380205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633f434b93b49%3A0x9b6af0675e001250!2z0KTRgNCw0L3RhtGD0LfRjNC60LjQuSDQsdGD0LvRjNCy0LDRgCwgNjYvMSwg0J7QtNC10YHQsCwg0J7QtNC10YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDY1MDA5!5e0!3m2!1suk!2sua!4v1675702623232!5m2!1suk!2sua"
                                        width="100%" height="100%" style={{border: "0px"}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default Contacts;
