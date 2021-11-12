import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
    constructor(props){
        super(props);
        this.state = {
            debits: [],
        }
    }
    
    componentDidMount() {
        fetch('https://moj-api.herokuapp.com/debits')
          .then(res => res.json())
          .then(json => {
            this.setState({
                debits: json,
            })
          });
    }
    
    render() {
      
        var { debits } = this.state;

        return (
            <>
            <div>
              <h1>Debits</h1>
    
              <div>
                  <ul>
                      {debits.map(item => (
                            <li key={item.id}>
                                {item.description} | ${item.amount}
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