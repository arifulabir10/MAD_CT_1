import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Ecommerce = () => {
  return (
        <SafeAreaView>
            
            <View style={styles.mainContainer}>
            <Text style={styles.title}>
                Ecommerce

                </Text>

            </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        

    }
})
export default Ecommerce