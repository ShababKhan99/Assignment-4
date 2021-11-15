import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {
    render() {
        return (
            <>
            <div>
              <h1>Credits</h1>
              <div>
                  <ul>
                      {this.props.credits.map(item => (
                            <li key={item.id}>
                                {item.date} | {item.description} | ${item.amount}
                            </li>
                      ))}
                  </ul>
              </div>
            </div>
            
            <AccountBalance accountBalance={this.props.accountBalance}/>

            <br></br>

            <Link to="/">Return to Home</Link>
            </>  
      );
    }
}

export default Credits;