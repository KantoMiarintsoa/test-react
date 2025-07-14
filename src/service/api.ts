import { Result } from "@/type"
import axios from "axios"

export const getUser = async ()=>{
    return axios.get<Result>("https://randomuser/api")
}