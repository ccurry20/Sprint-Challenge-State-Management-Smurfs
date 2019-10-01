import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurf } from "../smurfAction/index";
import CreateSmurfForm from "./SmurfForm";
import Smurfs from "./Smurf";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <h1>SMURF TOWN</h1>
        </header> 
        {this.props.fetchingSmurfs ? (
          <h3>Hold tight, we're fetching your smurfs...</h3>
        ) : ( 
        <div>
       {this.props.smurfs.map(smurf => {
          return <p
          key={smurf} src={smurf} />;
        })}
        </div>
        )}
        {this.props.error !== "" ? 
        <h4>{this.props.error}</h4> : null}
        <div>Have fun!</div>
        <CreateSmurfForm/>
        <Smurfs/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs, 
    error: state.error, 
    fetchingSmurfs: state.fetchingSmurfs
  };
};



export default connect(mapStateToProps, {fetchSmurf}) (App);
