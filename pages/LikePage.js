import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LikeCard from '../components/LikeCard';
import { firebase_db } from '../firebaseConfig';
import Constants from 'expo-constants';
import NoLikeList from '../components/NoLikeList';

export default function LikePage({ navigation, route }) {
    const [tip, setTip] = useState([]);
    const [ready, setReady] = useState(true); // 준비 상태 확인하기

    useEffect(() => {
        // 헤더 타이틀
        navigation.setOptions({
            title: '꿀팀 찜'
        });

        setTimeout(() => {
            let user_id = Constants.installationId;
            firebase_db.ref('/like/' + user_id).once('value').then((snapshot) => {
                console.log("파이어베이스에서 데이터 가져왔습니다!!");
                let tip = snapshot.val();
                let tip_list = Object.values(tip);
                console.log(tip_list);

                // list로 데이터가 넘어오기 때문에, 길이 값을 확인하고 처리한다.
                if (tip_list.length) {
                    setTip(tip_list);
                    setReady(false);
                }
            })
        })
    }, []);

    return (
        ready ? <NoLikeList /> : (
            <ScrollView style={styles.container}>
                {
                    tip.map((content, index) => {
                        return (<LikeCard content={content} key={index} navigation={navigation} />)
                    })
                }
            </ScrollView>
        )
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})