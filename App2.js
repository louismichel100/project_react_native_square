import React, {Component} from 'react';

export default class Login1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    onLogin() {
        const { email, password } = this.state;
        alert('Credentials', `${email} + ${password}`);
    }

    handleChange1(text) {
        this.setState({email: text});
    }
    handleChange2(text) {
        this.setState({password: text});
    }

    render () {
        const {email, password} = this.state;
        return (
            <View style={styles.container}>
              <View style={styles.form}>
                <Title>Connectez-vous</Title>
                <TextInput
                  style={{ backgroundColor: '#f8f8ff' }}
                  value={email}
                  onChangeText={this.handleChange}
                  label="Adresse email"
                  mode="outlined"
                />
                <TextInput
                  style={{
                    backgroundColor: '#f8f8ff',
                  }}
                  value={password}
                  onChangeText={this.handleChange}
                  label="Mot de passe"
                  mode="outlined"
                  secureTextEntry
                />
                <Button
                  mode="outlined"
                  onPress={() => this.onLogin}
                  style={{ marginTop: '5%', marginHorizontal: '25%' }}
                >
                  Connexion
                </Button>
              </View>
            </View>
          );
    }
}

