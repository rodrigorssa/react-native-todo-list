import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { ErrorAlert } from '../../../../components/Alert'
import { Container, ContainerScrollView } from '../../../../components/Container'
import { Loader } from '../../../../components/Loader'
import { Title } from '../../../../components/Title'
import { ERROR_MESSAGES, ROUTE_NAMES } from '../../../../constant'
import { AppListEntity, deleteItem, getItems } from '../../../../store'
import { Item } from '../components/item'

export const List = ({ navigation }) => {
    const [loader, setLoader] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [listItems, setListItems] = useState([] as AppListEntity[])

    const fetchData = async (customLoader) => {
        try {
            customLoader(true)
            const data = await getItems()
            setListItems(data)
        } catch (error) {
            ErrorAlert(ERROR_MESSAGES.GENERIC)
        } finally {
            customLoader(false)
        }
    }

    const handleDelete = (id: number) => {
        deleteItem(id)
    }

    const handleEdit = (id: number) => {
        navigation.navigate(ROUTE_NAMES.EDIT, { id })
    }

    const handleRefresh = () => {
        fetchData(setRefresh)
    };

    useEffect(() => {
        fetchData(setLoader)
    }, [])

    return (
        <Container>
            {loader && <Loader />}
            <ContainerScrollView refreshControl={
                <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
            }>

                {
                    listItems.length > 0 ?
                        (
                            <>

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
                            </>
                        )
                        : <Title>Nenhum item na lista.</Title>
                }
            </ContainerScrollView>
        </Container >
    )
}