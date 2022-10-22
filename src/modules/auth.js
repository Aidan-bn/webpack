const React = require(react);
const SignIn = require('./signin.js');
const CreateAccount = require('./createaccount.js');

const Authentication = React.createClass({
    render function(){
        return(
            <div>
                <SignIn onAuthComplete = {this.props.onAuthComplete} />
                <CreateAccount onAuthComplete={this.props.onAuthComplete} />
            </div>
        );
    }
})

module.exports = Authentication;