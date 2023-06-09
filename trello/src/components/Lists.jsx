import React from 'react';
import SingleList from './SingleList';
import { Box } from '@mui/material';
import { listStyle } from './listsStyle';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { Paper } from '@mui/material';
import { addList, deleteLists } from '../store/ListSlice';
import { deleteCards } from '../store/CardSlice';

const Lists = () => {
  const { classes } = listStyle();
  const [listName, setListName] = useState("")
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.listReducer);

  //console.log(lists.length+1)
  const listData = {
    listId: lists.length + 1,
    name: listName
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList(listData));
    setTimeout(() => { setOpen(false) }, 1000);

  }
  const handleDeleteAll = () => {
    dispatch(deleteLists());
    dispatch(deleteCards());
  }

  const handleClick = () => { setOpen(true); setTimeout(() => { setOpen(false) }, 20000); setListName(""); }
  console.log(lists)

  return (
    <>
      <Box className={classes.flexContainer}>
        {lists.map((list) => {
          return <SingleList list={list} />
        })
        }
        <Paper className={classes.mainPaper} elevation={0}>
          {open ?
            <Box className={classes.container}>
              <Paper className={classes.addCard}>
                <input
                  type="text"
                  placeholder='Enter List Name...'
                  onChange={(e) => { setListName(e.target.value); }}
                  value={listName}
                  className={classes.input}
                />
                <Button onClick={handleSubmit} variant="contained"> Add</Button>
              </Paper>
            </Box>
            :
            <></>
          }
          <Box className={classes.buttonContainer}>
            <Button onClick={handleClick} className={classes.button} variant="contained">+  Add a List</Button>
            <Button onClick={handleDeleteAll} className={classes.button} variant="contained">+  Delete All List</Button>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Lists
