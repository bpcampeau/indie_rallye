import React, { Component } from 'react';
import axios from 'axios';

import SelectionZone from './components/selection_zone';
import PersonalInfo from './components/info_perso';
import Favorite from './components/crowd-favorite';
import {zoneList, fieldList} from './services/content/fr';
import {indies} from './services/content/';


import './App.css';
import './pretty-checkbox.css';

class App extends Component {

  constructor() {
    super();

    this.state= {
      active: '',
      formHidden: '',
      successHidden: 'hidden'
    }
  }

  setActive() {
    this.setState({
      active: 'active'
    })
  }

  submitForm() {
    axios.post('http://localhost:8080/api/entry', {
      indie_zone: document.getElementById('indie_zone').checked,
      indie_village: document.getElementById('indie_village').checked,
      name: document.getElementById('name').value,
      lastName: document.getElementById('lastName').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      favorite: document.getElementById('indie_favorite').value,
      email_consent: document.getElementById('consent').checked
    }).then(()=>{
      this.setState({
        formHidden: 'hidden',
        successHidden: ''
      })
    })
  }

  render() {

    return (
      <React.Fragment>
      <div id="form" className={`container ${this.state.formHidden}`}>
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">
              <SelectionZone title="Quel zone as-tu visité? / Which zone did you visit" zones={zoneList} activeAction={()=>{this.setActive()}} />
              <hr/>
              <PersonalInfo title="Tes infos / Your infos" fields={fieldList} />
              <hr/>
              <Favorite title='Vote pour ton jeu favoris de la zone! / Vote for your favourite game!' active={this.state.active} id="indie_favorite" indieList={indies} />
              <div className="form-group">
                <div class="form-check pretty p-icon p-curve p-jelly">
                    <input type="checkbox" className="form-check-input" id='consent' />
                    <div class="state p-primary">
                        <i className='icon fa fa-check'></i>
                        <label className="form-check-label consentLabel" for="consent">
                          Je suis intéressé de recevoir des nouvelles de Multijoueur via courriel / <br/>
                          I am interested in receiveing news from Multijoueur by email (French only)
                        </label>
                    </div>
                </div>              
              </div>
              <button className="btn btn-primary" onClick={()=>{this.submitForm()}}>Envoyer</button>
          </div>
          <div className="col-md-2">&nbsp;</div>
        </div>
      </div>
      <div id="thanks" className={`container ${this.state.successHidden}`}>
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">
            <h2>MERCI! Repasse à 17h <strong>AUJOURD'HUI</strong> pour savoir si tu es LE grand gagnant</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Thanks! Comeback at 5PM <strong>TODAY</strong> to know if you're the big big winner!</h2>
          </div>
          <div className="col-md-2">&nbsp;</div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
