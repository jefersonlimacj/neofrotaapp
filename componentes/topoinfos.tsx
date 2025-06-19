import { CorClara, CorEscura } from "@/assets/cores";
import { useState } from "react";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";

export default function TopoInfos({ segredo, fotoPerfil }: any) {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;

  const [segredoValores, setSegredoValores] = useState(true);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            width: "75%",
          }}
        >
          <View
            style={{
              aspectRatio: 1,
              width: 60,
              backgroundColor: "white",
              borderRadius: 18
            }}
          >
            <Image
              source={require("../assets/images/splash-icon.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 18,
              }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto1, fontSize: 12 }}
            >
              Operadora
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: Cor.primariaTxt,
              }}
            >
              Operadora
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {segredo ? (
            <Pressable
              onPress={() => {
                setSegredoValores(!segredoValores);
              }}
            >
              <Text
                allowFontScaling={false}
                style={{
                  color: Cor.primaria,
                  fontFamily: "IconeFill",
                  fontSize: 30,
                }}
              >
                {segredoValores ? "visibility" : "visibility_off"}
              </Text>
            </Pressable>
          ) : null}
          {fotoPerfil ? (
            <Image
              source={{
                uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg",
              }}
              style={{
                width: 50,
                aspectRatio: 1,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            />
          ) : null}
        </View>
      </View>
    </>
  );
}
