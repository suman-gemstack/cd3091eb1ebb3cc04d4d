import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { TextField, Button, Grid } from '@material-ui/core';

const API_KEY = "bTXBP3XZsB9Yk4aDsduACQdvjOTq29cOjCoEIhtD";

interface Props extends RouteComponentProps {
  history: any;
}

interface State {
  id: string,
  randomId: string,
  isIdValid: boolean
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: '',
      randomId: '',
      isIdValid: true
    }
  }

  getDetail = (id: any) => {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        this.props.history.push('/asteroid', { data: data })
      })
      .catch((error) => {
        this.setState({ isIdValid: false })
        console.log(error)
      })
  }

  getRandomAsteroid = () => {
    let randomNum = Math.floor(Math.random() * 20);
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      this.getDetail(data.near_earth_objects[randomNum].id)
      console.log(data)
    })
  }


  render() {
    return (
      <div className="App">
        <Grid container spacing={3} direction="column">
          <Grid item>
            <TextField
              value={this.state.id}
              placeholder="Enter Asteroid ID"
              onChange={(e) => this.setState({ id: e.target.value, isIdValid: true })}
            ></TextField>
          </Grid>
          <Grid item> 
            {!this.state.isIdValid &&
              <h4 style={{ color: "red" }}>
                Please enter valid id
               </h4>
            } 
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color= "primary"
              onClick={() => this.getDetail(this.state.id)}
              disabled={this.state.id === ""}
            >Sumbit</Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color= "secondary"
              onClick={() => this.getRandomAsteroid()}
            >
              Random-Asteroid
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(App);
