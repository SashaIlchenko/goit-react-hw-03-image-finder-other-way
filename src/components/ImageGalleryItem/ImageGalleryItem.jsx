import { GalleryListItem, ImgItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ images, onClick }) => {
    return images.map(img => {
        return <GalleryListItem key={img.id} >
            <ImgItem src={img.webformatURL} alt={img.tags} onClick={() => onClick(img.largeImageURL, img.tags)} />
        </GalleryListItem>
    })
}