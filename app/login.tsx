import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CorClara, CorEscura } from "../assets/cores";

export default function Login() {
  const rota = useRouter();
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;
  const [verSenha, setVerSenha] = useState(true);

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: Cor.base }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={styles.container}
              keyboardShouldPersistTaps="handled"
            >
              <Image
                source={Cor.logo}
                resizeMode="contain"
                style={{ height: 120, width: 220 }}
              />
              <Text
                allowFontScaling={false}
                style={{
                  color: Cor.texto1,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Motorista
              </Text>
              <TextInput
                allowFontScaling={false}
                style={[
                  styles.input,
                  {
                    backgroundColor: Cor.base2,
                    color: Cor.texto1,

                    height: 55,
                  },
                ]}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#999999"
              />
              <View
                style={[
                  styles.input,
                  {
                    height: 55,
                    backgroundColor: Cor.base2,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  },
                ]}
              >
                <TextInput
                  allowFontScaling={false}
                  style={{ flex: 1, color: Cor.texto1 }}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#999999"
                  secureTextEntry={verSenha}
                />
                <Pressable
                  onPress={() => {
                    verSenha ? setVerSenha(false) : setVerSenha(true);
                  }}
                >
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "Icone",
                      fontSize: 24,
                      color: Cor.texto2,
                    }}
                  >
                    {verSenha ? "visibility" : "visibility_off"}
                  </Text>
                </Pressable>
              </View>

              <Pressable
                style={[styles.botao, { backgroundColor: Cor.primaria }]}
                onPress={() => {
                  rota.push("/home");
                }}
              >
                <Text
                  allowFontScaling={false}
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Entrar
                </Text>
              </Pressable>
              <Text
                allowFontScaling={false}
                style={{ color: Cor.primaria, fontWeight: "500" }}
              >
                Esqueci minha senha
              </Text>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          backgroundColor: Cor.base,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          allowFontScaling={false}
          style={{ color: Cor.texto1, fontSize: 12 }}
        >
          Conheça o NeoFrota - App para Operadoras de Táxi
        </Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 30,
    padding: 20,
    width: "95%",
  },
  botao: {
    marginTop: 30,
    width: "95%",
    height: 45,
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
