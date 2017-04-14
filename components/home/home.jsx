import {h, Component} from 'preact';
import './home.css';
import Cards from '../cards/cards.jsx';

export default class Home extends Component {
    render(){
			const card = {
				color: 'yellow',
				number: 2,
				type: 'number'
			};
			return(
					<div>
							<Cards card={card}/>
					</div>
			);
    }
}