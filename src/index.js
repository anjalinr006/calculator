import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';
//Export the componenet from buttoncomponent file
import ButtonComponent from './Buttoncomponent.js'


class Lastcomponent extends React.Component{

	constructor(){
	super();
	this.state={
		result:''
	}

	}
//Initialising the onclick function here ...and we
//get the value in the btton variable

    onClick = button => {

        if(button === "="){

            this.calculate
        }

        else if(button === "CE"){
				console.log('Backspace Function')
        }

        else if(button === "C"){
			console.log('Clear Function')
        }
        else{
			console.log('Calculate the value')
			this.setState({result:this.state.result+button})
        }
    }


render(){
			console.log(this.state.result)

	return(
//Linking the child Button click functio to the parant node
<div className='calculator_body'>
	<p>{this.state.result}</p>
	<ButtonComponent onClick={this.onClick} />
</div>
	);



}





}


ReactDOM.render(
 < Lastcomponent />,
  document.getElementById('root')
);
