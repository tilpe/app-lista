import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
   width:100%;
   height:50px;
   background-color: red;
   justify-content: center;
`;

const ListaItemIcon = styled.View`
   width: 20px;
   height: 20px;
   background-color: #fff;
   margin-left: 15px;
`;

export default (props) => {
    return (
        <ListaItemSwipe
            onPress={props.onDelete}
            activeOpacity={1}
            underlayColor="#ff0000"
        >
            <ListaItemIcon></ListaItemIcon>
        </ListaItemSwipe>
    );
}