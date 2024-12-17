import React, { useState } from "react";
import {
  Container,
  QuestionContainer,
  Box,
  ButtonContainer,
  Button,
  ButtonText,
} from "../../styles";

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

const Page7 = ({ next, back }) => {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [date, setDate] = useState(1);
  const [day, setDay] = useState("월");
  // State for managing dropdown visibility
  const [showYearList, setShowYearList] = useState(false);
  const [showMonthList, setShowMonthList] = useState(false);
  const [showDateList, setShowDateList] = useState(false);
  const [showDayList, setShowDayList] = useState(false);

  // Generate lists
  const years = Array.from({ length: 25 }, (_, i) => 2000 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

  const icons = [
    { id: 1, source: require("../../../assets/sunny.png") },
    { id: 2, source: require("../../../assets/cloudy.png") },
    { id: 3, source: require("../../../assets/rainy.png") },
    { id: 4, source: require("../../../assets/snowy.png") },
  ];

  const weatherIcons = [
    { id: 1, name: "맑음", source: require("../../../assets/sunny.png") },
    { id: 2, name: "흐림", source: require("../../../assets/cloudy.png") },
    { id: 3, name: "비", source: require("../../../assets/rainy.png") },
    { id: 4, name: "눈", source: require("../../../assets/snowy.png") },
  ];

  const [selectedIcon, setSelectedIcon] = useState(null);

  const [visitedPlace, setVisitedPlace] = useState("");
  const [metPerson, setMetPerson] = useState("");
  const [purchasedItem, setPurchasedItem] = useState("");
  const [expense, setExpense] = useState("");
  const [news, setNews] = useState("");
  const [scheduleMorning, setScheduleMorning] = useState("");
  const [scheduleLateMorning, setScheduleLateMorning] = useState("");
  const [scheduleAfternoon, setScheduleAfternoon] = useState("");
  const [scheduleEvening, setScheduleEvening] = useState("");
  const [tomorrowPlan, setTomorrowPlan] = useState("");
  const [brainHealthHabit, setBrainHealthHabit] = useState("");

  return (
    <Container>
      <QuestionContainer>
        <Box>
          {/* Dropdowns */}
          <View style={styles.dropdownContainer}>
            {/* Year */}
            <View style={styles.dropdown}>
              <TouchableOpacity
                onPress={() => {
                  setShowYearList(!showYearList);
                  setShowMonthList(false);
                  setShowDateList(false);
                  setShowDayList(false);
                }}
                style={styles.dropdownButton}
              >
                <View>
                  <Text>{year}년</Text>
                </View>
              </TouchableOpacity>
              {showYearList && (
                <ScrollView style={styles.dropdownList}>
                  {years.map((y) => (
                    <TouchableOpacity
                      key={y}
                      onPress={() => {
                        setYear(y);
                        setShowYearList(false);
                      }}
                    >
                      <Text style={styles.dropdownItem}>{y}년</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>

            {/* Month */}
            <View style={styles.dropdown}>
              <TouchableOpacity
                onPress={() => {
                  setShowMonthList(!showMonthList);
                  setShowYearList(false);
                  setShowDateList(false);
                  setShowDayList(false);
                }}
                style={styles.dropdownButton}
              >
                <View>
                  <Text>{month}월</Text>
                </View>
              </TouchableOpacity>
              {showMonthList && (
                <ScrollView style={styles.dropdownList}>
                  {months.map((m) => (
                    <TouchableOpacity
                      key={m}
                      onPress={() => {
                        setMonth(m);
                        setShowMonthList(false);
                      }}
                    >
                      <Text style={styles.dropdownItem}>{m}월</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>

            {/* Date */}
            <View style={styles.dropdown}>
              <TouchableOpacity
                onPress={() => {
                  setShowDateList(!showDateList);
                  setShowYearList(false);
                  setShowMonthList(false);
                  setShowDayList(false);
                }}
                style={styles.dropdownButton}
              >
                <View>
                  <Text>{date}일</Text>
                </View>
              </TouchableOpacity>
              {showDateList && (
                <ScrollView style={styles.dropdownList}>
                  {dates.map((d) => (
                    <TouchableOpacity
                      key={d}
                      onPress={() => {
                        setDate(d);
                        setShowDateList(false);
                      }}
                    >
                      <Text style={styles.dropdownItem}>{d}일</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>

            {/* Day */}
            <View style={styles.dropdown}>
              <TouchableOpacity
                onPress={() => {
                  setShowDayList(!showDayList);
                  setShowYearList(false);
                  setShowMonthList(false);
                  setShowDateList(false);
                }}
                style={styles.dropdownButton}
              >
                <View>
                  <Text>{day}요일</Text>
                </View>
              </TouchableOpacity>
              {showDayList && (
                <ScrollView style={styles.dropdownList}>
                  {daysOfWeek.map((dayOfWeek) => (
                    <TouchableOpacity
                      key={dayOfWeek}
                      onPress={() => {
                        setDay(dayOfWeek);
                        setShowDayList(false);
                      }}
                    >
                      <Text style={styles.dropdownItem}>{dayOfWeek} 요일</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>
          </View>
          <View style={styles.weatherSection}>
            <View style={styles.iconContainer}>
              {weatherIcons.map((icon) => (
                <TouchableOpacity
                  key={icon.id}
                  onPress={() => setSelectedIcon(icon.id)}
                  style={styles.weatherIconWrapper}
                >
                  <Image
                    source={icon.source}
                    style={[
                      styles.weatherIcon,
                      selectedIcon === icon.id && styles.selectedWeatherIcon,
                    ]}
                  />
                  <Text style={styles.weatherIconText}>{icon.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <ScrollView>
            {/* 나의 하루 */}
            <Text style={styles.title}>나의 하루</Text>

            {/* 방문한 장소 & 오늘 만난 사람 */}
            <View style={styles.row}>
              <InputSection
                label="방문한 장소"
                value={visitedPlace}
                setValue={setVisitedPlace}
              />
              <InputSection
                label="오늘 만난 사람"
                value={metPerson}
                setValue={setMetPerson}
              />
            </View>

            {/* 구입한 물건 & 지출 금액 */}
            <View style={styles.row}>
              <InputSection
                label="구입한 물건"
                value={purchasedItem}
                setValue={setPurchasedItem}
              />
              <InputSection
                label="지출 금액"
                value={expense}
                setValue={setExpense}
              />
            </View>

            {/* 오늘의 뉴스 */}
            <View style={styles.row}>
              <InputSection
                label="오늘의 뉴스"
                value={news}
                setValue={setNews}
                fullWidth
              />
            </View>

            {/* 시각별 중요한 일 */}
            <Text style={styles.subtitle}>시각 및 중요한 일</Text>
            <View style={styles.row}>
              <InputSection
                label="오전 5시-8시"
                value={scheduleMorning}
                setValue={setScheduleMorning}
              />
              <InputSection
                label="오전 8시-12시"
                value={scheduleLateMorning}
                setValue={setScheduleLateMorning}
              />
            </View>
            <View style={styles.row}>
              <InputSection
                label="오후 12시-5시"
                value={scheduleAfternoon}
                setValue={setScheduleAfternoon}
              />
              <InputSection
                label="오후 5시-10시"
                value={scheduleEvening}
                setValue={setScheduleEvening}
              />
            </View>

            {/* 내일 계획 */}
            <View style={styles.row}>
              <InputSection
                label="내일 계획"
                value={tomorrowPlan}
                setValue={setTomorrowPlan}
                fullWidth
              />
            </View>

              {/* 뇌건강을 위한 생활습관 */}
      <View style={styles.brainHealth}>
        <Text style={styles.title}>🧠 뇌건강을 위한 생활습관</Text>
        <Text style={styles.description}>
          <Text style={{ color: "#009688", fontWeight: "bold" }}>✔ 사회활동을 열심히 합시다.</Text>{"\n"}
          친목단체, 스포츠클럽, 종교 활동과 같은 단체 활동을 하는 사람의 치매에 걸릴 확률이 1/4로 낮습니다.
        </Text>
      </View>
    </ScrollView>
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={back}>
          <ButtonText>이전</ButtonText>
        </Button>
        <Button onPress={next}>
          <ButtonText>다음</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const InputSection = ({ label, value, setValue, fullWidth }) => {
  return (
    <View style={[styles.cell, fullWidth && styles.fullWidth]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder="입력하세요"
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 150,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dropdown: {
    width: "25%",
  },
  dropdownButton: {
    width: "100%", // 버튼이 드롭다운 안에서 꽉 차도록 설정
    height: 30, // 버튼 높이 고정
    paddingHorizontal: 8, // 좌우 여백 추가
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    backgroundColor: "#f9f9f9",
    alignItems: "center", // 수직 중앙 정렬
    justifyContent: "center", // 가로 중앙 정렬
  },
  dropdownList: {
    position: "absolute",
    top: 40,
    width: "100%",
    maxHeight: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    zIndex: 10,
  },
  dropdownItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 1,
  },

  weatherSection: {
    marginTop: 1,
    alignItems: "center",
  },
  weatherIconWrapper: {
    alignItems: "center",
    marginHorizontal: 17,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    opacity: 0.5,
  },
  selectedWeatherIcon: {
    opacity: 1,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
  },
  weatherIconText: {
    marginTop: 1,
    fontSize: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    marginHorizontal: 5,
  },
  fullWidth: {
    flex: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default Page7;
