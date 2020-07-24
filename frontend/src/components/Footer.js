import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction, Container } from '@material-ui/core';
import { LocalActivity, ContactMail, Home } from '@material-ui/icons';

export default class Footer extends Component {
    render() {
        return (
            <Container maxWidth="lg">
            <BottomNavigation>
                <BottomNavigationAction label="Nearby" icon={<LocalActivity/>}/>
                <BottomNavigationAction label="Nearby" icon={<Home/>}/>
                <BottomNavigationAction label="Nearby" icon={<ContactMail/>}/>
            </BottomNavigation>
            </Container>
        )
    }
}
