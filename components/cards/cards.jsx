import {h, Component} from 'preact';
import './cards.css';

export default class Cards extends Component {
    render(){
        return(
            <div className="cards">
                <div className="cards__inner">
                    <span className="cards__number cards__number-top">5</span>
                    <div className="cards__oval">
                        <span className="cards__number cards_number-center">5</span>
                    </div>
                    <span className="cards__number cards__number-bottom">5</span>
                </div>
            </div>
        );
    }
}