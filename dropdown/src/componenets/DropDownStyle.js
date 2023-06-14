import { makeStyles } from "tss-react/mui";


export const dropDownStyle = makeStyles()((theme,styles)=>{
    return{
      
      mainContainer:{
        margin:"2rem",
        fontSize:"18px",
      },
      dropContainer:{
        backgroundColor:"pink",
        margin:"0.5rem",
        width:"85px",
        padding:"0.5rem",
        "&:hover":{
            backgroundColor:"red",
            color:"white"
        }
      },
      box:{
        border:"2px solid black",
        width:"120px",
        padding:"0.5rem",
        margin:"-1rem",
      }
    }
})