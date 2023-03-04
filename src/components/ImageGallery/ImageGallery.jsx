import { PureComponent } from "react";
import { getImages } from "services/getImages";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/button";
import { Loader } from "components/Loader/Loader";
import { GalleryList } from "./ImageGallery.styled";
import { toast } from "react-hot-toast";
import Modal from "components/Modal/Modal";

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};
export default class ImageGallery extends PureComponent {
    state = {
        images: [],
        page: 1,
        status: Status.IDLE,
        showModal: false,
        largeImageURL: '',
        tags: '',
        error: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value || prevState.page !== this.state.page) {

            this.setState({ status: Status.PENDING })

            getImages(this.props.value.trim(), this.state.page).then((newImages) => {
                if (!newImages.hits.length) {
                    toast.error(`Ooops!No picture with name ${this.props.value}`)
                    this.setState({ images: [] })
                    return;
                }
                this.setState({
                    images: [...this.state.images, ...newImages.hits],
                    status: Status.RESOLVED,
                })


            })
                .catch((error) => {
                    this.setState({ error, status: Status.REJECTED })
                })
        }
    }
    handleLoad = () => {
        console.log(this.props)
        this.setState((prev) => ({ page: prev.page + 1 }))
        window.scrollTo({
            top: document.documentElement.getBoundingClientRect().bottom,
            behavior: 'smooth',
        });
    }
    toogleModal = (largeImageURL, tags) => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
        this.setState({ largeImageURL, tags });
    }
    render() {
        const { status, images, showModal, largeImageURL, tags } = this.state;
        if (status === Status.PENDING) return <Loader />
        if (status === Status.RESOLVED) return (
            <><GalleryList>
                <ImageGalleryItem images={images} onClick={this.toogleModal} />
            </GalleryList>
                {!images.length || <Button onClick={this.handleLoad} />}
                {showModal && <Modal onClose={this.toogleModal} src={largeImageURL} alt={tags} />}
            </>
        )
        if (status === Status.REJECTED) return toast.error("Ooops!Something going wrong!")

    }
}
