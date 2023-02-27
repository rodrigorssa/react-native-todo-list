import React from "react";
import { EditButtonStyle, ButtonText } from "./style";

export const EditButton = ({ onEdit }) => (
    <EditButtonStyle onPress={onEdit}>
        <ButtonText>Editar</ButtonText>
    </EditButtonStyle>
)