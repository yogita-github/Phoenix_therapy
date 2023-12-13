import React, { useState, useEffect } from "react";
import {
  View,
  Text,Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    if (!isRunning) {
      setSessions((prevSessions) => [
        ...prevSessions,
        { id: Date.now(), duration: elapsedTime },
      ]);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const resetAll = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setTotalTime(0);
    setSessions([]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("LetsStart")}>
          <Image
            source={require("../../assets/homeicon.jpeg")}
            style={{
              width: 30,
              height: 30,
              alignContent: "flex-end",
              justifyContent: "flex-end",
              marginLeft: 278,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Task Timer</Text>
      <Text style={styles.timerText}>{formatTime(elapsedTime)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            isRunning ? styles.stopButton : styles.startButton,
          ]}
          onPress={startStopTimer}
        >
          <Text style={styles.buttonText}>{isRunning ? "Stop" : "Start"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logContainer}>
        <Text style={styles.logTitle}>Session Log</Text>
        <ScrollView>
          {sessions.map((session) => (
            <View key={session.id} style={styles.session}>
              <Text>{`Session ${sessions.length} - ${formatTime(
                session.duration
              )}`}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.totalTime}>{`Total Time: ${formatTime(
        totalTime
      )}`}</Text>
      <TouchableOpacity style={styles.resetAllButton} onPress={resetAll}>
        <Text style={styles.buttonText}>Reset All</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#3498db",
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#2ecc71",
  },
  stopButton: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  logContainer: {
    marginTop: 20,
    marginBottom: 10,
    maxHeight: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  logTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  session: {
    marginBottom: 5,
  },
  totalTime: {
    marginTop: 10,
    fontSize: 16,
  },
  resetAllButton: {
    marginTop: 10,
    backgroundColor: "#e74c3c",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
});

export default Timer;
