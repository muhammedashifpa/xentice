import { AxiosInstance } from "../axios/axios"


export const fetchProducts = () => {
    return AxiosInstance.get('postadSelect')
}