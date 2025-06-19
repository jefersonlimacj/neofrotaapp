import { CorClara, CorEscura } from "@/assets/cores";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Pressable, Text, useColorScheme } from "react-native";

export default function Navmenu({
  home,
  calendario,
  controle,
  equipe,
  perfil,
}: {
  home: boolean;
  calendario: boolean;
  controle: boolean;
  equipe: boolean;
  perfil: boolean;
}) {
  const router = useRouter();
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;
  return (
    <>
      <BlurView
        intensity={30}
        style={{
          position: "absolute",
          bottom: 30,
          width: "100%",
          height: 60,
          overflow: "hidden",
          backgroundColor: Cor.base + "dd",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          paddingHorizontal: 20,
          borderTopWidth: 1,
          borderTopColor: Cor.texto2 + "20",
          zIndex: 999,
        }}
      >
        <Pressable
          style={{
            width: 50,
            height: 50,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.replace("/home")}
        >
          <Text
            allowFontScaling={false}
            style={{
              fontFamily: home ? "IconeFill" : "Icone",
              color: home ? Cor.texto1 : Cor.texto2,
              fontSize: 24,
            }}
          >
            home
          </Text>
          <Text
            allowFontScaling={false}
            style={{ color: home ? Cor.texto1 : Cor.texto2, fontSize: 12 }}
          >
            Home
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 50,
            height: 50,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.replace("/calendario")}
        >
          <Text
            allowFontScaling={false}
            style={{
              fontFamily: calendario ? "IconeFill" : "Icone",
              color: calendario ? Cor.texto1 : Cor.texto2,
              fontSize: 24,
            }}
          >
            calendar_month
          </Text>
          <Text
            allowFontScaling={false}
            style={{
              color: calendario ? Cor.texto1 : Cor.texto2,
              fontSize: 12,
            }}
          >
            Voucher
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 50,
            height: 50,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.replace("/controle")}
        >
          <Text
            allowFontScaling={false}
            style={{
              fontFamily: controle ? "IconeFill" : "Icone",
              color: controle ? Cor.texto1 : Cor.texto2,
              fontSize: 24,
            }}
          >
            leaderboard
          </Text>
          <Text
            allowFontScaling={false}
            style={{ color: controle ? Cor.texto1 : Cor.texto2, fontSize: 12 }}
          >
            Controle
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 50,
            height: 50,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.replace("/equipe")}
        >
          <Text
            allowFontScaling={false}
            style={{
              fontFamily: equipe ? "IconeFill" : "Icone",
              color: equipe ? Cor.texto1 : Cor.texto2,
              fontSize: 24,
            }}
          >
            tenancy
          </Text>
          <Text
            allowFontScaling={false}
            style={{ color: equipe ? Cor.texto1 : Cor.texto2, fontSize: 12 }}
          >
            Equipe
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 50,
            height: 50,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{
              fontFamily: perfil ? "IconeFill" : "Icone",
              color: perfil ? Cor.texto1 : Cor.texto2,
              fontSize: 24,
            }}
          >
            person
          </Text>
          <Text
            allowFontScaling={false}
            style={{ color: perfil ? Cor.texto1 : Cor.texto2, fontSize: 12 }}
          >
            Perfil
          </Text>
        </Pressable>
      </BlurView>
    </>
  );
}
