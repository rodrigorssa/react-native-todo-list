import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../constant";
import {Alert} from 'react-native';

export const SuccessAlert = (message:string, title = SUCCESS_MESSAGES.TITLE) => {
    Alert.alert(title,message)
}

export const ErrorAlert = (message:string, title = ERROR_MESSAGES.TITLE) => {
    Alert.alert(title,message)
}