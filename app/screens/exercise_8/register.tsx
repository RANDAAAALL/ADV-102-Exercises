import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useForm, Controller} from "react-hook-form";
import * as ImagePicker from 'expo-image-picker'

type FormData = {
  email: string;
  password: string;
}

export default function RegisterPageExercise8() {
  const { control, handleSubmit, setValue ,formState: { errors }} = useForm<FormData>();
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
    if(!image) {
      alert("Please select an image!");
      return;
    }

    console.log(`Registered Successfully: `, userData);
    setValue("email", "");
    setValue("password", "");
    setImage(null);
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

