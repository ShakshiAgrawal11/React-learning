import { makeStyles } from "tss-react/mui";


export const singleListStyle = makeStyles()((theme, styles) => {
    return {
        mainContainer: {
            margin: "2rem",
            //borderRadius: "25px",
            height:"87vh",
            width: "15.5rem",
            //backgroundColor: "blue",
            //border: "2px solid blue",
            display:"flex",
            overflowX:"hidden"

        },

        heading: {
            color: "white",
            fontWeight: "bold",
            //borderRadius: "25px",
            padding: "6px",
            background: "#3468FA",
            fontSize: "1rem",
            height: "1.7rem",
            leftMargin: "7rem"
        },

        button: {
            width: "15rem",
            color: "blue"
        },

        cardContainer: {
            width: "15rem",
            backgroundColor: "white",
            marginBottom: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"



        },
        input: {
            width: "13rem",
            color: "blue",
            fontSize: "17px",
            leftMargin: "4px"
        },
        addCard: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "3px"
        }

    }
})