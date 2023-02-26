import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { Title } from "../../../components/Title";
import { InputContainer } from "../../../components/InputContainer";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { FormDataFields, AppListEntity, saveItem } from "../../../store";
import { Alert } from "react-native";
import { ROUTE_NAMES } from "../../../constant";

const AppForm = ({ navigation }) => {
    const createInitialform = {
        [FormDataFields.item]: "",
        [FormDataFields.quantity]: ""
    }
    const [formData, setFormData] = useState(createInitialform)


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
                id: Date.now(),
                item: formData.item,
                quantity: formData.quantity
            }
            await saveItem(result)
            Alert.alert('Sucesso', 'Registro salvo.')
            setFormData(createInitialform)
            navigation.navigate(ROUTE_NAMES.LIST_NAVIGATOR)
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu algum erro.')
        }

    }

    return (
        <Container>
            <Title>Item para comprar</Title>
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