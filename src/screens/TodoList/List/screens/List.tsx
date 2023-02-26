import React, { useState, useMemo } from 'react'
import { Alert, ScrollView } from 'react-native'
import { Container } from '../../../../components/Container'
import { Loader } from '../../../../components/Loader'
import { Title } from '../../../../components/Title'
import { ROUTE_NAMES } from '../../../../constant'
import { AppListEntity, deleteItem, getItems } from '../../../../store'
import { Item } from '../components/item'
import { ItemContainer } from '../components/item/styles'

export const List = ({ navigation }) => {
    const [loader, setLoader] = useState(true)
    const [listItems, setListItems] = useState([] as AppListEntity[])

    const fetchData = async () => {
        try {
            const data = await getItems()
            setListItems(data)
            setLoader(false)
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu algum erro, tente novamente.')
            setLoader(false)
        }
    }

    const handleDelete = (id: number) => {
        deleteItem(id)
    }

    const handleEdit = (id: number) => {
        navigation.navigate(ROUTE_NAMES.EDIT, { id })
    }

    useMemo(() => {
        fetchData()
    }, [listItems])

    return (
        <Container>
            {loader && <Loader />}
            {
                listItems.length > 0 ?
                    (
                        <>
                            <ScrollView style={{
                                width: '90%'
                            }}>
                                <Title>Lista de compras</Title>
                                {
                                    listItems.map(item =>
                                        <ItemContainer key={item.id}>
                                            <Item
                                                item={item}
                                                onDelete={handleDelete}
                                                onEdit={handleEdit}
                                            />
                                        </ItemContainer>)
                                }
                            </ScrollView></>
                    )
                    : <Title>Nenhum item na lista.</Title>
            }
        </Container >
    )
}