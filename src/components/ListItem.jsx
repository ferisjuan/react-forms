// require react
var React = require('react');

// define the ListItem blueprints
var ListItem = React.createClass({
  render(){
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
});

// export the module
module.exports = ListItem;
