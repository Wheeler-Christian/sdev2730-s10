import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const quotes = [
    {
      id: 1,
      text: "What!? I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here.",
    },
    {
      id: 2,
      text: "Remember, a Jedi can feel the Force flowing through him. Don't underestimate the Force.",
    },
    {
      id: 3,
      text: "A tremor in the Force. The last time I felt it was in the presence of my old master.",
    },
    {
      id: 4,
      text: "But with the blast shield down, I can't even see! How am I supposed to fight?",
    },
    {
      id: 5,
      text: "Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money.",
    },
    {
      id: 6,
      text: "She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander.",
    },
    {
      id: 7,
      text: "What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.",
    },
    {
      id: 8,
      text: "You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.",
    },
    {
      id: 9,
      text: "You're all clear, kid. Let's blow this thing and go home!",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Quotes from Star Wars</Text>
      <FlatList
        data={quotes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221111",
    paddingBottom: 30
  },
  h1: {
    color: "#eee",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 20,
  },
  text: {
    color: "#eee",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  separator: {
    backgroundColor: "#999",
    width: "100%",
    height: 2,
    marginTop: 12,
    marginBottom: 17,
  },
});
