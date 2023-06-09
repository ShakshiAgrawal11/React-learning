import { makeStyles } from "tss-react/mui";


export const listStyle = makeStyles()((theme,styles)=>{
    return{
        flexContainer:{
            display:"flex",
            height:"auto",
            width:"100vw",
            backgroundColor:"wheat",
            height:"90.5vh",
            overflow: "hidden"    
        },
        addContainer:{
            //margin:"2rem",
            display:"absolute",
            top:"2.5rem",
            backgroundColor:"blue",
            color:"white",
            width:"15rem",
            "&:hover":{
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            }
        },
        button:{
            width:"15rem",
            colo:"blue"
         },
         input:{
            width:"10rem",
            color:"blue",
            fontSize:"14px",
            leftMargin:"4px"
           },
         addCard:{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"5px",
            top:"10rem",
            backgroundColor:"wheat"
           },
        container:{
            // display:"absolute",
            // top:"10rem",
            // left:"-1rem",
            // margin:"1rem"
            marginBottom:"1rem",
            marginLeft:"1rem"
        },
        mainPaper:{
            backgroundColor: "wheat",
            marginTop: "40px",
            dispaly:"flex",
            justifyContent:"center"
        },
        buttonContainer:{
            display:"flex",
            flexDirection:"column",
            gap:"7px",
            marginLeft:"1rem"
        }
       
    }
})