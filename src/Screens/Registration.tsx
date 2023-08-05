import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Registration = () => {
  return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Create Account</Text>
                <View>
                    <TextInput placeholder='Name' style={styles.textField}></TextInput>
                    <TextInput placeholder='Email'style={styles.textField}></TextInput>
                    <TextInput placeholder='Password' style={styles.textField}></TextInput>
                    <Button title="SIGN UP"/>
                    <View>
                    <Text> Already have an account? </Text>
                    
        <Text style={styles.loginButton}>LOGIN</Text>
                    </View>
                    
                </View>
                
            </View>
        </SafeAreaView>    
  );
};
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
   
        fontSize: 20,
        color:"purple",
        fontWeight:"bold",
    },
    buttonDiv: {
        backgroundColor: "green",
        padding: 15,
        paddingRight: 50,
        paddingLeft: 50,
      },
      loginButton: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },
      textField: {
        paddingRight: 20,
        paddingLeft: 20,
        borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    padding: 8,
    margin: 10
      }

})

export default Registration;