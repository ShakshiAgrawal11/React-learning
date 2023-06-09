import { makeStyles } from "tss-react/mui";


export const modalStyle = makeStyles()((theme,styles)=>{
    return{
        colorBox:{
            width:"5rem",
            height:"2rem",
            backgroundColor:"lightgreen"
        },
        boxContainer:{
            //backgroundColor:"red",
            display:"flex",
            gap:"6px",
            height:"40px",
            alignItems: "center",
            justifyContent: "flexStart",
        }
    }
})