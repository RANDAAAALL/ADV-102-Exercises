;
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Checkbox, TextInput } from 'react-native-paper';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const inputs = [
        {
            label: "Email",
            placeholder: "Enter email",
            value: email,
            onChange: setEmail,
        },

        {
            label: "Password",
            placeholder: "Enter password",
            value: password,
            onChange: setPassword,
            secure: true
        }
    ]

 return (
    <View style={style.container}>
        <Text style={style.title}>Welcome</Text>
        {inputs.map((input, i) =>(
            <TextInput 
                key={i}
                style={  i === 0 ? {
                        marginTop: 35,
                        marginBottom: 4, 
                } : null}
                label={input.label}
                placeholder={input.placeholder}
                mode="outlined"
                value={input.value}
                onChangeText={input.onChange}
                secureTextEntry={input.secure}
            />
        ))}
        <View
         style={{
            marginTop: 8,
            flexDirection: "row",
            alignItems: "center",   
            justifyContent: "space-between"
         }}
        >
        <View
         style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: -7
         }}
        >
        <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(!isChecked)}
        />
        <Text>Remember me</Text>
        </View>

        <Text>Forgot password?</Text>
        </View>
        <TouchableOpacity style={style.button1}>
        <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text
         style={{
            color: "#000000",
            textAlign: "center",
            marginTop: 25,
         }}
        >
            Don't have an account?
        </Text>
        <TouchableOpacity style={style.button2}>
        <Text style={style.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 35,
        fontFamily: "sans-serif",
        color: '#000000',
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20,
    },
    button1: {
        borderColor: '#000000',
        borderStyle: "solid",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 4,
        padding: 4
    },
    button2: {
        borderColor: '#000000',
        borderStyle: "solid",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 4,
        padding: 4
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "sans-serif",
        color: '#000000',
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
    },
})