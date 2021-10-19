import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthwentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthwentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoding] = useState(true);
    
    const auth = getAuth();

    const singInUsingGoogle = () =>{
        setIsLoding(true)
        const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider)
         
    }

    const logOut = () => {
        setIsLoding(true);
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoding(false));
    }

    //observe use state change

    useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoding(false);
        });
        return () => unsubscribed
    }, []);

    
    return{
        user,
        isLoading,
        singInUsingGoogle,
        logOut
    }
}
export default useFirebase;