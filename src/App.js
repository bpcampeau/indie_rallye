import React, { Component } from 'react';

import SelectionZone from './components/selection_zone';
import PersonalInfo from './components/info_perso';
import Favorite from './components/crowd-favorite';
import {zoneList, fieldList} from './services/content/fr';
import {indies} from './services/content/';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state= {active: ''}
  }

  setActive() {
    this.setState({
      active: 'active'
    })
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">
              <SelectionZone title="Quel zone as-tu visité?" zones={zoneList} activeAction={()=>{this.setActive()}} />
              <hr/>
              <PersonalInfo title="Tes infos" fields={fieldList} />
              <hr/>
              <Favorite title='Vote pour ton jeu favoris de la zone!' active={this.state.active} id="indie_favorite" indieList={indies} />
              <button className="btn btn-primary">Envoyer</button>
          </div>
          <div className="col-md-2">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default App;
