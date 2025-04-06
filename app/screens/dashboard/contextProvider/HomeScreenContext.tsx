import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useImage } from "./ImageProvder";
import { auth } from "@/app/firebase/config";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function HomeScreenContext(){
    // const { image } = useImage(); 
    const [userData, setUserData] = useState<{title: string}[]>([
        {title: "Welcome to dashboard!"}
    ]);

    useEffect(() => {
        if(!auth.currentUser){
            console.log("User is not logged in!");
            router.replace("/screens/exercise_9/login" as any);
            return;
        }

        const currentUser = auth.currentUser;

        const isEmailAdded = userData.some((data) => data.title === currentUser?.email);
        
        if (!isEmailAdded && currentUser?.email) {
          setUserData((prev) => [
            ...prev,
            { title: currentUser?.email! }
          ]);
        }

    }, [auth.currentUser]);

    return (
        <View style={style.container}>
       {userData.map((data: any, i: number) => (
          <View key={i}>
           <Text 
           style={{fontSize: i === 0 ? 30 : 20, marginBottom: 10 }}
           >{data.title}</Text>
          </View>
       ))}
       <TouchableOpacity style={style.button} onPress={() =>{
        auth.signOut()
        router.replace("/screens/exercise_8/login")} 
        }>
          <Text style={style.buttonText}>Logout</Text>
        </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 160,
        height: 140,
    },
    button: {
        borderColor: '#000000',
        borderStyle: "solid",
        borderWidth: 2,
        marginTop: 4,
        borderRadius: 4,
        padding: 4,
      },
      buttonText: {
        fontSize: 20,
        fontFamily: "sans-serif",
        color: '#000000',
        textAlign: "center",
        padding: 5,
      },
})
