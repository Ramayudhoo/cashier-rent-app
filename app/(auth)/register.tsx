import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/login');
      //Redirect ke homescreen

    } catch (error:any ){
      setError (error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Link href="/login">
        <Text style={styles.link}>Already have an account? Login</Text>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8FAFC',
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#0e141b',
      textAlign: 'center',
      marginBottom: 32,
    },
    error: {
      color: 'red',
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      fontSize: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    button: {
      backgroundColor: '#1979e6',
      paddingVertical: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 16,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    link: {
      marginTop: 16,
      textAlign: 'center',
      color: '#1979e6',
    },
    linkButton: {
      alignItems: 'center',
    },
    linkButtonText: {
      fontSize: 14,
      color: '#1979e6',
      fontWeight: 'bold',
    },
  });
  
  export default RegisterScreen;