import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { buttons } from "../../utils/hooksButtons";
import FormatedTime from "./FormatTime";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval(() => {
          setCount(prev => prev+1);
      }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => {if(isRunning) setIsRunning(false);}
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      padding: 40,
      gap: 10
    }}>
      <Text style={{
        textAlign: "center",
        fontSize: 50,
        }}>{<FormatedTime timer={count}/>}s</Text>
      {buttons.map((b, _) => (
          <TouchableOpacity
            key={b.id}
            onPress={() => {
              if(b.name === "Start"){
                isRunning ? handleStop() : handleStart();
              }
              else if(b.name === "Reset"){
                handleReset();
              }
            }}
          >
          <Text 
            style={{
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "red",
            textAlign: "center",
            padding: 10,
            fontSize: 25
          }}
          >{isRunning && b.name === "Start" ? "Stop" : b.name}</Text>
        </TouchableOpacity>      
      ))}
    </View>
  );
}
