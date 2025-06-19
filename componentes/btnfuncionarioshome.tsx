import LottieView from "lottie-react-native";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";
import { CorClara, CorEscura } from "../assets/cores";

export default function BtnfuncionariosHome() {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;
  return (
    <>
      <Pressable
        style={{
          height: 70,
          width: 200,
          marginLeft: 10,
          backgroundColor: Cor.base2,
          borderRadius: 22,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 10,
          gap: 5,
        }}
      >
        <Image
          source={{
            uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg",
          }}
          style={{ height: 50, width: 50, borderRadius: 14 }}
        />
        <View style={{ flexDirection: "column", gap: 2 }}>
          <Text
            allowFontScaling={false}
            style={{
              textOverflow: "ellipsis",
              fontWeight: "bold",
              color: Cor.texto1,
              fontSize: 12,
            }}
          >
            Nome do Funcário
          </Text>
          <Text
            allowFontScaling={false}
            style={{
              textOverflow: "ellipsis",
              color: Cor.texto1,
              fontSize: 10,
            }}
          >
            CNH - 15/02/2030
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <LottieView
              source={require("../assets/animation/icativo.json")}
              autoPlay
              loop={true}
              style={{ width: 20, height: 20 }}
            />
            <Text
              allowFontScaling={false}
              style={{
                textOverflow: "ellipsis",
                color: Cor.ativo,
                fontSize: 12,
              }}
            >
              Ativo
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}
