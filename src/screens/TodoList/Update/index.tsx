import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { Title } from "../../../components/Title";
import { InputContainer } from "../../../components/InputContainer";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { FormDataFields, AppListEntity, editItem } from "../../../store";
import { Alert } from "react-native";
import { ROUTE_NAMES } from "../../../constant";

const AppForm = ({ route, navigation }) => {
    const routeId = route?.params?.id;
    const [formData, setFormData] = useState({} as AppListEntity)


    const handleFormData = (field: string) => (value: any) => {
        const data = {
            ...formData,
            [field]: value
        }
        setFormData(data)
    }

    const saveItems = async () => {
        try {
            const result: AppListEntity = {
                id: routeId,
                item: formData.item,
                quantity: formData.quantity
            }
            await editItem(result)
            Alert.alert('Sucesso', 'Registro editado.')
            navigation.navigate(ROUTE_NAMES.APP_LIST)
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu algum erro.')
        }

    }

    return (
        <Container>
            <Title>Editar Item</Title>
            <InputContainer>
                <Input
                    placeholder="O que está faltando em casa?"
                    clearButtonMode="always"
                    onChangeText={handleFormData(FormDataFields.item)}
                    value={formData.item}
                />
                <Input
                    placeholder="Digite a quantidade"
                    keyboardType="numeric"
                    clearButtonMode="always"
                    onChangeText={handleFormData(FormDataFields.quantity)}
                    value={formData.quantity}
                />
                <Button text='Salvar' onPress={saveItems} />
            </InputContainer>
        </Container >
    )
}

export default AppForm;