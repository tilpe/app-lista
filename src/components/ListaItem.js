import React, {useState} from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
   background-color: #ccc;
   flex-direction: row;
   padding: 0 20px 0 20px;
   align-items: center;
   height: 50px 
`;

const ItemText  = styled.Text`
   font-size: 15px;
   flex:1;
`;

const ItemCheck = styled.View`
   width: 20px;
   height: 20px;
   border-radius: 10px;
   border: 5px solid #000;
   background-color: ${props=>props.done?'#00ff00':'#fff'}
`;


export default (props) => {

    return (
        <Item 
           onPress={props.onPress}
           activeOpacity={1}
           underlayColor="#DDD"
        >
            <>
               <ItemText>{props.data.task}</ItemText>
               <ItemCheck done={props.data.done}></ItemCheck>
            </>
        </Item>
    );
}



