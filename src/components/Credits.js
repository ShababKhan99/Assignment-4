import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
    constructor(props){
        super(props);
        this.state = {
            credits: [],
        }
    }
    
    componentDidMount() {
        fetch('https://moj-api.herokuapp.com/credits')
          .then(res => res.json())
          .then(json => {
            this.setState({
                credits: json,
            })
          });
    }

    function 
    
    render() {
      
        var { credits } = this.state;

        return (
            <>
            <div>
              <h1>Credits</h1>
    
              <div>
                  <ul>
                      {credits.map(item => (
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

export default Credits;