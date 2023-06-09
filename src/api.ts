
import axios from "axios";
import {Show} from "./models/show";

const  BASE_URL = "https://api.tvmaze.com/";

export const searchShows = (keyword: string)=>{
    return axios.get<{show: Show}[]>(BASE_URL + "search/shows?q="+ keyword).then((response)=> 
    response.data.map((item)=>item.show)
    )
}

export const loadShowDetail = (showId: number)=>{
    return axios.get(BASE_URL + "shows/" + showId).then(response=>response.data);
}