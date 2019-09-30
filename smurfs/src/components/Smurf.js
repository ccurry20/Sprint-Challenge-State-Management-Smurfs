import React from "react";
import {connect} from "react-redux";
import {fetchSmurf} from "../smurfAction/index";

class Smurfs extends React.Component {
    render() {
      return (
          <div>
               {this.props.smurfs.map(smurf => {
          return <p
          key={smurf} src={smurf} />;
        })}
              {this.props.smurfs.map(smurf =>
              <div>
                  <h1>{smurf.name}</h1>
                  <h3>{smurf.age}</h3>
                  <h3>{smurf.height}</h3>
                  </div>
                )}
          </div>
      );
              }
            }

const mapStateToProps =(state) => {
    return {
        smurfs:state.smurfs, 
        fetchingSmurfs: state.fetchingSmurfs
    };
};
export default connect(mapStateToProps, {fetchSmurf}) (Smurfs);