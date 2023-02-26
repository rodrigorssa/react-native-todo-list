import { ASYNC_ITEM_TYPE, getItem, setItem } from "../services/async-storage";

export enum FormDataFields {
    item = "item",
    quantity = "quantity"
}

export type FormData = {
    [FormDataFields.item]: string;
    [FormDataFields.quantity]: string;
}

export type AppListEntity = FormData & {
    id: number,
}

export enum ASYNC_STORAGE_KEYS {
    ITEM_LIST = "@itemList"
}

const dataConfig = {
    key: ASYNC_STORAGE_KEYS.ITEM_LIST,
    type: ASYNC_ITEM_TYPE.OBJECT
}

export const saveItem = async (item:AppListEntity) => {
    let result:AppListEntity[] = []

    const previousList = await getItem<AppListEntity[] | null>(dataConfig)
    if(previousList){
        result = [
            ...previousList,
            item
        ]
    }
    await setItem(dataConfig, async () => result)
}

export const editItem = async (item:AppListEntity) => {
    let result:AppListEntity[] = []

    const previousList = await getItem<AppListEntity[] | null>(dataConfig)
    if(previousList){
        result = previousList.reduce((acc,currentItem) => {
            const reducerResult = acc
            const itemToChange = currentItem.id === item.id
            if(itemToChange){
                reducerResult.push(item)
            } else {
                reducerResult.push(currentItem)
            }
            return reducerResult
        },[] as AppListEntity[])

    }
    await setItem(dataConfig, async () => result)
}

export const getItems = async () => {
    let result:AppListEntity[] = []
    const data = await getItem<AppListEntity[] | null>(dataConfig)
    if(data){
        result = data
    }
    return result
}

export const getItemById = async (id:number) => {
    let result:AppListEntity | null = null
    const data = await getItem<AppListEntity[] | null>(dataConfig)
    if(data){
        result = data.find(item => item.id === id) || null
    }
    return result
}

export const deleteItem = async (id:number) => {
    let result:AppListEntity[] = []
    const data = await getItem<AppListEntity[] | null>(dataConfig)
    if(data){
        result = await Promise.all(data.filter(item => item.id !== id ))
        await setItem(dataConfig, async () => result)
    }
    return result
}

