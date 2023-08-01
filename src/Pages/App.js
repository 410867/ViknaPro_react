import '../css/index.css';
import '../css/modal.css';

import headerLogoImg1 from "../images/headerLogoImg1.svg";
import headerLogoImg2 from "../images/headerLogoImg2.svg";
import headerLogoImg3 from "../images/headerLogoImg3.svg";
import headerImg from "../images/headerImg.svg";
import openingQuotes from "../images/openingQuotes.svg";
import closingQuotes from "../images/closingQuotes.svg";
import aboutCompanyImg from "../images/aboutCompanyImg.svg";
import qualityImg from "../images/qualityImg.svg";
import experienceImg from "../images/experienceImg.svg";
import guaranteeImg from "../images/guaranteeImg.svg";
import invitationImg from "../images/invitationImg.svg";
import arrowRightImg from "../images/arrow_right_Img.svg";
import nextBtn from "../images/next_btn.svg";
import sliderQuotes from "../images/slider_quotes.svg";
import arrowRightBlack from "../images/arrow_right_black.svg";
import facebook from '../images/footer_img/Facebook.svg';
import instagram from '../images/footer_img/Instagram.svg';
import phone from '../images/footer_img/Phone.svg';
import timeImg from '../images/footer_img/timeImg.svg';
import Group5079Mobile from "../images/header_img/Group_5079_mobile.svg";

import Header from "../Header/Header";
import React, { Component } from "react";
import FooterWithSlider from "../Footer/FooterWithSlider";

//import { outputModalContact } from "../viknapro-front/js/modalForm.js";
import ModalReview from "../Modal/ModalReview";

