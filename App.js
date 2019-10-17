import React from 'react';
import { connect } from 'react-redux';

import './App.scss';
import { formJson } from './utils/form';

class App extends React.Component {

  actionTabHandler = () => {
    console.log('here')
  }

  render() {
    const obj = formJson.individual;

    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4 text-left">
            <div className="tabs">
              {Object.keys(obj).map( (value, index) => {
                return (
                  <div className="tab" key={index}>
                    <div className="heading">{value}</div>
                    <div className="subHeadings">
                      {Object.keys(obj[value].sections).map( (value, j) => {
                        return (
                          <a href="http://google.com" key={j+1}>{value}</a>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>            
          </div>
          <div className="col-md-8 text-left">
            
            {Object.keys(obj.one.sections).map( (value, index) => {
              return (
                <div key={index} className="block">
                  <h2>{value}</h2>
                  {Object.keys(obj.one.sections[value].formData).map( (value1, j) => {
                        return (
                          <div className="row">
                            {12/Object.keys(obj.one.sections[value].formData[value1]).length}
                          </div>
                        )
                      })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }  
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}
export default connect(mapStateToProps)(App);
