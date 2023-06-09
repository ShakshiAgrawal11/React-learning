import { makeStyles } from "tss-react/mui";


export const windowStyle = makeStyles()((theme,styles)=>{
    return{
        mainContainer:{
            margin:"3px",
            backgroundColor:"pink",
            width:"500px",
            margin:"2rem",
            padding:"1rem"
        },
        eachContainer:{
            fontSize:"20px",
            margin:"2rem"
        },
        heading:{
            fontWeight:"bold",
            color:"purple"
        },
        content:{
            color:"blue"
        }
    }
})