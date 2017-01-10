import React from 'react';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {

    constructor() {

        super();

        this.user = '3076';
        this.password = 'edson2009';

        this.state = {
            user: '3076',
            password: 'edson2009'
        };

    }

    handleChangeUser(e) {
        this.setState({ user: e.target.value });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    doLogin(e) {

        console.log(this.state.user + ' ' + this.state.password);

        if (this.state.user == '') {
            alert('Usuário não informado!');
            return;
        }

        if (this.state.password == '') {
            alert('Senha não informada!')
            return;
        }

        if (this.state.user != this.user) {
            alert('Usuário não encontrado!')
            return;
        }

        if (this.state.password != this.password) {
            alert('Senha informada incorreta!')
            return;
        }

        alert('Login realizado com sucesso!');


    }

    render() {

        return (

            <div>
                
                <TextField hintText="Usuário" floatingLabelText="Usuário"/>
                
                <TextField hintText="Senha" floatingLabelText="Senha" type="password"/>
                
            </div>

        );

    }
}