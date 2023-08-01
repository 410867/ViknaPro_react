import imgClose from "../images/imgClose.svg";

import React, { Component } from "react";

class ModalReview extends Component {
    render() {
        const saveBlockProduction = document.querySelector('.block__main__production .block__production');
        const buttonAddReview = document.querySelector('.block__main__slider__comments .block__slider__comments .btn__add__review');
        const openingModal1 = document.querySelector('.main .block__header__main .block__background__text .block__text .text__link');
        const openingModal2 = document.querySelector('.block__main__invitation .block__invitation .block__invitation__text button');
        const body = document.querySelector('body');
        const modalTitle = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal_title');
        const form = document.querySelector('.form__review');
        const inputName = document.querySelector('.popup__content .block__form .form__review .block__name .input__name');
        const textareaComment = document.querySelector('.popup__content .block__form .form__review .block__comment .textarea__comment');
        const contactModalWindow = document.querySelector('.modal__window__review');
        const contactModalButton = document.querySelector('.modal_button__post__review');
        const buttonClose = document.querySelector('.modal__window__review .popup__body .popup__content .button__close.review');
        const modalButtonClose = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal__review__button__close');

/*        const inputEvents = () => {
            inputName.oninput = () => {
                if(inputName.value.length !== 0) {
                    inputName.classList.add('filling__input');
                } else {
                    inputName.classList.remove('filling__input');
                }
            }

            textareaComment.oninput = () => {
                if(textareaComment.value.length !== 0) {
                    textareaComment.classList.add('filling__input');
                } else {
                    textareaComment.classList.remove('filling__input');
                }
            }
        }

        inputEvents();*/

        /*contactModalWindow.addEventListener('click', ({ target }) => {
            if(target.closest('.popup__body') && !target.closest('.block__form')) {
                contactModalWindow.classList.remove('open');
                body.classList.remove('overflow__modal');
            }
        });*/

        function handleSubmit(event) {
            event.preventDefault();
        }

        function ButtonPostReview() {
            const inputName = document.querySelector('.popup__content .block__form .form__review .block__name .input__name');
            const textareaComment = document.querySelector('.popup__content .block__form .form__review .block__comment .textarea__comment');
            const modalTitle = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal_title');
            const form = document.querySelector('.form__review');
            const modalButtonClose = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal__review__button__close');

            inputName.classList.remove('filling__input');
            textareaComment.classList.remove('filling__input');
            inputName.value = '';
            textareaComment.value = '';
            modalTitle.innerText = 'Отзыв отправлено';
            form.classList.add('hide');
            modalButtonClose.classList.remove('hide');
        }

        function closePopup() {
            const contactModalWindow = document.querySelector('.modal__window__review');
            const form = document.querySelector('.form__review');
            const modalButtonClose = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal__review__button__close');
            const modalTitle = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal_title');

            contactModalWindow.classList.remove('open');
            body.classList.remove('overflow__modal');
            modalTitle.innerText = 'Оставить отзыв';
            form.classList.remove('hide');
            modalButtonClose.classList.add('hide');

            console.log(contactModalWindow);
            console.log(modalButtonClose);
        }

        function ButtonClosePopup() {
            const contactModalWindow = document.querySelector('.modal__window__review');
            const body = document.querySelector('body');
            const modalTitle = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal_title');
            const form = document.querySelector('.form__review');
            const modalButtonClose = document.querySelector('.modal__window__review .popup__body .popup__content .block__form .modal__review__button__close');

            contactModalWindow.classList.remove('open');
            body.classList.remove('overflow__modal');
            modalTitle.innerText = 'Оставить отзыв';
            form.classList.remove('hide');
            modalButtonClose.classList.add('hide');

            console.log('111111');
        }

        return (
            <>
                <div className="popup__body">
                    <div className="popup__content">
                        <img className="button__close review" src={ imgClose } alt="close" onClick={ closePopup } />
                        <div className="block__form">
                            <h2 className="modal_title">Оставить отзыв</h2>
                            <form className="form__review" onSubmit={ handleSubmit }>
                                <div className="block__name">
                                    <label htmlFor="inputName" className="">Имя</label>
                                    <input type="text" className="input__name" id="inputName" placeholder="Алексей" />
                                </div>
                                <div className="block__comment">
                                    <label htmlFor="textareaComment" className="">Комментарий</label>
                                    <textarea
                                        className="textarea__comment"
                                        maxLength="200"
                                        id="textareaComment"
                                        placeholder="Есть ещё что-то о чём мы должны знать?">
                                    </textarea>
                                </div>
                                <button className="modal_button__post__review" onClick={ ButtonPostReview }>Отправить</button>
                            </form>
                            <button className="modal__review__button__close hide" onClick={ ButtonClosePopup }>Окей</button>
                        </div>
                    </div>
                </div>
                <div className="background__popup__body"></div>
            </>
        );
    }
}

export default ModalReview;

