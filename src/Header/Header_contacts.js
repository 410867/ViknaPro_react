import * as React from "react";
import '../css/header.css';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import {Component} from "react";
import language from "../images/header_img/Group_5079.svg";
import phone from "../images/header_img/Phone.svg";
import time from "../images/header_img/Time.svg";
import facebookIcon from "../images/header_img/Facebook.svg";
import instagramIcon from "../images/header_img/Instagram.svg";
import arrowDown from "../images/header_img/Down_Arrow_3_.svg";
import menuHeaderMobile from "../images/header_img/img_menu_header_mobile.svg";
import logoHeaderMobile from "../images/header_img/img_logo_header_mobile.svg";
import btnContactHeaderMobile from "../images/header_img/img_btn_contact_header_mobile.svg";

class Header_contacts extends Component {
    render() {
        return (
            <>
                <header className="header header__contacts">
                    <div className="block__desktop__header">
                        <div className="header__block">
                            <div className="header__bottom">
                                <div className="block__logo">
                                    <Link to='/'><img src={ logo } alt="logo"/></Link>
                                </div>
                                <div className="block__nav">
                                    <nav className="header__nav">
                                        <a id="catalog_header_button" className="header__nav__item catalog__list">
                                            Каталог<img src={ arrowDown } alt="down arrow" className="img__down-arrow"/>
                                        </a>
                                        <Link to='/catalog/our-works' className="header__nav__item">Наши работы</Link>
                                        <Link to='/service' className="header__nav__item services__list">
                                            Услуги<img src={ arrowDown } alt="down arrow" className="header__nav__item"/>
                                        </Link>
                                        <Link to='/contacts' className="header__nav__item">Контакты</Link>
                                    </nav>
                                </div>
                                <div className="block__contact">
                                    <button className="button__contact">Связаться с нами</button>
                                </div>
                            </div>
                        </div>
                        <hr className="header__line hide"/>
                        <div className="block__catalog__list hide">
                            <div className="header__block__window">
                                <Link to='/catalog/category/okna-1'><h3 className="text__window">ОКНА</h3></Link>
                                <ul className="list__item">
                                    <li className="item">
                                        <Link to='catalog/category/glukhoye-okno-3' className="item__text">глухое окно</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="block__services__list hide"></div>
                    </div>

                    <div className="block__mobile__header hide">
                        <hr className="header__mobile__hr"/>
                        <div className="block__header__mobile">
                            <img className="menu__header__mobile__img" src={ menuHeaderMobile } alt=""></img>
                            <Link to='/'>
                                <img className="logo__header__mobile" src={ logoHeaderMobile } alt=""/>
                            </Link>
                            <img className="btn__contact__header__mobile" src={ btnContactHeaderMobile } alt=""/>
                        </div>
                        <hr className="header__mobile__hr"/>
                    </div>
                </header>
            </>
        );
    }
}

export default Header_contacts;
