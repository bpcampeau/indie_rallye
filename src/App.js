import React, { Component } from 'react';
import axios from 'axios';

import SelectionZone from './components/selection_zone';
import PersonalInfo from './components/info_perso';
import Favorite from './components/crowd-favorite';
import Draw from './components/draw';
import {zoneList, fieldList} from './services/content/fr';
import {indies} from './services/content/';


import './App.css';
import './pretty-checkbox.css';

const router = 'http://localhost:8080/api/entry';

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
    axios.post(router, {
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
      <div id="form" className={`container boxybox ${this.state.formHidden}`}>
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">
              <header><img src="./indierally.png" /></header>

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
      <div id="thanks" className={`container boxybox ${this.state.successHidden}`}>
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">
            <header><img src="./indierally.png" /></header>
            <h2>MERCI! Le gagnant sera annoncer à 17h sur notre page Facebook!</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Thanks! Our winner will be announced on our facebook page at 5pm!</h2>
          </div>
          <div className="col-md-2">&nbsp;</div>
        </div>
      </div>
      <Draw route={router} />
      </React.Fragment>
    );
  }
}

export default App;
