import { Component } from "react";
import { createPortal } from 'react-dom';
import { ModalView, Backdrop, ModalImg } from "./Modal.styled";
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyEsc)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyEsc)
    }

    handleKeyEsc = evt => {

        if (evt === 'Escape') {
            this.props.onClose();
        }
    }
    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    }
    render() {
        const { src, alt } = this.props;
        return createPortal(<Backdrop onClick={this.handleBackdropClick}>
            <ModalView>
                <ModalImg src={src} alt={alt} />
            </ModalView>
        </Backdrop>, modalRoot)
    }
}