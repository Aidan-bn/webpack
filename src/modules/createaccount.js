const React = require('react');

const CreateAccount = React.createClass({
    render: function(){
        return(
            <div>
                <label htmlFor='username'>Username: 
                <input type='text' id='username' />
                </label>
                <label htmlFor='password'>Password: 
                <input type='text' id='password' />
                </label>
                <label htmlFor='password'>Confirm Password: 
                <input type='text' id='confpassword' />
                </label>
                <button id='signIn' onClick={this.props.onAuthComplete.bind(null, this._createAccount)}>CreateAccount</button>
            </div>
        )
    }
})