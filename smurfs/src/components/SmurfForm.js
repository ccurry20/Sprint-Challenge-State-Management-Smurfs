import React from "react";
import {connect} from "react-redux";
import { addNewSmurf } from "../smurfAction/index";

class CreateSmurfForm extends React.Component {
    state = {
        name: '', 
        age: '', 
        height: '',
    };

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleAddNew = (event) => {
        event.preventDefault(); 

        const smurf = this.state;
        this.props.addNewSmurf(smurf);
        this.setState({name:'', age:'', height:''});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddNew}>
                    <input name ='name' value={this.state.name} type="text" onChange={this.handleInput} placeholder="Name"/>
                    <input name ='age' value={this.state.age} type="number" onChange={this.handleInput} placeholder="Age"/>
                    <input name ='height' value={this.state.height} type="text" onChange={this.handleInput} placeholder="Height"/>
                    <button type="submit">Add New Smurf</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});
export default connect(mapStateToProps, {addNewSmurf}) (CreateSmurfForm);