class App extends Component {
    render() {
        const body = document.querySelector('body');

        function outputModalReview () {
            const contactModalWindow = document.querySelector('.modal__window__review');
            contactModalWindow.classList.add('open');
            body.classList.add('overflow__modal');
        }

/*        function WindowReview() {
            const contactModalWindow = document.querySelector('.modal__window__review');
            const body = document.querySelector('body');
            const modalTitle = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal_title');
            const form = document.querySelector('.form__review');
            const modalButtonClose = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal__review__button__close');

            if (contactModalWindow.closest('.popup__body') && !contactModalWindow.closest('.block__form')) {
                contactModalWindow.classList.remove('open');
                body.classList.remove('overflow__modal');
                modalTitle.innerText = 'Оставить отзыв';
                form.classList.remove('hide');
                modalButtonClose.classList.add('hide');
            }
        }*/

        return (
            <>
                <Header />
                <main>
                    <div className="main main__index">
                        <div className="block__header__main">
                            <div className="block__background__text">
                                <div className="block__text">
                                    <p className="red__text">Производство и установка</p>
                                    <h1 className="heading1__text">Металлопластиковых окон и дверей в одессе</h1>
                                    <p className="text">
                                        Значимость этих проблем настолько очевидна, что дальнейшее развитие
                                        различных форм деятельности не даёт нам иного выбора, кроме определения укрепления
                                        моральных ценностей. Являясь всего лишь частью общей картины, ключевые особенности
                                        структуры проекта и по сей день остаются уделом.
                                    </p>
                                    <button className="text__link">Получить бесплатный просчёт</button>
                                </div>
                            </div>

                            <div className="block__image">
                                {/*{ Image("", "", "header__logo__img1") }*/}
                                <img className="header__logo__img1" src={ headerLogoImg1 } alt=""/>
                                <img className="header__logo__img2" src={ headerLogoImg2 } alt=""/>
                                <img className="header__logo__img3" src={ headerLogoImg3 } alt=""/>
                            </div>

                            <div className="block__header__image">
                                <img className="header__image" src={ headerImg } alt=""/>
                                <div className="block__text__comment">
                                    <p className="text__comment">
                                        <img className="text__opening__quotes" src={ openingQuotes } alt="Opening quotes"/>
                                        Доверие строится годами.<br/>Поэтому клиенты нас рекомендуют.
                                        <img className="text__closing__quotes" src={ closingQuotes } alt="Closing quotes"/>
                                    </p>
                                </div>
                                <div className="block__text__number__clients">
                                    <p className="text__number">1000+</p>
                                    <p className="text__clients">довольных клиентов</p>
                                </div>
                            </div>
                        </div>

                        <div className="block__main__about__company">
                            <div className="block__about__company">
                                <img className="about__company__image" src={ aboutCompanyImg } alt=""/>
                                <div className="block__text__about__company">
                                    <p className="red__text">10 лет опыта</p>
                                    <h2 className="heading2__text">О компании</h2>
                                    <p className="text">
                                        Лишь явные признаки победы институционализации функционально разнесены на
                                        независимые элементы. Диаграммы связей, вне зависимости от их уровня, должны быть
                                        обнародованы.<br/><br/>Следует отметить, что существующая теория выявляет срочную
                                        потребность как самодостаточных, так и внешне зависимых концептуальных решений.
                                        В своём стремлении улучшить пользовательский опыт мы упускаем, что непосредственные
                                        участники технического прогресса могут быть ограничены исключительно образом мышления.
                                    </p>
                                    <div className="block__text__message">
                                        <img className="text__message__opening__quotes" src={ openingQuotes } alt=""/>
                                        <p className="text__message">
                                            Доверие строится годами.<br/>Поэтому клиенты нас рекомендуют.
                                        </p>
                                        <img className="text__message__closing__quotes" src={ closingQuotes } alt=""/>
                                        <p className="bottom__text">
                                            Владимир, основатель <span className="red__bottom__text">ViknaPro</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block__main__benefits">
                            <div className="block__benefits">
                                <h2>Наши преимущества</h2>
                                <div className="block__benefits__text">
                                    <div className="big__block__quality__text">
                                        <div className="block__quality__text">
                                            <img src={ qualityImg } alt=""/>
                                            <h3>Качество</h3>
                                            <p>Мы используем только качественные и проверенные бренды</p>
                                        </div>
                                    </div>
                                    <div className="big__block__experience__text">
                                        <div className="block__experience__text">
                                            <img src={ experienceImg } alt=""/>
                                            <h3>Большой опыт</h3>
                                            <p>Мы используем только качественные и проверенные бренды</p>
                                        </div>
                                    </div>
                                    <div className="big__block__guarantee__text">
                                        <div className="block__guarantee__text">
                                            <img src={ guaranteeImg } alt=""/>
                                            <h3>Гарантия</h3>
                                            <p>Мы даём гарантию на 10 лет на установленную нами продукцию</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block__main__invitation">
                            <div className="block__invitation">
                                <div className="block__invitation__text">
                                    <h2>Приглашаем к сотрудничеству</h2>
                                    <p>
                                        Следует отметить, что существующая теория выявляет срочную потребность как
                                        самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении
                                        улучшить пользовательский опыт мы упускаем, что непосредственные участники
                                        технического прогресса могут быть ограничены исключительно образом мышления.
                                    </p>
                                    <button>Узнать детали</button>
                                </div>
                                <img className="invitation__image" src={ invitationImg } alt=""/>
                            </div>
                        </div>

                        <div className="block__main__production">
                            <div className="block__production">
                                <h2>Наша продукция</h2>
                                <div className="block__production__list">
                                    <div className="block__production__item block__production__item__hover">
                                        <img className="item__img" src="/app-images/img-6_2023-04-19_11-22-38.jpeg" alt=""/>
                                        <h3>ОКНА</h3>
                                        <p>Описание Описание Описание Описание Описание Описание Описание Описание</p>
                                        <a href="/catalog/category/okna-1">
                                            Смотреть каталог<img src={ arrowRightImg } alt="arrow right"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block__main__services">
                            <div className="block__services">
                                <h2>Наши услуги</h2>
                                <div className="main__block__services__list">
                                    <hr/>
                                    <div className="block__services__item" data-href="/service/11111111111111111-1">
                                        <h3>11111111111111111</h3>
                                        <p>3333333333333</p>
                                        <img src={ nextBtn } alt=""/>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>

                        <div className="block__main__slider__comments">
                            <div className="block__slider__comments">
                                <h2>Отзывы</h2>
                                <div className="main__slider">
                                    <div className="main__slider__item">
                                        <img src={ sliderQuotes } alt="comments slide"/>
                                        <h3>Theresa Webb</h3>
                                        <p>
                                            Лишь явные признаки победы институционализации функционально разнесены на
                                            независимые
                                            элементы. Диаграммы связей, вне зависимости от их уровня, должны быть
                                            обнародованы.
                                        </p>
                                    </div>

                                    <div className="main__slider__item">
                                        <img src={ sliderQuotes } alt="comments slide"/>
                                        <h3>Theresa Webb</h3>
                                        <p>
                                            Лишь явные признаки победы институционализации функционально разнесены на
                                            независимые
                                            элементы. Диаграммы связей, вне зависимости от их уровня, должны быть
                                            обнародованы.
                                        </p>
                                    </div>

                                    <div className="main__slider__item">
                                        <img src={ sliderQuotes } alt="comments slide"/>
                                        <h3>Theresa Webb</h3>
                                        <p>
                                            Лишь явные признаки победы институционализации функционально разнесены на
                                            независимые
                                            элементы. Диаграммы связей, вне зависимости от их уровня, должны быть
                                            обнародованы.
                                        </p>
                                    </div>

                                    <div className="main__slider__item">
                                        <img src={ sliderQuotes } alt="comments slide"/>
                                        <h3>Theresa Webb</h3>
                                        <p>
                                            Лишь явные признаки победы институционализации функционально разнесены на
                                            независимые
                                            элементы. Диаграммы связей, вне зависимости от их уровня, должны быть
                                            обнародованы.
                                        </p>
                                    </div>

                                    <div className="main__slider__item">
                                        <img src={ sliderQuotes } alt="comments slide"/>
                                        <h3>Theresa Webb</h3>
                                        <p>
                                            Лишь явные признаки победы институционализации функционально разнесены на
                                            независимые
                                            элементы. Диаграммы связей, вне зависимости от их уровня, должны быть
                                            обнародованы.
                                        </p>
                                    </div>
                                </div>
                                <button className="btn__add__review" onClick={ outputModalReview }>Добавить отзыв</button>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="modal__window__review">
                    <ModalReview />
                </div>

                <div className="block__mobile__header__menu hide">
                    <div className="block__header__menu">
                        <div className="block__overflow">
                            <div className="block__header__menu__item">
                                <div className="block__item__text">
                                    <div className="menu__item__text menu__item">
                                        <a>Наша продукция</a>
                                        <img className="menu__arrow" src={ arrowRightBlack } alt="" />
                                    </div>
                                    <hr />

                                    <div className="menu__ul">
                                        <div className="block__item__text category__block__item__text">
                                            <a href="/windows">Окна</a>
                                        </div>

                                        <hr />
                                        <div className="block__item__text category__block__item__text menu__item">
                                            <a>Двери</a>
                                            <img className="menu__arrow" src={ arrowRightBlack } alt="" />
                                        </div>
                                        <hr />
                                        <div className="menu__ul">
                                            <div className="block__item__text category__block__item__text">
                                                <a href="/door/interior-doors">Межкомнатные</a>
                                            </div>
                                            <hr />
                                            <div className="block__item__text category__block__item__text">
                                                <a>Входные</a>
                                            </div>
                                            <hr />
                                            <div className="block__item__text category__block__item__text">
                                                <a>Фурнитура</a>
                                            </div>
                                            <hr />
                                        </div>

                                        <div className="block__item__text category__block__item__text menu__item">
                                            <a>Жалюзи</a>
                                            <img className="menu__arrow" src={ arrowRightBlack } alt="" />
                                        </div>
                                        <div className="menu__ul"></div>

                                        <hr />
                                        <div className="block__item__text category__block__item__text menu__item">
                                            <a>Москитные сетки</a>
                                            <img className="menu__arrow" src={ arrowRightBlack } alt="" />
                                        </div>
                                        <hr />
                                        <div className="menu__ul"></div>

                                        <div className="block__item__text category__block__item__text menu__item">
                                            <a>Гаражные ворота и роллеты</a>
                                            <img className="menu__arrow" src={ arrowRightBlack } alt="" />
                                        </div>
                                        <hr />
                                        <div className="menu__ul"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="block__header__menu__item">
                                <div className="block__item__text">
                                    <a href="/our_work">Наши работы</a>
                                </div>
                            </div>
                            <hr />

                            <div className="block__header__menu__item">
                                <div className="block__item__text">
                                    <div className="menu__item__text menu__item">
                                        <a>Услуги</a>
                                        <img className="menu__arrow" src={ arrowRightBlack } alt="" />
                                    </div>
                                    <div className="menu__ul"></div>
                                </div>
                            </div>
                            <hr />

                            <div className="block__header__menu__item">
                                <div className="block__item__text">
                                    <a href="/contacts">Контакты</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile__block__footer">
                        <div className="language">
                            <img src={ Group5079Mobile } alt="language" />
                            <a href="" className="language__link language__UA">UA</a>
                            <a href="" className="language__link language__selected">RU</a>
                        </div>

                        <div className="mobile__block__contact">
                            <div className="mobile__contacts__list">
                                <a className="phone__link footer__phone__link" href="tel:+38 (096) 123 45 67">
                                    <img src={ phone } alt="Call +38 (096) 123 45 67"/>+38 (096) 123 45 67
                                </a>
                                <p><img src={ timeImg } alt="" />пн-пт, 10:00-18:00</p>
                            </div>
                            <div className="mobile__social__network__list">
                                <a className="mobile__header__link__facebook" href="https://uk-ua.facebook.com/">
                                    <img src={ facebook } alt="facebook" />Facebook
                                </a>
                                <a className="mobile__header__link__instagram" href="https://www.instagram.com/">
                                    <img src={ instagram } alt="instagram" />Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal__window__contact">
{/*                    <div className="popup__body">
                        <div className="popup__content">
                            <img className="button__close" src="/front/images/imgClose.svg" alt="close">
                                <div className="block__form">
                                    <h2 className="modal_title">Связаться с нами</h2>
                                    <p className="modal_text">Наш менеджер свяжется с вами в ближайшее время</p>
                                    <form className="form">
                                        <div className="block__name">
                                            <label htmlFor="inputName" className="">Имя</label>
                                            <input type="text" className="input__name" id="inputName"
                                                   placeholder="Алексей">
                                        </div>
                                        <div className="block__number">
                                            <label htmlFor="inputNumber" className="label__text__number">Номер<span
                                                className="star__red">*</span></label>
                                            <input required type="tel" className="input__number" id="inputNumber"
                                                   placeholder="+38 (ХХХ) ХХХ ХХ ХХ">
                                                <label htmlFor="inputNumber" className="label__red__text hide">Заполните
                                                    это поле!</label>
                                        </div>
                                        <div className="block__comment">
                                            <label htmlFor="textareaComment" className="">Комментарий</label>
                                            <textarea maxLength="200" className="textarea__comment" id="textareaComment"
                                                      placeholder="Есть ещё что-то о чём мы должны знать?"></textarea>
                                        </div>
                                        <button className="modal_button">Отправить</button>
                                    </form>
                                    <button className="modal__button__close hide">Окей</button>
                                </div>
                        </div>
                    </div>*/}
                </div>

                <FooterWithSlider />
            </>
        );
    }
}



/*
const Image = (src, alt, className) => {
    if(!src) {
        src = "https://via.placeholder.com/100x100";
    }

    if(!alt) {
        alt = "Image name";
    }

    return (<img src={src} alt={alt} className={className} />);
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}

Image.defaultProps = {
    src: '',
    alt: '',
    className: '',
}*/

export default App;
