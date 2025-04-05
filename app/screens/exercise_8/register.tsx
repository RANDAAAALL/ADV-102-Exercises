import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '@/firebase/config'
import {  getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker'
import { router } from "expo-router";

type FormData = {
  email: string;
  password: string;
};

export default function RegisterPageExercise8() {
  const { control, handleSubmit, setValue ,formState: { errors }} = useForm<FormData>();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pickImage = async () => {
        setIsLoading(true);
        await new Promise(res => setTimeout(res,2000));

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
        setIsLoading(false);
    };


  const onSubmit = async (userData: FormData) => {
    console.log("Submitting: ", userData);
    setSubmittedData(userData);

    try {
      const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      console.log("User created: ", user);

      const currentUser = auth.currentUser;

      if(currentUser){
        if(!image) return;

        const storage = getStorage();

        const fileName = `profileImages/${currentUser.uid}.jpg`;
        const imageRef = ref(storage,fileName);

        const res = await fetch(image);

        const blob = await res.blob();
        await uploadBytes(imageRef,blob);
  
        const photoURL = await getDownloadURL(imageRef);

        await updateProfile(currentUser, { photoURL });
        console.log("Image uploaded successfully! Photo URL:", photoURL);

        // resets after successfully registered!
        setValue("email", "");
        setValue("password", "");
        setImage(null);

        // navigate tot the login screen
        router.push("screens/login" as any);
      }

    } catch (err) {
      console.log("FirebaseError: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <View style={styles.form}>
        <Text style={{textAlign: "center", marginVertical: 20}}>
                   {image ? (
                       <Image source={{ uri: image}} style={styles.image} />
                       ) : (
                           <View style={styles.imagePlacholder} />
                       )}
                   </Text>
        <TouchableOpacity style={styles.button2} onPress={pickImage}>
                <Text style={styles.buttonText2}>{isLoading ? "Loading..." : "Upload an image"}</Text>
          </TouchableOpacity>
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
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      {submittedData && (
        <View style={styles.submittedData}>
          <Text>Email: {submittedData.email}</Text>
          <Text>Password: {submittedData.password}</Text>
        </View>
      )}
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
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  button2: {
    borderColor: '#000000',
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 4,
    padding: 4,
    marginBottom: 10
},
buttonText2: {
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
  image: {
    width: 160,
    height: 140,
    borderRadius: 100,
},
  imagePlacholder: {
    width: 160,
    height: 140,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "black",

}
});
