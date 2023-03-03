import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { Container } from "./App.styled";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    imageName: ''
  }
  handleSearch = (imageName) => {
    this.setState({ imageName })
  }
  render() {
    return (
      <Container>
        <Toaster position='top-right'
          toastOptions={{
            duration: 1500,
          }} />
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery value={this.state.imageName} />
      </Container>)
  }
}
