import React,{Component} from 'react';
//			Here this onclick function is to pass the click value to the paretent node from the chiled button element

class ButtonComponent extends Component{
	render(){
		return(
			<div className='buttons'>
					<button value='(' onClick={e=>this.props.onClick(e.target.value)}>(</button>
					<button value='CE' onClick={e=>this.props.onClick(e.target.value)}>CE</button>
					<button value=')' onClick={e=>this.props.onClick(e.target.value)}>)</button>
					<button value='C' onClick={e=>this.props.onClick(e.target.value)}>C</button>
					<br/>
					<button value='1' onClick={e=>this.props.onClick(e.target.value)}>1</button>
					<button value='2' onClick={e=>this.props.onClick(e.target.value)}>2</button>
					<button value='3' onClick={e=>this.props.onClick(e.target.value)}>3</button>
					<button value='+' onClick={e=>this.props.onClick(e.target.value)}>+</button>
					<br/>
					<button value='4' onClick={e=>this.props.onClick(e.target.value)}>4</button>
					<button value='5' onClick={e=>this.props.onClick(e.target.value)}>5</button>
					<button value='6' onClick={e=>this.props.onClick(e.target.value)}>6</button>
					<button value='-' onClick={e=>this.props.onClick(e.target.value)}>-</button>
					<br/>
					<button value='7' onClick={e=>this.props.onClick(e.target.value)}>7</button>
					<button value='8' onClick={e=>this.props.onClick(e.target.value)}>8</button>
					<button value='9' onClick={e=>this.props.onClick(e.target.value)}>9</button>
					<button value='X' onClick={e=>this.props.onClick(e.target.value)}>X</button>
					<br/>
					<button value='.' onClick={e=>this.props.onClick(e.target.value)}>.</button>
					<button value='0' onClick={e=>this.props.onClick(e.target.value)}>0</button>
					<button value='=' onClick={e=>this.props.onClick(e.target.value)}>=</button>
					<button value='/' onClick={e=>this.props.onClick(e.target.value)}>÷</button>
					<br/>

			</div>

			);

		}

	}

export default ButtonComponent;