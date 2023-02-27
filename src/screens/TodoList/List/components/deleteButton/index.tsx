import React from "react"
import { Alert } from "react-native"
import { ALERT_OPTIONS, CANCEL_BUTTON } from "../../../../../constant"
import { DeleteButtonStyle, ButtonText } from "./style"


const confirmAlert = (onDelete) => () => {
    Alert.alert(CANCEL_BUTTON.TITLE, CANCEL_BUTTON.MESSAGE, [
        {
            style: "default",
            onPress: onDelete,
            text: ALERT_OPTIONS.YES
        },
        {
            style: "cancel",
            text: ALERT_OPTIONS.NO
        }
    ])
}

export const DeleteButton = ({ onDelete }) => (
    <DeleteButtonStyle onPress={confirmAlert(onDelete)}>
        <ButtonText>X</ButtonText>
    </DeleteButtonStyle>
)