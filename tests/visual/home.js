var React = require('react');
var {Link} = require('react-router');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Index</h2>
        <ul>
          <li><Link to='button'>ButtonLink</Link></li>
          <li><Link to='nav-item'>NavItemLink</Link></li>
          <li><Link to='menu-item'>MenuItemLink</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
