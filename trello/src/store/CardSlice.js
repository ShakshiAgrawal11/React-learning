import { createSlice } from '@reduxjs/toolkit';

const CardSlice = createSlice(
    {
        name:'cards',
        initialState:[{cardId:1, cardName:"Developing", element:1},
                        {cardId:2, cardName:"Bug", element:2},
                        {cardId:3, cardName:"Testing", element:1}
        ],
        
        reducers:{
            getCards(state, action){
                state = [...state,action.payload]
            },
            deleteCards(state){
                return (state = []);
            },
            addCard(state,action){
                state.push(action.payload);
            },
            deleteCardById(state, action) {
                const id = action.payload;
                return state.filter((card) => card.cardId !== id);
            },
            editCard(state,action){
                state.map((card)=>{
                    if(card.cardId===action.payload.cardId){
                      card.desc=action.payload.desc;
                      card.cardName=action.payload.cardName;                                
                    }})
            },
            onDrop(state,action){
               state.map((card)=>{
                 if(card.cardId === action.payload.id){
                    card.element=action.payload.listToDrop;
                 }})
               return state;
            }
        }
    }
);

export const { addCard , deleteCardById , onDrop , deleteCards , editCard } =    CardSlice.actions;
export default CardSlice;