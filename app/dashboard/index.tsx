import { View, Text } from "react-native";

export default function DashBoard(){
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}><Text style={{
            fontSize: 30
        }}>Welcome to dashboard!</Text></View>
    );
}