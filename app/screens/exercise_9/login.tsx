import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { router} from "expo-router";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPageExercise8() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    console.log("Successfully logged in: ", data);

    try{
      const user = await signInWithEmailAndPassword(auth, data.email, data?.password);
      console.log("Signed in: ", user);

      await new Promise(res => setTimeout(res, 1000));
      router.replace("/screens/dashboard/App" as any );
    }catch(error){
      console.log("Firebase error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <View style={styles.form}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
        
        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "100%",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    borderColor: '#000000',
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 4,
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
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  submittedData: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

