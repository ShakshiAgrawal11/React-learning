import { createSlice } from '@reduxjs/toolkit';

const ListSlice = createSlice(
    {
        name:'lists',
        initialState:[
            {listId:1,name:"To-Do"},
            {listId:2,name:"In Progress"},
            {listId:3,name:"Done"},
          ],
        reducers:{
            deleteLists(state){
                return (state = []);
            },
            addList(state,action){
                state.push(action.payload);
            },
        }
    }
);

export const { addList ,deleteLists } =    ListSlice.actions;
export default ListSlice;