import axios from "axios"
import { castType, ShowMainType } from "../Types/Modals"

export const SearchProducts = (title :string) => {
    return axios.get ('https://api.tvmaze.com/search/shows?q=' + title )
    .then( (resp)=> resp.data.map((val: ShowMainType )=>  val.show ))
}


export const  SingleShow = (id : number ) =>{
    return axios .get("https://api.tvmaze.com/shows/" +id)
    .then((resp)=>{
        return resp.data ;
    })
}

export const  ShowCast = (id : number ) =>{
    return axios .get("https://api.tvmaze.com/shows/" + id  +"/cast")
    .then((resp)=>{
        const data = (resp.data).map((val:castType)=> val.person )
            return data ;
    })
}
