import React, { useEffect, useState } from "react";
import { Container } from "../../../components/Container";
import { Title } from "../../../components/Title";
import { InputContainer } from "../../../components/InputContainer";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { FormDataFields, AppListEntity, editItem, getItemById } from "../../../store";
import { ERROR_MESSAGES, ROUTE_NAMES, SUCCESS_MESSAGES } from "../../../constant";
import { Loader } from "../../../components/Loader";
import { ErrorAlert, SuccessAlert } from "../../../components/Alert";

const AppForm = ({ route, navigation }) => {
    const routeId = route?.params?.id;
    const [formData, setFormData] = useState({
        id: 0,
        item: "",
        quantity: ""
    })
    const [loader, setLoader] = useState(false)

    const getData = async (id: number) => {
        try {
            setLoader(true)
            const data = await getItemById(id)
            if (data) {
                setFormData(data)
            }
        } catch (error: any) {
            ErrorAlert(ERROR_MESSAGES.GENERIC)
        } finally {
            setLoader(false)
        }
    }

    useEffect(() => {
        if (routeId) {
            getData(routeId)
        }
    }, [])

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
            SuccessAlert(SUCCESS_MESSAGES.EDITED)
            navigation.navigate(ROUTE_NAMES.LIST)
        } catch (error) {
            ErrorAlert(ERROR_MESSAGES.GENERIC)
        }
    }

    return (
        <Container>
            <Title>Editar Item</Title>
            {loader && <Loader />}
            <InputContainer>
                <Input
                    placeholder="O que está faltando em casa?"
                    clearButtonMode="always"
                    onChangeText={handleFormData(FormDataFields.item)}
                    value={formData?.item}
                />
                <Input
                    placeholder="Digite a quantidade"
                    keyboardType="numeric"
                    clearButtonMode="always"
                    onChangeText={handleFormData(FormDataFields.quantity)}
                    value={formData?.quantity}
                />
                <Button text='Salvar' onPress={saveItems} />
            </InputContainer>
        </Container >
    )
}

export default AppForm;