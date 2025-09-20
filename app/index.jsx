import { ActionButton } from "@/components/ActionButton";
import { FokusButton } from "@/components/FokusButton";
import { Timer } from "@/components/Timer";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require("./image_foco.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("./image_descanso_curto.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require("./image_descanso_longo.png"),
    display: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const timeRef = useRef(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const clear = () => {
    if(timeRef.current != null){
     clearInterval(timeRef.current);
    timeRef.current = null;
    setTimerRunning(false);

    }
  };
  const toogleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
   clear();
    setTimerType(newTimerType)
  };
  const toogleTimer = () => {
    if (timeRef.current) {
      //pausar
      clear();
      return;
    }
    setTimerRunning(true);
    const id = setInterval(() => {
      setSeconds(oldState => {
        if(oldState === 0){
          clear();
          return timerType.initialValue;
        }
      return oldState - 1;
      });
      console.log("timer rolando");
    }, 1000);
    timeRef.current = id;
  };
  return (
    <View style={styles.container}>
      <Image source={timerType?.image} />
      <View style={styles.actions}>
        <View style={styles.menu}>
          {pomodoro.map((item) => (
            <ActionButton
              key={item.id}
              active={timerType.id === item.id}
              onPress={() => toogleTimerType(item)}
              display={item.display}
            />
          ))}
        </View>

        <Timer totalSeconds={seconds}/>
        <FokusButton
          title={timerRunning ? "Pausar" : "Começar"}
          onPress={toogleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 40,
  },

  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
