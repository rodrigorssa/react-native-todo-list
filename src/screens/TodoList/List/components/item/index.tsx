import React, { useRef, useEffect } from 'react'
import { AppListEntity } from '../../../../../store';
import { DeleteButton } from '../deleteButton';
import { EditButton } from '../editButton';
import { TextItem, ButtonsContainer, ItemContainer } from './styles'
import { Animated } from 'react-native'
export const Item = ({ item, onDelete, onEdit }: {
    item: AppListEntity,
    onDelete: any,
    onEdit: any,
}) => {
    const fadeValue = useRef(new Animated.Value(0)).current

    const text = `${item.id} - ${item.quantity} de ${item.item}`;

    const emitIdOnDeleteMethod = (id) => () => {
        onDelete(id)
    }
    const emitIdOnEditMethod = (id) => () => {
        onEdit(id)
    }

    useEffect(() => {
        Animated.timing(fadeValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start()
    }, [])

    return (
        <ItemContainer>
            <Animated.View style={{ opacity: fadeValue }}>
                <TextItem>{text}</TextItem>
                <ButtonsContainer>
                    <EditButton onEdit={emitIdOnEditMethod(item.id)} />
                    <DeleteButton onDelete={emitIdOnDeleteMethod(item.id)} />
                </ButtonsContainer>
            </Animated.View>
        </ItemContainer>

    )
}