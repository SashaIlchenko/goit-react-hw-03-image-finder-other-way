import { LoadMoreBtn } from "./Button.styled"
export const Button = ({ onClick }) => {
    return (
        <LoadMoreBtn onClick={onClick} type='button' id='Load'>Load more</LoadMoreBtn >
    )
}