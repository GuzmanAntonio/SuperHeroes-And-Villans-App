import React, { Component } from 'react'
import Home from './Home'
import Heroes from './Heroes'
import NavBar from './NavBar'
import Villains from './Villains'
import $ from 'jquery'
import CreateHeroContainer from './CreateHeroContainer'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  state = {
    heroes: undefined,
    villains: undefined
  }

  componentDidMount() {
    this.loadHeroesFromServer()
  }

  loadHeroesFromServer = () => {
    $.ajax({
      url: '/api/heroes',
      method: 'GET'
    }).done((response) => {
      this.setState({heroes: response.heroes})
    })
  }

  render(){
    return(
      <Router>
        <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/create-hero' render={() => 
        <CreateHeroContainer loadHeroesFromServer={this.loadHeroesFromServer}/>} />
        {
          this.state.heroes
          ? <Route path='/heroes' render={() => <Heroes heroes={this.state.heroes} />} />
          : 'Your Mom is a Super Hero!'
        }
        </div>
      </Router>
    )
  }
}

export default App