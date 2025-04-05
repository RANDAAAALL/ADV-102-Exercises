import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function FormContainers(){

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            {[{name: "Go to login page", route: "/screens/exercise_8/login" as const},
              {name: "Go to register page", route: "/screens/exercise_8/register" as const}].map((n, i) => (
              <TouchableOpacity
               style={{
                borderColor: '#000000',
                borderStyle: "solid",
                borderWidth: 1,
                marginTop: 15,
                borderRadius: 4,
                padding: 4
                }}
               onPress={() => n.route && router.push(n.route)}
               key={i}><Text style={{
                fontSize: 20,
                fontFamily: "sans-serif",
                color: '#000000',
                fontWeight: "bold",
                textAlign: "center",
                padding: 5,
               }}>{n.name}</Text></TouchableOpacity>
            ))}
        </View>
    );
}