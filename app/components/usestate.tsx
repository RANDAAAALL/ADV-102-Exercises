import React, { useRef } from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"; 
import { buttons } from "../../utils/hooksButtons";
import FormatedTime from "./FormatTime";

export default function State() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timerRef = useRef<number | null>(null);
  
  const handleStart = () => {
    if(!isRunning){
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setCount(prev => prev+1);
      }, 1000) as unknown as number;
    }
  }

  const handleStop = () => {
    if (isRunning && timerRef.current !== null) {
      setIsRunning(false);
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleReset = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
    setCount(0);
  };


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
             else{
                handleReset();
            }}
          }
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
  )
}