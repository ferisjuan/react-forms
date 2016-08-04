// require react
var React = require('react');

// require the ListItem from ListItem.jsx
var ListItem = require('./ListItem.jsx');

// Define an array with some objects for the props of the ListItems in the List
var ingredients = [{id: 1, text: 'ham'}, {id:2, text: 'cheese'}, {id:3, text:'potatoes'}];

// make the list
var List = React.createClass({
  render(){
    var ListItems = ingredients.map(function (item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{ListItems}</ul>);
  }
});

// export the module
module.exports = List;
