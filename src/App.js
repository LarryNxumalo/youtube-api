import React from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail } from "./components";

import youtube from "./api/youtube";
// import VideoDetail from "./components/VideoDetail";


//class based components great for state management "smart components"
class App extends React.Component {
    handleSubmit = async (searchTerm) => { // stop execution of code before fetched
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key:'AIzaSyCYHumF1q3Z9J66sS-uUHCPVQUe005v4qQ',
                q: searchTerm,
             }
            });
            console.log(response);
    }
    render (){
        return  (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/*VIDEO LIST*/}
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

//functional based components are not good for state "dummy components"
// const App = () => {
//     return(<h1>Youtube clone App</h1>)
// }

export default App;