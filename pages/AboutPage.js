import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AboutImage from '../assets/aboutImage.png';

export default function AboutPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.intro}>HELLO! THIS IS YU JIN, WELCOME TO THE PET TIP PAGE!</Text>

            <View style={styles.innerContainer}>
                <Image style={styles.aboutImage} source={AboutImage} />
                <Text style={styles.innerTitle}>Do you have any questions while raising a pet dog?</Text>
                <Text style={styles.innerContent}>Please refer to our tips for dogs!</Text>

                <TouchableOpacity style={styles.Button}><Text style={styles.ButtonText}>여러분의 인스타계정</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F266A',
        alignItems: "center"
    },
    intro: {
        color: "#FFF",
        fontSize: 30,
        fontWeight: "700",
        paddingLeft: 30,
        paddingTop: 100,
        paddingRight: 30
    },
    innerContainer: {
        width: 300,
        height: 500,
        backgroundColor: "#FFF",
        marginTop: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    aboutImage: {
        width: 150,
        height: 150,
        borderRadius: 30
    },
    innerTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        paddingLeft: 22,
        paddingRight: 22
    },
    innerContent: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "700",
        padding: 22
    },
    Button: {
        backgroundColor: "orange",
        padding: 20,
        borderRadius: 15
    },
    ButtonText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "700"
    }
})