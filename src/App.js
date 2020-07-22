import React from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail } from "./components";
// import VideoDetail from "./components/VideoDetail";

// import youtube from "./api/youtube";


//class based components great for state management "smart components"
class App extends React.Component {
    render (){
        return  (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar/>
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