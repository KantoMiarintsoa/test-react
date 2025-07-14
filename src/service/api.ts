import { Result } from "@/type"
import axios from "axios"

export const getUser = async ()=>{
    return (await axios.get<Result>("https://randomuser.me/api")).data
}