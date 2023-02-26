import React from 'react'
import { AppListEntity } from '../../../../store/store';
import { TextItem, ButtonsContainer, DeleteButton, EditButton } from './styles'

export const Item = ({ item, onDelete, onEdit }: {
    item: AppListEntity,
    onDelete: any,
    onEdit: any,
}) => {

    const text = `${item.id} - ${item.quantity} de ${item.item}`;

    const emitIdOnDeleteMethod = (id) => () => {
        onDelete(id)
    }
    const emitIdOnEditMethod = (id) => () => {
        onEdit(id)
    }

    return (
        <>
            <TextItem>{text}</TextItem>
            <ButtonsContainer>
                <EditButton onEdit={emitIdOnEditMethod(item.id)} />
                <DeleteButton onDelete={emitIdOnDeleteMethod(item.id)} />
            </ButtonsContainer>
        </>
    )
}