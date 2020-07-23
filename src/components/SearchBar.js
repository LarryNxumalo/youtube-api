import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) =>  this.setState({ searchTerm: event.target.value })
    // console.log(event.target.value);// this is similar to v-model together with v-on:change - listiner or watcher for chnages
    handleSubmit = (event) => {
        const { searchTerm } = this.state; // distructuring instead of using this.state.searchTerm
        const { onFormSubmit } = this.props; //props this.props.onFormSubmit

        onFormSubmit(searchTerm);

        event.preventDefault();//.prevent in Vue
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="search..." onChange={this.handleChange}/>
            </form>
        )
    }
}

export default SearchBar;