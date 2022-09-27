import { fetchProducts } from "../api_manager/api_manager"

// get data from server
export const fetchDataasyncFunction = async () => {
    const response = await fetchProducts()
    return response.data
}

const findPropertyType = (value:propertyTypeInterface,propertyName:string) => {
    return value.name === propertyName
}

const filterDataByPropertyType = (data:fetchDataInterface[],propertyName:string) =>{
    const result = data.filter((item)=>{
        const propertyTypeValue = JSON.parse(item.propertyType)
        return findPropertyType(propertyTypeValue,propertyName)
    })
    return result
}

export const filterDatas = (data:fetchDataInterface[]) =>{
    const commercialShop = filterDataByPropertyType(data,'Commercial Shop')
    const commercialOffice = filterDataByPropertyType(data,'Commercial Office')
    const commercialLand = filterDataByPropertyType(data,'Commercial Land')
    const commercialBuilding = filterDataByPropertyType(data,'Commercial Building')
    const industrialBuilding = filterDataByPropertyType(data,'Industrial Building')
    const industrialLand = filterDataByPropertyType(data,'Industrial Land')
    const coWorkingSpace = filterDataByPropertyType(data,'Co-working Space')
    const privateOffice = filterDataByPropertyType(data,'Private Office')
    const meetingRoom = filterDataByPropertyType(data,'Meeting Room')

    const result:FinalDatainterface[] =  [
        {
            key:1,
            data:commercialShop,
            name:'Commercial Shop'
        },
        {
            key:2,
            data:commercialOffice,
            name:'Commercial Office'
        },
        {
            key:3,
            data:commercialLand,
            name:'Commercial Land'
        },
        {
            key:4,
            data:commercialBuilding,
            name:'Commercial Building'
        },
        {
            key:5,
            data:industrialBuilding,
            name:'Industrial Building'
        },
        {
            key:6,
            data:industrialLand,
            name:'Industrial Land'
        },
        {
            key:7,
            data:coWorkingSpace,
            name:'CoWorking Space'
        },
        {
            key:8,
            data:privateOffice,
            name:'Private Office'
        },
        {
            key:9,
            data:meetingRoom,
            name:'Meeting Room'
        },
    ]
    return result
}

export interface FinalDatainterface {
    key:number
    data:fetchDataInterface[]
    name:string

}

export interface propertyTypeInterface {
    id:number
    name:string
}

export interface fetchDataInterface {
    id:              number;
    propertyType:    string;
    transactionType: TransactionType;
    location:        string;
    details:         string;
    priceRange:      PriceRange;
    userid:          string;
    images:          string;
    verified:        number;
}

export enum PriceRange {
    StartEnd = "{\"start\":\"\",\"end\":\"\"}",
}

export enum TransactionType {
    ID1NameSell = "{\"id\":\"1\",\"name\":\"Sell\"}",
    ID2NameRent = "{\"id\":2,\"name\":\"Rent\"}",
    TransactionTypeID1NameSell = "{\"id\":1,\"name\":\"Sell\"}",
}
