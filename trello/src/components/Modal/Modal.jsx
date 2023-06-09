import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import { modalStyle } from './ModalStyle';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NotesIcon from '@mui/icons-material/Notes';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { editCard } from '../../store/CardSlice';
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ card }) => {
  const [open, setOpen] = useState(true);
  const [desc, setDesc] = useState(card.desc);
  const [cardName, setCardName] = useState(card.cardName);
  const [set,isSet]=useState("Done");
  const { classes } = modalStyle();
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  // console.log(card);

  const lists = useSelector((state) => state.listReducer);
  console.log(lists);
  const changedData = {
    ...card,
    cardName,
    desc: desc
  }
  console.log(changedData);
  const handleSave = () => {

    dispatch(editCard(changedData));
    //console.log(changedData);
    setOpen(false);
  }

  const find=()=>{
    lists.map((list)=>{
      if(list.listId===card.cardId){
        console.log("------------------------found",list.name);
        //card.inList=list.name;
       // isSet(list.name);
        console.log("=========");

      }    
        return list.name
    })
  }
  
  return (
    <div  >

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}

      <Dialog open={open} onClose={handleClose} >
        <Stack spacing={2} sx={{ width: "25rem", padding: "2rem" }}>

          <Box className={classes.boxContainer}>
            <CallToActionOutlinedIcon fontSize="large" />
            {/* <Typography> {card.cardName}</Typography> */}
            <OutlinedInput
              type="text"
              // value={card.cardName}
              defaultValue={card.cardName}
              onChange={(e) => { setCardName(e.target.value) }}
            />
          </Box>

          <Typography> In list <span style={{color:"blue"}}>{find()}{set}  </span></Typography>

          {/* <Typography> Label </Typography>
              <Box className={classes.colorBox} onClick={onClickHandler}></Box>
          */}

          <Box className={classes.boxContainer}>
            < NotesIcon />
            <Typography> Description </Typography>
          </Box>

          <Box component="form" noValidate autoComplete="off">
            <FormControl sx={{ width: '42ch', padding: "1rem" }}>
              <OutlinedInput
                placeholder="Please enter the description..."
                value={desc}
                onChange={(e) => { setDesc(e.target.value) }}
              />
            </FormControl>
          </Box>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </div>
  )
}

export default Modal
