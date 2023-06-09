import React from 'react'
import { singleListStyle } from './singleListStyle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import Cards from './Cards';
import { Paper, Stack } from '@mui/material';
import { useState } from "react";
import { addCard } from '../store/CardSlice';
import { useDrop } from 'react-dnd';
import { onDrop } from '../store/CardSlice';



const SingleList = ({ list }) => {
  const cards = useSelector((state) => {
    return state.cardReducer;
  });
  const [open, setOpen] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardLength, setCardLength] = useState(cards.length + 1);
  const { classes } = singleListStyle();
  const dispatch = useDispatch();

  const cardData = {
    cardId: (cards.length === 0) ? 1 : cards[cards.length - 1].cardId + 1,
    cardName: cardName,
    element: list.listId,
  }

  const handleClick = () => setOpen(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    setCardLength(cardLength + 1)
    dispatch(addCard(cardData));
    setTimeout(() => { setOpen(false) }, 1000);
    setCardName("")
  }

  //for dropping the card in a list
  const [{ isOver }, drop] = useDrop(() => ({
     accept: "card",
      drop: (item) => {
        item.listToDrop = list.listId;
        //console.log(item);
        dispatch(onDrop(item));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      }),
  }));

  return (
    <Stack className={classes.mainContainer} ref={drop}>
      <Box>
        <Typography variant="subtitle2" gutterBottom className={classes.heading}>{list.name}</Typography>
        {/* <RemoveIcon/> */}
      </Box>
      <Box className={classes.cardContainer}>
        {cards.map((card) => {
          if (list.listId === card.element) {
            return <Cards card={card} />
          }
        })
        }
      </Box>
      {open ? <Paper elevation={2} className={classes.addCard}>
        <input className={classes.input}
          type="text"
          placeholder='Enter Card Name....'
          onChange={(e) => {
            setCardName(e.target.value);
          }}
          value={cardName}
        />
        <Button onClick={handleSubmit} variant='contained' size="small"> Add</Button>
      </Paper>
        : <></>
      }
      <Paper elevation={2}>
        <Button className={classes.button} onClick={handleClick} >+ Add a Card</Button>
      </Paper>
    </Stack>
  )
}

export default SingleList


