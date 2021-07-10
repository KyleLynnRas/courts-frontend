import React from 'react'
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'

export default function Index() {
    return (
       <SafeAreaView style={styles.screenContainer}>
           <View>
               <Text>INDEX SCREEN</Text>
           </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    }
})

