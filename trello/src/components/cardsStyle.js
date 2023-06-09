import { makeStyles } from "tss-react/mui";


export const cardStyle = makeStyles()((theme,styles)=>{
    return{
        cardContainer:{
           
            width:"15rem",
            backgroundColor:"pink",
            //marginBottom:"1px",
            "&:hover":{
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            },
           // marginTop:"0.25rem"
        },
       text:{
        leftMargin:"2px"
       }
    }
})