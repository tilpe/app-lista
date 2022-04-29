import React, {useState} from 'react';
import styled from 'styled-components/native';
import AddItemArea from './src/components/AddItemArea';
import ListaItem from './src/components/ListaItem';
import lista from './src/lista';
import ListaItemSwipe from './src/components/ListaItemSwipe';
import {SwipeListView} from 'react-native-swipe-list-view';

const Page = styled.SafeAreaView`
   flex: 1;
   margin-top:40px
`;

const Listagem = styled.FlatList`
  flex: 1;
`; 

export default () => {

   const [items, setItems] = useState([]);
   
   const  toggleDone = (index) => {
      let newItems = [...items];
      newItems[index].done = !newItems[index].done;
      setItems(newItems);
   }

   const taskDell = (index) => {
      let newItems = [...items];
      newItems = newItems.filter((it,i) => i !=index);
      setItems(newItems);
   }

   return(
     <Page>
        <AddItemArea
           items={items}
           setItems={setItems}
        />
        <SwipeListView
           data={items}
           renderItem={
               ({item, index})=><ListaItem  onPress={()=>{toggleDone(index)}}   data={item}/>
           }
           renderHiddenItem={
              ({index})=> <ListaItemSwipe onDelete={()=>{taskDell(index)}} />
            }
           leftOpenValue={50}
           disableLeftSwipe={true}

           keyExtractor={(item)=>item.id}
        />
     </Page>
   );
}

