import {h, Component} from 'preact';
import './home.css';
import Cards from '../cards/cards.jsx';

export default class Home extends Component {
    render(){
        return(
            <div>
                <Cards/>
            </div>
        );
    }
}