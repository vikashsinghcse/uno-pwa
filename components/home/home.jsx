import {h, Component} from 'preact';
import './home.css';
import PlayersDeck from '../players-deck/players-deck.jsx';
import Card from '../../base/card';

export default class Home extends Component {
    render(){
      let cards = [];
      for(var i=1; i< 9; i++) {
        cards.push(new Card({
          color: Card.COLOR.GREEN,
          number: i
        }));
      }
			return(
					<div>
							<PlayersDeck cards={cards}/>
					</div>
			);
    }
}
