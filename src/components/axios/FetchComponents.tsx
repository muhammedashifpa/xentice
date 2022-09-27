import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api_manager/api_manager'

type Props = {}

const FetchComponents = (props: Props) => {

    const asyncFunction = async () => {
        const response = await fetchProducts()
        return response.data
    }

    useEffect(()=>{
        console.log('start')
        // setLoading(true)
        asyncFunction()
        .then(
            res=>{
                // console.log(filterDatas(res))
                // console.log(res)
                // const jsonList = JSON.parse(res)
                // console.log(jsonList)
                // const obj = res[0]
                // const result = JSON.parse(obj.propertyType)
                // console.log(result.id)
                // setLoading(false)
            })
        .catch(
            err=>{
                // setLoading(false)
                // console.log(err,'end')
            })
    },[])
  return (
    <div>FetchComponents</div>
  )
}

export default FetchComponents

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

const filterDatas = (data:fetchDataInterface[]) =>{
    const commercialShop = filterDataByPropertyType(data,'Commercial Shop')
    const commercialOffice = filterDataByPropertyType(data,'Commercial Office')
    const commercialLand = filterDataByPropertyType(data,'Commercial Land')
    const commercialBuilding = filterDataByPropertyType(data,'Commercial Building')
    const industrialBuilding = filterDataByPropertyType(data,'Industrial Building')
    const industrialLand = filterDataByPropertyType(data,'Industrial Land')
    const coWorkingSpace = filterDataByPropertyType(data,'Co-working Space')
    const privateOffice = filterDataByPropertyType(data,'Private Office')
    const meetingRoom = filterDataByPropertyType(data,'Meeting Room')
    return {
        commercialShop: commercialShop,
        commercialOffice: commercialOffice,
        commercialLand: commercialLand,
        commercialBuilding: commercialBuilding,
        industrialBuilding: industrialBuilding,
        industrialLand: industrialLand,
        coWorkingSpace: coWorkingSpace,
        privateOffice: privateOffice,
        meetingRoom: meetingRoom

    }
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
