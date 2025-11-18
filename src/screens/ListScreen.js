import React, { useContext, useState, memo } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";

export default function ListScreen() {
  const { user } = useContext(UserContext);
  const [todos, setTodos] = useState([
    { id: 1, text: "잠자기", done: false },
    { id: 2, text: "밥먹기", done: false },
    { id: 3, text: "GDG 과제하기..", done: true},
  ]);

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const remove = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const TodoItem = memo(({ item }) => (
    <View style={styles.row}>
      <Pressable onPress={() => toggle(item.id)}>
        <Text style={styles.check}>{item.done ? "O" : "X"}</Text>   {/*체크 아이콘 나중에 수정할 예정*/}
      </Pressable>

      <Text style={[styles.text, item.done && styles.done]}>
        {item.text}
      </Text>

      <Pressable onPress={() => remove(item.id)}>
        <Text style={styles.delete}>쓰레기통</Text>  {/*스레기통 아이콘 나중에 수정할 예정*/}
      </Pressable>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>리스트 페이지</Text>

      <Text style={styles.user}>
        {user ? `로그인: ${user.email}` : "로그인 정보 없음"}
      </Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem item={item} />}
        ListEmptyComponent={<Text style={styles.empty}>할 일을 추가해주세요</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  user: { marginBottom: 20, fontSize: 14 },
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  check: { fontSize: 24, marginRight: 10 },
  text: { flex: 1, fontSize: 16 },
  done: { textDecorationLine: "line-through", color: "#777" },
  delete: { fontSize: 20, marginLeft: 10 },
  empty: { textAlign: "center", marginTop: 30, fontSize: 16 },
});
