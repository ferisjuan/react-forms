var React = require('react');

var NameField = React.createClass({
  getInitialState(){
    return {value: ""};
  },
  onChange(e){
    this.setState({value: e.target.value})
  },
  clear(){
    this.setState({valid:"true", value:''})
  },
  render(){
    return(
      <input className="form-control"
      placeholder={this.props.type + "Name"}
      onChange={this.onChange}
      value={this.state.value}
       />
    );
  }
});

module.exports = NameField;
