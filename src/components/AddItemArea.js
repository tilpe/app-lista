import React, {useState} from 'react';
import uuid from 'react-native-uuid';
import styled from 'styled-components/native';

const AddItemArea  = styled.View`
   background-color: #ccc;
   padding: 10px;
`;

const AddItemInput = styled.TextInput`
   background-color: #fff;
   font-size: 15px;
   height: 50px;
   border-radius: 5px;
   padding: 10px;
`;

export default (props) => {
    const [item, setItem] = useState('');

    const handleSubmit = () => {
        if (item.trim() != '') {
            let Items = [...props.items];

            Items.push(
               {id:uuid.v4(), task:item.trim(), done:false}
            );
    
            props.setItems(Items);
        }

        setItem('');
    }

    return (
        <AddItemArea>
            <AddItemInput
                value={item}
                placeholder="Digite um novo item"
                onChangeText={e=>setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AddItemArea>
    );
}


