import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제하기
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
// 파이어베이스 연결정보
const firebaseConfig = {
    apiKey: "AIzaSyDV49bI6Rjy1VtC7Cn2_5ycwb2Jidz81ME",
    authDomain: "yujinhonytip.firebaseapp.com",
    databaseURL: "https://yujinhonytip-default-rtdb.firebaseio.com/",
    projectId: "yujinhonytip",
    storageBucket: "yujinhonytip.appspot.com",
    messagingSenderId: "440678223209",
    appId: "1:440678223209:web:1182870f94e9f847c841f8",
    measurementId: "G-P9713EBLJT"
};

//파이어베이스 연결에 혹시 오류가 있을 경우를 대비
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// expo 도구를 이용해서 export
export const firebase_db = firebase.database();