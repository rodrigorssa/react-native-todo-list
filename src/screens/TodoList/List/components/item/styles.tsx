import React from 'react'
import styled from 'styled-components/native'
import { Alert } from 'react-native'

export const ItemContainer = styled.View`
    flex: 1;
    margin-top: 10px;
    padding: 20px;
    border-radius: 10px;
    align-items: stretch;
    background-color: #fff;
    width: 100%;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row-reverse;
    align-items: flex-end;
    border-bottom-width: 1px;
    border-bottom-color: #CCC;
    padding-bottom: 10px;
    margin-top: 10px;
`;

const EditButtonStyle = styled.TouchableOpacity`
    margin-left: 10px;
    height: 40px;
    background-color: blue;
    border-radius: 10px;
    padding: 10px;
    font-size: 12px;
`;

const ButtonText = styled.Text`
        color: #fff;
        font-weight: bold;
`;

export const TextItem = styled.Text`
    font-size: 20px;
`;

const DeleteButtonStyle = styled.TouchableOpacity`
    margin-left: 10px;
    height: 40px;
    width: 40px;
    background-color: red;
    border-radius: 10px;
    padding: 10px;
    font-size: 12px;
    align-items: center;
`;

export const EditButton = ({ onEdit }) => (
    <EditButtonStyle onPress={onEdit}>
        <ButtonText>Editar</ButtonText>
    </EditButtonStyle>
)

const confirmAlert = (onDelete) => () => {
    Alert.alert('Excluir item', 'Tem certeza?', [
        {
            style: "default",
            onPress: onDelete,
            text: "Sim"
        },
        {
            style: "cancel",
            text: "Não"
        }
    ])
}

export const DeleteButton = ({ onDelete }) => (
    <DeleteButtonStyle onPress={confirmAlert(onDelete)}>
        <ButtonText>X</ButtonText>
    </DeleteButtonStyle>
)