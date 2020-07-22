import React from "react";

import { Paper, TextField} from '@material-ui/core';

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
           <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label="Search..." onChange={this.handleChange}/>
            </form>
           </Paper>
        )
    }
}

export default SearchBar;