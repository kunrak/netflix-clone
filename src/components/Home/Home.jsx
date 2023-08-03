import { Box, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    row: {
        padding: "1rem",
        backgroundColor: "black",
        color: "white",
    },
    card: {
        height: "200px",
        margin: "0.3rem",
        transition: 'transform 0.5s',
        '&:hover': {
            transform: 'translateY(-10px)',
        },
    },
    cardBox: {
        display: "flex",
        // justifyContent: 'space-evenly',
        overflowX: 'auto',
    }
});

const Card = ({ img }) => {
    const classes = useStyles();
    return (
        <img className={classes.card} src={img} alt="cover" />
    )
};

const Row = ({ title, arr = [{
    img: "https://media.comicbook.com/2018/03/avengers-infinity-war-poster-1093756.jpeg"
}] }) => {
    const classes = useStyles();
    return (
        <Box className={classes.row}>
            <Typography variant="h5" m={1}>{title}</Typography>

            <Box className={classes.cardBox}>
                {arr.map((item, index) => (
                    <Card img={item.img} key={index} />
                ))}
            </Box>
        </Box>
    )
};

function Home() {
    return (
        <>
            <Box height="20vmax" sx={{ backgroundColor: "black" }}>

            </Box>
            <Row title={"Popular on Netflix"} />
            <Row title={"TV Shows"} />
            <Row title={"Movies"} />
            <Row title={"Recently Added"} />
            <Row title={"My List"} />
        </>
    )
}

export default Home