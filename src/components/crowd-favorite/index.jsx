import React, {Component} from 'react';
import './style.css';

class Favorite extends Component {
    constructor(props) {
        super(props);

        this.state = {active: false};
    }

    componentWillReceiveProps() {
        this.setState({active: this.props.active})
    }

    render() {
        const {
            active,
            id,
            title,
            indieList,
        } = this.props;

        return(
            <div className={`form-group favorites ${active}`}>
                <h2>{title}</h2>
                <div class="form-group">
                    <select className="form-control" id={id} >
                    <option></option>
                        {indieList.map((indie) => {
                            return(<option value={indie.name}>{indie.name}</option>)
                        })}
                    </select>
                </div>
            </div>
        )
    }
}

export default Favorite;