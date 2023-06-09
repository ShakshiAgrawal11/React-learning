import { makeStyles } from "tss-react/mui";


export const showStyle = makeStyles()((theme,styles)=>{
    return{
       container:{
        backgroundColor:"pink",
        margin:".5rem",
        padding:"0.5rem",
        fontSize:"20px",
        fontWeight:"bold",
        display:"flex",

       },
       icon:{
        position:"absolute",
        right:"10rem"
       },
       edit:{
        position:"absolute",
        right:"12rem"
       }
      
    }
})