import { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    const [name, setName] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      let str = "Lester Jon R. Andig ".split('');

        if(index <= str.length && index !== str.length){
          setTimeout(() => {
            setName(name + str[index]);
            setIndex(index + 1);
          }, 100);
        }
        else{
          setIndex(0);
          setName("");
        }
    },[index]);

  return (
    <View
      style={styles.container}
      >
      <Text
        style={styles.title}
      >
        {name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  title: {
    fontSize: 30,
    fontFamily: "sans-serif",
    color: '#000000'
  }
});
