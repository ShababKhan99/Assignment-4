import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
    render() {
        return (
            <>
            <div>
              <h1>Debits</h1>
              <div>
                  <ul>
                      {this.props.debits.map(item => (
                            <li key={item.id}>
                                {item.date} | {item.description} | ${item.amount}
                            </li>
                      ))}
                  </ul>
              </div>
            </div>
    
            <Link to="/">Return to Home</Link>
            </>  
      );
    }
}

export default Debits;