import React, { useEffect } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { AdMobInterstitial } from 'expo-ads-admob';

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({ content, navigation }) {
    useEffect(()=>{
        // Card.js에 들어오자마자 전면 광고 준비하느라 useEffect에 설정
        // 애드몹도 외부 API 이므로 실행 순서를 지키기위해 async/await 사용!
        // 안드로이드와 IOS 각각 광고 준비 키가 다르기 때문에 디바이스 성격에 따라 다르게 초기화 시켜주기
        Platform.OS === 'ios' ? AdMobInterstitial.setAdUnitID("ca-app-pub-7330086029556335/9906716315") : AdMobInterstitial.setAdUnitID("ca-app-pub-7330086029556335/2940663345")

        AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
            // 광고를 로드할 때
            console.log("interstitialDidLoad")
        );
        AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
            // 광고 로드 실패
            console.log("interstitialDidFailToLoad")
        );
        AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
            console.log("interstitialDidOpen")
        );
        AdMobInterstitial.addEventListener("interstitialDidClose", () => {
            // 광고가 끝나면 다음 코드 줄이 실행!
            console.log("interstitialDidClose")
            navigation.navigate('DetailPage',{idx:content.idx})
        });
    },[]);

    const goDetail = async () =>{
      // 광고 켜기!
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
      await AdMobInterstitial.showAdAsync();
    }

    return (
        <TouchableOpacity style={styles.card} onPress={()=>{goDetail()}}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
            <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
            <Text style={styles.cardDate}>{content.date}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10

  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15
  },
  cardDate: {
    fontSize:10,
    color:"#A6A6A6",
  }
});