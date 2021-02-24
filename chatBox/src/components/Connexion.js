import React from 'react';
import {PropTypes} from 'prop-types';

class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault();
        const pseudo = this.pseudoInput.value;
        this.props.history.push(`/pseudo/${pseudo}`);
    };

    render() {
        return (
            <div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required ref={input => {this.pseudoInput = input}}/>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        )
    }

    static contextTypes = {
        router: PropTypes.object
    }
}

export default Connexion;