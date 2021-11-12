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
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const DebitsComponent = () => (<Debits debits={this.state.debits}/>)
    const CreditsComponent = () => (<Credits credits={this.state.credits}/>)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;