import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

export default class Header extends Component {
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Ebay Killer</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Log in</a>
              <a class="nav-item nav-link" href="#">Register</a>
              <a class="nav-item nav-link" href="#">My cart</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
