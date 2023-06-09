import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper, List, ListItem, Button } from '@mui/material';
import { cardStyle } from "./cardsStyle";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { deleteCardById } from "../store/CardSlice"
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import Modal from './Modal/Modal';

const Cards = ({ card }) => {

  const [openModal, setOpenModal] = useState(false);
  const { classes } = cardStyle();
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteCardById(id))

  const handleModal = () => {
    setOpenModal(true);
    setTimeout(() => { setOpenModal(false); }, 20000);
  }

  //for dragging each card
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: card.cardId, element: card.element },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  }));


  return (
    <IconButton onClick={handleModal}>

      <Paper ref={drag} elevation={3} className={classes.cardContainer} key={card.cardId} >
        {openModal && <Modal card={card} />}
        <List >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <CloseIcon onClick={() => handleDelete(card.cardId)} />
              </IconButton>
            }
          >
            <Box>
              <Typography variant="h9" gutterBottom sx={{ fontWeight: "bold" }}> #{card.cardId}</Typography>
              <Typography variant="button" display="block" gutterBottom >{card.cardName}</Typography>
            </Box>

          </ListItem>
        </List>
      </Paper>
    </IconButton>
  )
}

export default Cards
