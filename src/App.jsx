import React from 'react';
import {Typography, Avatar, Container, CssBaseline, Card, CardContent, Grid,} from '@material-ui/core';
import useStyle from './Styles'

var data = require('./data.json');
const App = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <Container variant = "md" className = {classes.title}>
                <Typography variant = "h4" className = {classes.pageTitle}>
                    Meet The Team
                </Typography>
            </Container>
            <Container  className = {classes.root}>
                <Grid container spacing= "10" className = {classes.container}>
                    {data.map((data) => (
                        <Grid item className = {classes.item} xs = "12" sm = "6" md = "3">
                            <Avatar alt = "first" src = {data.image} className= {classes.avatar}/>
                            <Card variant = "elevation" className = {classes.Card}>
                                <CardContent>
                                    <Typography variant = "h6" gutterBottom align = "center" className = {classes.cardTitle}>
                                        {data.name}
                                    </Typography>
                                    <Typography variant = "h6" gutterBottom align = "center" className={classes.cardTitle}>
                                        {data.post}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default App;