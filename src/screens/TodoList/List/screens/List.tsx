import React, { useState, useMemo } from 'react'
import { ScrollView } from 'react-native'
import { ErrorAlert } from '../../../../components/Alert'
import { Container } from '../../../../components/Container'
import { Loader } from '../../../../components/Loader'
import { Title } from '../../../../components/Title'
import { ERROR_MESSAGES, ROUTE_NAMES } from '../../../../constant'
import { AppListEntity, deleteItem, getItems } from '../../../../store'
import { Item } from '../components/item'

export const List = ({ navigation }) => {
    const [loader, setLoader] = useState(false)
    const [listItems, setListItems] = useState([] as AppListEntity[])

    const fetchData = async () => {
        try {
            setLoader(true)
            const data = await getItems()
            setListItems(data)
        } catch (error) {
            ErrorAlert(ERROR_MESSAGES.GENERIC)
        } finally {
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
                                        <Item
                                            key={item.id}
                                            item={item}
                                            onDelete={handleDelete}
                                            onEdit={handleEdit}
                                        />)
                                }
                            </ScrollView></>
                    )
                    : <Title>Nenhum item na lista.</Title>
            }
        </Container >
    )
}