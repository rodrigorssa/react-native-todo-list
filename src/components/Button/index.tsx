import React from "react"
import styled from 'styled-components'

const ButtonInput = styled.TouchableOpacity`
    margin: 10px 20px;
    height: 60px;
    background-color: blue;
    border-radius: 10px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
`

const InputText = styled.Text`
    color: #fff;
    font-weight: bold;
`

export const Button = ({ text, onPress }: { text: string, onPress: any }) => (
    <ButtonInput onPress={onPress}>
        <InputText>{text}</InputText>
    </ButtonInput>
)