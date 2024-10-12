
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore ,addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOrn3_AJJDDr3guThfEka70axoS8Ylffc",
  authDomain: "netflix-clone-cf3fa.firebaseapp.com",
  projectId: "netflix-clone-cf3fa",
  storageBucket: "netflix-clone-cf3fa.appspot.com",
  messagingSenderId: "409782829704",
  appId: "1:409782829704:web:3bcdba66ac1ecb24d5953d",
  measurementId: "G-04YCLP39K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const SignUp = async (name ,email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } 
    catch (error){
        console.log(error);
        alert (error)
    }
}
const login = async (email,password) => {
    try {
       await signInWithEmailAndPassword(auth,email,password)
    }
    catch (error) {
        console.log(error);
        alert (error)
    }
}
const LogOut = () => {
    signOut(auth);
}
export{auth,db,login,LogOut,SignUp}