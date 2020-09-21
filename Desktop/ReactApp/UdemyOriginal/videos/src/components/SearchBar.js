import React, { Component } from 'react'

 class SearchBar extends Component {
     state={
         term:''
     };
     onInputChage = (event) => {
            this.setState({term:event.target.value});
     };
     onFormSubmit = event =>{
        event.preventDefault();
        //Make sure we call
        //callback from parent component
        this.props.onFormSubmit(this.state.term);
     };
    render() {
        return (
            <div className="search-bar ui segment">
              <form onSubmit={this.onFormSubmit}  className="ui form">
                <div className="field">
                <label>Youtube Video Search Online</label>
                <input 
                type="text"
                value={this.state.term}
                onChange={this.onInputChage}
                />
                </div>
              </form>
            </div>
        )
    }
}

export default SearchBar;