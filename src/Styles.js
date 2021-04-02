import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles(() => ({
    title: {
        minWidth: "100%",
        minHeight: "411px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent linear-gradient(180deg, #028D9ADE 0%, #8F749CE6 100%) 0% 0% no-repeat padding-box",
        borderTop: "16px solid #003EAA"
    },
    pageTitle: {
        color: "#FFFFFF",
        font: "normal normal normal 40px/20px Acumin Pro"
    },
    root: {
        minWidth: "100%",
        padding: "0",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    avatar: {
        height: "200px",
        width: "200px",
    },
    container: {
        width: "100%",
        margin: "0 auto",
        backgroundColor: "#5D00A5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    Card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "262px",
        height: "182px",
        top: "-40px",
        background: "transparent linear-gradient(180deg, #D793DAAB 0%, #1D7FBB 100%) 0% 0% no-repeat padding-box",
        zIndex: "2",
        marginBottom: "50px",
    },
    cardTitle: {
        color: "#FFFFFF",
        font: "normal normal normal 18px/20px Acumin Pro;"
    }
}));


export default useStyle;