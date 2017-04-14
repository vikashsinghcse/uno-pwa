import {h, Component} from 'preact';
import cx from 'classnames';
import './players-deck.css';
import Cards from '../cards/cards.jsx';

export default class PlayersDeck extends Component {
    render(){
      let degree = 10;
      if (this.props.cards.length > 18) {
        degree = 2.5;
      }
      else if (this.props.cards.length > 9){
        degree = 5;
      }
        return(
            <div className = 'deck' style={"transform: rotateZ(-"+(degree/2)*this.props.cards.length+"deg)"}>
              {this.props.cards.map((card, index)=>{
                return (<Cards style={"transform: rotateZ("+(degree*index)+"deg) translateX("+index*15+"px);"} card={card} />);
              })}
            </div>
        );
    }
}
