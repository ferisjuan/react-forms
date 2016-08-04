var React = require('react');
const EmailField = require('./EmailField.jsx');
const NameField = require('./NameField.jsx')

var LeadCapture = React.createClass({
  onSubmit(e){
    if(!this.refs.fieldEmail.state.valid){
      alert("fill email value")
    }else{
      console.log("got it");
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };
      this.refs.fieldName.clear();
      this.refs.fieldEmail.clear();
    }
  },
  render(){
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">

            <NameField type="First" ref="fieldName" /><br />
            <EmailField ref="fieldEmail" />

            <button className="btn btn-primary"
            onClick={this.onSubmit}
            >Submit</button>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
