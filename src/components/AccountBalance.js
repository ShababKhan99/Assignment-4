import React, {Component} from 'react';
import Debits from './Debits'
import Credits from './Credits'

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;