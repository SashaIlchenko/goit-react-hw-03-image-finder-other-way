import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { Container } from "./App.styled";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    imageName: '',
    page: 1,
    images: [],
  }
  handleSearch = (imageName) => {
    this.setState({ imageName, page: 1, images: [] })
  }
  render() {
    return (
      <Container>
        <Toaster position='top-right'
          toastOptions={{
            duration: 1500,
          }} />
        <Searchbar onSubmit={this.handleSearch} page={this.state.page} images={this.state.images} />
        <ImageGallery value={this.state.imageName} onSubmit={this.handleSearch} />
      </Container>)
  }
}
