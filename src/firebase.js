// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,updateProfile} from 'firebase/auth'
import {collection,addDoc,getDocs,updateDoc,deleteDoc,doc,onSnapshot,query,orderBy,getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyBLqtFHX79zL0uvxfewjPbLBAZp0Wt7vEM",
    authDomain: "shine-3b7a2.firebaseapp.com",
    projectId: "shine-3b7a2",
    storageBucket: "shine-3b7a2.firebasestorage.app",
    messagingSenderId: "199203979930",
    appId: "1:199203979930:web:a25755c5d7b7e032349523",
    measurementId: "G-ZCS9EWGHGD"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app);

export{auth,db,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,updateDoc,collection,deleteDoc,onSnapshot,query,orderBy,doc,getDocs,getFirestore}
export { storage };