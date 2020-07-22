import axios from "axios";

export default axios.create({
    base_URL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:'[AIzaSyCYHumF1q3Z9J66sS-uUHCPVQUe005v4qQ]'
    }

})

