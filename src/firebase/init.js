// src/Firebase/init.js

//  引入 Firebase 核心模块
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase 项目配置
const firebaseConfig = {
  apiKey: "AIzaSyCwXVnJ6T7DQs61jbJL5ky6Dj_LKcdIXAE",
  authDomain: "week7-shanding.firebaseapp.com",
  projectId: "week7-shanding",
  storageBucket: "week7-shanding.firebasestorage.app",
  messagingSenderId: "279965515297",
  appId: "1:279965515297:web:10eca058e18cc35224ed60"
}

//  初始化 Firebase 应用
const firebaseApp = initializeApp(firebaseConfig)

//  初始化 Firebase 子模块
const auth = getAuth(firebaseApp)         // Firebase 身份验证
const db = getFirestore(firebaseApp)      // Firestore 数据库

//  导出以便在组件中调用
export { firebaseApp, auth, db }
