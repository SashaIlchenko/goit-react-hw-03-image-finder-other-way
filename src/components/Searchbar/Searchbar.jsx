import { Component } from "react";
import { Header, SearchForm, SearchBtn, BtnLabel, FormInput } from "./Searchbar.styled";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-hot-toast';
export class Searchbar extends Component {
    state = {
        value: ''
    }
    handleChange = ({ target: { value } }) => {
        this.setState({ value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.value.trim()) {
            return toast.error("Please type img name")
        }
        this.props.onSubmit(this.state.value.toLowerCase());
        this.setState({ value: '' })

    }
    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchBtn type="submit" ><BsSearch />
                        <BtnLabel>Search</BtnLabel>
                    </SearchBtn>

                    <FormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </SearchForm>
            </Header>
        )
    }
}

