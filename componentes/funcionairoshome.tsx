import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { CorClara, CorEscura } from "../assets/cores";
import Btnfuncionarioshome from "./btnfuncionarioshome";

export default function MotoristaInfos() {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;

  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ color: Cor.secundaria }}>Funcionários</Text>
        <View style={[styles.divider, { backgroundColor: Cor.primaria }]} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ height: 80 }}
      >
        <Btnfuncionarioshome />
        <Btnfuncionarioshome />
        <Btnfuncionarioshome />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
