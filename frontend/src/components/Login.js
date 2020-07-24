import React, { Component } from 'react';
import { Container, Button, Input, FormGroup, FormControl, FormHelperText, InputLabel } from '@material-ui/core';


export default class Login extends Component {

    state = {
        name: '',
        lastname: '',
        email: ''
      }
    
      handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const lastname = target.lastname;
        const value = target.value;
    
        this.setState({
          [name]: value,
          [lastname]: value
        })
      };

  
      render() {
        console.log('state: ', this.state)
        return (
    
          <Container maxWidth="md"> 
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: 20,
                padding: 20,
                paddingTop: 50
              }}
            >
              <FormGroup style={{ 
                  width: "50%",
                  marginTop: "10%"
                                    }}>
                <FormControl>
                  <InputLabel>Name</InputLabel>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="insert name"
                    aria-describedby="name"
                    onChange={this.handleChange}
                  />
                  <FormHelperText id="name">Insert your name please</FormHelperText>
    
                </FormControl>
    
                <FormControl>
                  <InputLabel>Lastname</InputLabel>
                  <Input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    placeholder="insert lastname"
                    aria-describedby="lastname"
    
                    onChange={this.handleChange}
                  />
                  <FormHelperText id="lastname">Insert your lastname please</FormHelperText>
                </FormControl>
    
                <Button type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: 50
                  }}
                >
                  Send Data
                    </Button>
              </FormGroup>
            </div>
          </Container>
    
        )
      }
}
