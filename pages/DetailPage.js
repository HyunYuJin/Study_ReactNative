import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Alert, Share } from 'react-native';
import { useState, useEffect } from 'react';
import * as Linking from 'expo-linking'; // 외부 링크 기능을 위해 불러온다.

export default function DetailPage({ navigation, route }) {
    console.disableYellowBox = true;

    // 로딩화면 또는 초기 값을 설정해두면 데이터가 있기 때문에 오류가 나지 않는다.
    const [tip, setTip] = useState({
        "idx": 9,
        "category": "재테크",
        "title": "렌탈 서비스 금액 비교해보기",
        "image":  "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
        "desc": "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date": "2020.09.09"
    });

    useEffect(()=>{
        console.log(route);

        // Card.js에서 navigation.navigate 함수를 쓸 때 두번째 인자로 content를 넘겨준다.
        // content는 딕셔너리 그 자체 타입으로 route.params에 그대로 남겨온다.
        // 즉, route.params는 content
        navigation.setOptions({
            title: route.params.title,
            // StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있다.
            headerStyle: {
                backgroundColor: '#000000',
                shadowColor: '#000000'
            },
            headerTintColor: '#FFFFFF'
        })

        // 다시 상태 재조정!
        setTip(route.params);
    },[]);

    const popup = () => {
        Alert.alert("팝업!!");
    }

    const share = () => {
        Share.share({
            message: `${tip.title} ${tip.desc} ${tip.image}`,
        });
    }

    const link = () => {
        Linking.openURL('https://github.com/HyunYuJin');
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:tip.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => popup()}>
                        <Text style={styles.buttonText}>팁 찜하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => share()}>
                        <Text style={styles.buttonText}>팁 공유하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => link()}>
                        <Text style={styles.buttonText}>외부 링크</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    },
    image: {
        height: 400,
        margin: 10,
        marginTop: 40,
        borderRadius: 20
    },
    textContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:  {
        fontSize: 20,
        fontWeight: '700',
        color: "#eee"
    },
    desc: {
        marginTop: 10,
        color: "#eee"
    },
    button: {
        width: 100,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'deeppink',
        borderRadius: 7
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: "row"
    }
});