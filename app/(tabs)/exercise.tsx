import { router } from 'expo-router';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function TabTwoScreen() {
  const exercises = [
    { title: "Exercise"},
    { title: "Exercise" },
    {
      title: "Exercise",
      description: "Create login screen" + '\n' + "Login screen fields",
      fields: ["Email", "Password"], 
      routerPush: "/components/login" as any,
    },
    {
      title: "Exercise",
      description: "Made new components/screens for useState and UseEffect",
      fields: ["useEffect/useeffect.tsx", "useState/usestate.tsx",],
      routerPush: "/components/hooks" as any,
    },
    { title: "Exercise",
      description: "Create a register screen" + '\n' + "Register screen fields",
      fields: ["Image Picker", "Name", "Password", "Register Button"],
      routerPush: "/components/register" as any,
    },
    { title: "Exercise",
      description: "Create a simple CRUD using useContext and useReducer",
      routerPush: "/components/crud" as any,
    },
    { title: "Exercise",
    description: "Create a simple quiz using Open Trivia Database API",
    routerPush: "/components/quiz" as any,
    },
    { title: "Exercise",
    description: "Use a React Hook Form for registration and login page",
    routerPush: "/screens/exercise_8/login-and-registration" as any,
    },
  ];
  

  return (
    <ScrollView>
      <View
        style={styles.container}
      >
      {exercises.map((exer, i) => (
        <Card 
        key={i}
        style={styles.card}
        onPress={() => exer.routerPush && router.push(exer.routerPush)}
        >
          <Card.Content>
            <Title
              style={styles.title}
            >
              {`${exer.title} ${i+1}`}
            </Title>
            <Paragraph
             style={styles.desc}
            >{exer.description}
            </Paragraph>

            {exer.fields &&  (
              <View style={styles.listContainer}>
                  {exer.fields.map((field, i) => (
                    <Text key={i} style={styles.listItem}>•{field}</Text>
                  ))}
              </View>
            )}

          </Card.Content>
          </Card>
      ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    minHeight: 100,
    margin: 6,
    borderRadius: 10,
    padding: 6,
  },
  title: {
    fontSize: 25,
    fontFamily: "sans-serif",
    color: "#000",
  },
  desc: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "#333",
  },
  listContainer: {
    marginTop: 5,
  },
  listItem: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
});
