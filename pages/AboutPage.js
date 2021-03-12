import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AboutImage from '../assets/aboutImage.png';

export default function AboutPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.intro}>HELLO! THIS IS HYEON YU JIN, WELCOME TO THE PET TIP PAGE!</Text>
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
        backgroundColor: '#1835D0',
        paddingTop: 50
    },
    intro: {
        color: "#FFF",
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 50
    },
    innerContainer: {
        width: "90%",
        height: "70%",
        backgroundColor: "#FFF",
        alignSelf: "center",
        borderRadius: 20,
    },
    aboutImage: {
        width: 150,
        height: 150,
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 100
    },
    innerTitle: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        margin: 10
    },
    innerContent: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center"
    },
    Button: {
        width: 150,
        backgroundColor: "#fdc453",
        padding: 20,
        marginTop: 30,
        borderRadius: 10,
        alignSelf: "center"
    },
    ButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
    }
})