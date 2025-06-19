import { Image, Text, useColorScheme, View } from "react-native";
import { Carros } from "../assets/carros";
import { CorClara, CorEscura } from "../assets/cores";

export default function MotoristaInfos() {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;
  return (
    <>
      <View
        style={{
          paddingLeft: 20,
          paddingVertical: 10,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 120,
              width: "30%",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Motorista
            </Text>
            <View
              style={{
                aspectRatio: 1,
                width: 100,
                borderRadius: 22,
              }}
            >
              <Image
                source={{
                  uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg",
                }}
                style={{
                  width: 100,
                  aspectRatio: 1,
                  borderRadius: 22,
                }}
              />
            </View>
          </View>
          <Image
            source={{
              uri: Carros.onixplus,
            }}
            style={{ height: 150, width: "70%" }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.texto2, fontSize: 12 }}
          >
            Nome:{" "}
          </Text>
          <Text
            allowFontScaling={false}
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: Cor.secundaria,
            }}
          >
            Jeferson da Rocha Lima
          </Text>
        </View>
      </View>
    </>
  );
}
