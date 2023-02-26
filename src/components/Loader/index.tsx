import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

const CustomView = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.3);
`

export const Loader = () => (
    <CustomView>
        <ActivityIndicator size="large" />
    </CustomView>
)