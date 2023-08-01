import * as React from "react";
import '../css/footer.css';

import viberImg from "../images/footer_img/Viber_img.svg";
import telegramImg from "../images/footer_img/Telegram_img.svg";
import footerLogo from "../images/footer_img/footerLogo.svg";
import phone from "../images/footer_img/Phone.svg";
import timeImg from "../images/footer_img/timeImg.svg";
import mailImg from "../images/footer_img/mail_img.svg";
import locationImg from "../images/footer_img/locationImg.svg";
import facebook from "../images/footer_img/Facebook.svg";
import instagram from "../images/footer_img/Instagram.svg";

import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="block__footer">
                        <div className="footer__block__info">
                            <hr />
                            <div className="block__connection">
                                <div className="block__connection__text">
                                    <h2 className="header__connection">
                                        Давайте обсудим сотрудничество в удобном для вас формате
                                    </h2>
                                    <p className="text__connection">
                                        Готовы ответить на любые вопросы и помочь с замерами
                                    </p>
                                </div>
                                <div className="block__contactUs">
                                    <div className="block__contactUs__text">
                                        <p className="text">Оставьте номер для связи или напишите нам в мессенджер</p>
                                        <a href="">
                                            <img className="img__viber" src={ viberImg } alt="" />
                                        </a>
                                        <a href="https://telegram.me/XXXXXXXXXX">
                                            <img src={ telegramImg } alt="" />
                                        </a>
                                    </div>
                                    <form className="footer__form">
                                        <input required type="tel" className="footer__input__number" placeholder="+38 (ХХХ) ХХХ ХХ ХХ" />
                                        <label htmlFor="inputNumber" className="footer__label__red__text hide">
                                            Заполните это поле!
                                        </label>
                                        <button className="footer__form__button">Отправить</button>
                                    </form>
                                    <p className="text__privacy__policy">
                                        Нажимая на кнопку, вы даёте согласение на обработку персональных данных и с
                                        <a href="/door" className="link__privacy__policy">политикой конфиденциальности</a>
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="footer__block__contact">
                                <div className="footer__block__image">
                                    <a href="/"><img src={ footerLogo } alt="" /></a>
                                </div>
                                <div className="footer__block__catalog">
                                    <h2>Каталог</h2>
                                    <ul className="footer__catalog__list">
                                        <li className="footer__list__item">
                                            <a href="#" id="catalog_footer_button">Каталог</a>
                                        </li>
                                        <li className="footer__list__item">
                                            <a href="/catalog/our-works">Наши работы</a>
                                        </li>
                                        <li className="footer__list__item">
                                            <a href="/service">Услуги</a>
                                        </li>
                                        <li className="footer__list__item">
                                            <a href="/contact">Контакты</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__block__contact__information">
                                    <h2>Контактная информация</h2>
                                    <ul className="">
                                        <li className="footer__list__item">
                                            <a className="phone__link footer__phone__link" href="tel:+38 (096) 123 45 67">
                                                <img src={ phone } alt="Call +38 (096) 123 45 67"/>+38 (096) 123 45 67
                                            </a>
                                        </li>
                                        <li className="footer__list__item">
                                            <img src={ timeImg } alt="" />пн-пт, 10:00-18:00
                                        </li>
                                        <li className="footer__list__item">
                                            <a className="footer__mail__link" href="mailto:someone@example.com">
                                                <img src={ mailImg } alt="" />mail@gmail.com
                                            </a>
                                        </li>
                                        <li className="footer__list__item">
                                            <img src={ locationImg } alt="" />Одесса, ул. Французский бульвар 66/2
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__block__social__network">
                                    <h2>Мы в соцсетях</h2>
                                    <ul className="">
                                        <li className="footer__list__item">
                                            <a className="footer__link__facebook" href="https://uk-ua.facebook.com/">
                                                <img src={ facebook } alt="facebook" />Facebook
                                            </a>
                                        </li>
                                        <li className="footer__list__item">
                                            <a className="footer__link__instagram" href="https://www.instagram.com/">
                                                <img src={ instagram } alt="instagram" />Instagram
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="block__copyright">
                                <p>viknapro.od.ua © 2020</p>
                                <p>Разработано с любовью MantiCore Development</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
