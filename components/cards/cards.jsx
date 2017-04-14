import {h, Component} from 'preact';
import cx from 'classnames';
import './cards.css';

export default class Cards extends Component {
    render(){
        return(
            <div className="cards">
                <div className={cx("cards__inner","cards__inner--type-" + this.props.card.color)}>
                    <span className="cards__number cards__number-top">
											{this.props.card.number}
										</span>
                    <div className="cards__oval">
                        <span className="cards__number cards_number-center">
													{this.props.card.number}
												</span>
                    </div>
                    <span className="cards__number cards__number-bottom">
											{this.props.card.number}
										</span>
                </div>
            </div>
        );
    }
}