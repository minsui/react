import React, { useState } from "react";
import {
  Container,
  QuestionContainer,
  Box,
  ButtonContainer,
  Button,
  ButtonText,
} from "../../styles";
import { Text, TextInput, StyleSheet, Alert } from "react-native";

const Intro = ({ next }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 정해진 아이디와 비밀번호
  const correctUsername = "";
  const correctPassword = "";

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      next();
    } else {
      Alert.alert("로그인 실패", "아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Container>
      <QuestionContainer>
        <Box style={styles.mainBox}>
          {/* 텍스트 */}
          <Text style={styles.title}>세계 8대 건강식품</Text>
          <Text style={styles.subtitle1}>세계 8대 건강식품에 대해 알고</Text>
          <Text style={styles.subtitle2}>
            그 효능을 구별 할 수 있도록 돕는다.
          </Text>

          {/* 입력 필드 */}
          <TextInput
            style={styles.input}
            placeholder="아이디"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* 버튼 */}
          <ButtonContainer>
            <Button onPress={handleLogin}>
              <ButtonText>로그인</ButtonText>
            </Button>
          </ButtonContainer>
        </Box>
      </QuestionContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    width: "100%",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 350,  
    fontWeight: 700,
    color: '#2d56a6',
  },
  subtitle1: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 1,
    position: "absolute",
    top: 408,
  },
  subtitle2: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 1,
    position: "absolute",
    top: 430,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 1,
    backgroundColor: "#fff",
  },
});

export default Intro;
