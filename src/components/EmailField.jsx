const React = require('react');
const validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState(){
    return {valid: true, value: ""};
  },
  onChange(e){
    var val = e.target.value;
    if(!validator.validate(e.target.value)){
      this.setState({valid:false, value: e.target.value});
    }else{
      this.setState({valid: true, value:e.target.value});
    }
  },
  render(){
    var formClass = this.state.valid ? "form-group" : "form-group has-error";
    console.log(formClass);
    return(
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email"
        value={this.state.value}
        />
      </div>
    );
  }
});

module.exports = EmailField;
