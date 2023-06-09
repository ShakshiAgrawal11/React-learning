import { makeStyles } from "tss-react/mui";


export const listStyle = makeStyles()((theme,styles)=>{
    return{
       container:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"wheat",
        margin:"5rem",
       }
    }
})