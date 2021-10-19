import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthwentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthwentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(" ");
    const [email, SetEmail] = useState(" ");
    const [password, SetPassword] = useState(" ");

    
    const auth = getAuth();

    const singInUsingGoogle = () =>{
       
        const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider)
         
    }

    const logOut = () => {
       
        signOut(auth)
        .then(() => {
            setUser({})
        })
       
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
            setIsLoading(false);
        });
        return () => unsubscribed
    }, []);

    const getUserEmail = (event) => {
        SetEmail(event.target.value);
    };
    const getUserPassword = (event) => {
        SetPassword(event.target.value);
    };
const handleSubmitForm = event => {
        event.preventDefault();

        console.log(email, password);
        if (password.length > 6) {
            setError("password should have 6 character")
            return;
        } if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must contain 2 upper case")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
               
            })
            .catch((err) => {
                setError(err.message)
            })
    };
    const signInWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            }).catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false));
    }
    return{
        isLoading,
        user,
        singInUsingGoogle,
        logOut,
        error,
        getUserPassword,
        getUserEmail,
        handleSubmitForm,
        signInWithEmail
        
        
    }
}
export default useFirebase;