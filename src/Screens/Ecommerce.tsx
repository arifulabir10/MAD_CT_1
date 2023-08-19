import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const Ecommerce = () => {
  return (
        <SafeAreaView>
            
            <View style={styles.mainContainer}>
            <Text style={styles.title}>
                Ecommerce
                </Text>

                <View style={styles.cartItem}>
                    <Text style={styles.productName}>Tide Powder</Text>
                    <Text style={styles.productCategory}>Washing powder</Text>
                    <Text style={styles.productWeight}>800gm</Text>
                    <Button title="Add to cart"/>
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
        fontSize: 30,
        fontWeight: "bold",
        margin: 40,

    },
    cartItem: {
        height: 100,
        width: 350,
        backgroundColor: "skyblue",
        margin: 8,
    },
    productName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    productCategory: {
        fontSize: 15,
        color: "grey"
    },
    productWeight: {
        fontSize: 15,
        color: "grey"
    }
})
export default Ecommerce;