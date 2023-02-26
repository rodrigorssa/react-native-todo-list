import AsyncStorage from "@react-native-async-storage/async-storage"

export enum ASYNC_ITEM_TYPE {
    STRING = 'string',
    OBJECT = 'object',
}

const handleGetDataType = {
    [ASYNC_ITEM_TYPE.STRING]: (data:string) => data,
    [ASYNC_ITEM_TYPE.OBJECT]: (data:string) => JSON.parse(data)
}

const handleSetDataType = {
    [ASYNC_ITEM_TYPE.STRING]: (data:any) => data,
    [ASYNC_ITEM_TYPE.OBJECT]: (data:any) => JSON.stringify(data)
}
type SetItemCallBack<T> = () => Promise<T | null>

export const getItem = async <T> (config:{
    key:string,
    type:ASYNC_ITEM_TYPE.OBJECT | ASYNC_ITEM_TYPE.STRING
}):Promise<T | null> => {
    let result = null;
    const data = await AsyncStorage.getItem(config.key)
    if(data) {
        result = handleGetDataType[config.type](data)
    }
    return result
}

export const setItem = async <T> (config:{
    key:string,
    type:ASYNC_ITEM_TYPE.OBJECT | ASYNC_ITEM_TYPE.STRING
},fn: SetItemCallBack<T>):Promise<T | null> => {
    let result:T | null = null;
    const data = await fn() as T;
    if(data){
        result = data
        const parsedData = handleSetDataType[config.type](data)
        await AsyncStorage.setItem(config.key,parsedData)
    }
    return result
}