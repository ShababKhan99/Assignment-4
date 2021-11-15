import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Debits from './components/Debits'
import Credits from './components/Credits'
import UserProfile from './components/UserProfile';
import LogIn from './components/Login'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  // API CALL
  componentDidMount() {
    fetch('https://moj-api.herokuapp.com/credits')
      .then(res => res.json())
      .then(json => {
        this.setState({
            credits: json,
        })
      });

    fetch('https://moj-api.herokuapp.com/debits')
          .then(res => res.json())
          .then(json => {
            this.setState({
                debits: json,
            })
          });
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  dynamicBalance = () => {
    const balance = 0;
    this.state.debits.map(debit => (
      balance -= debit.amount
    ))
    this.state.debits.map(credit => (
      balance += credit.amount
    ))
    this.setState({accountBalance: balance});
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} debits={this.state.debits} credits={this.state.credits}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const DebitsComponent = () => (<Debits debits={this.state.debits} accountBalance={this.state.accountBalance}/>)
    const CreditsComponent = () => (<Credits credits={this.state.credits} accountBalance={this.state.accountBalance}/>)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
            <Route exact path="/Login" render={LogInComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;