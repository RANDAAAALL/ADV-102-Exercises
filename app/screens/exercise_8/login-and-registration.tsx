import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function FormContainers(){

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20,
            }}>React Form Only</Text>
            {[{name: "Navigate to Login Screen", route: "/screens/exercise_8/login" as any},
              {name: "Navigate to Register screen", route: "/screens/exercise_8/register" as any}].map((n, i) => (
              <TouchableOpacity
               style={{
                borderColor: '#000000',
                borderStyle: "solid",
                borderWidth: 2,
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