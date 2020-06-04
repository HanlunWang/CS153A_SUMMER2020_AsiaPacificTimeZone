import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';
import MovieList from './containers/MovieList';
import ClassList from './containers/ClassList';

import movieData from '../assets/data.js'
import classData from '../assets/classes.js'


const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Brandeis Computer Science Summer Class List</h1>
    <p>This is the list for all Brandeis cosi classes summer 2020.</p>
    </div>

    <ClassList data={classData} name="List of Classes" />
    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Class List</h1>
      </nav>

      <CardList data={classData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
