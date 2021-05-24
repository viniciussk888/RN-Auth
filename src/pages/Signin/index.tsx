import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useAuth } from '../../contexts/auth';

import { styles } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <TextInput placeholder="Insira o e-mail..." style={styles.input} />
      <TextInput placeholder="Insira a senha..." style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
