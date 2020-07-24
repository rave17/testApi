
import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Container, Button, Input, FormGroup, FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import axios from 'axios';

/* const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
})); 
*/

const getData = ()=>{
  axios.get('http://localhost:4000/auth-v1/api/all')
    .then((res) => {
      const responseData = res.data;
      this.setState({ info: responseData })
      console.log('data received');
    })
    .catch((err) => {
      console.log(`error getting data ${err}`);
    });
  }
getData();

export default class App extends Component {

  render(){
    return(
        <div>hola
        </div>
      )
}
};

