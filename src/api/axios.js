import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key: "29dad8170b7a9c5564dea27ca994408d",
        language: "ko-KR",
    }
})

export default instance;