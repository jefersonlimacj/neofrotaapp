import { CorClara, CorEscura } from "@/assets/cores";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";

export default function CardFuncionario({
  carro,
  idmotorista,
  nome,
  status,
  placa,
  cnh,
  carromodelo,
  fotocarro,
  licenciamento,
}: {
  idmotorista: number;
  status: boolean;
  nome: string;
  cnh: boolean;
  carro: string;
  carromodelo: string;
  fotocarro: string;
  placa: string;
  licenciamento: boolean;
}) {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;
  const router = useRouter();

  const icativo = require("../assets/animation/icativo.json");
  const icinativo = require("../assets/animation/icinativo.json");

  return (
    <Pressable
      style={{
        backgroundColor: Cor.base2,
        padding: 10,
        borderRadius: 22,
        height: 200,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onPress={() =>
        router.push({
          pathname: "/funcionariomotorista/[idmotorista]",
          params: {
            idmotorista: idmotorista,
            nome: nome,
            status: status ? "true" : "false",
            placa: placa,
            cnh: cnh ? "true" : "false",
            carro: carro,
            carromodelo: carromodelo,
            fotocarro: fotocarro,
            licenciamento: licenciamento ? "true" : "false",
          },
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Image
          source={{
            uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg",
          }}
          style={{ height: 120, width: 120, borderRadius: 14 }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            width: 120,
            paddingVertical: 2.5,
            backgroundColor: Cor.base,
            position: "absolute",
            left: 0,
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
          }}
        >
          <LottieView
            source={status ? icativo : icinativo}
            autoPlay
            loop={true}
            style={{ width: 20, height: 20 }}
          />
          <Text
            allowFontScaling={false}
            style={{
              color: status ? Cor.ativo : Cor.inativo,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {status ? "ATIVO" : "INATIVO"}
          </Text>
        </View>
        <Image
          source={{ uri: carro }}
          style={{ height: 120, width: "60%" }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{ height: 1, backgroundColor: Cor.texto2 + 50, width: "100%" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            gap: 2,
            width: "50%",
            alignItems: "flex-start",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.texto2, fontSize: 12 }}
          >
            Motorista
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{ color: Cor.texto1, fontSize: 14, fontWeight: "bold" }}
          >
            {nome}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: 2,
            width: "25%",
            alignItems: "center",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.texto2, fontSize: 12 }}
          >
            Placa
          </Text>
          <Text
            allowFontScaling={false}
            style={{ color: Cor.texto1, fontSize: 14, fontWeight: "bold" }}
          >
            {placa}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: 2,
            width: "25%",
            alignItems: "flex-end",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.texto2, fontSize: 12 }}
          >
            CNH
          </Text>
          <Text
            allowFontScaling={false}
            style={{
              color: cnh ? Cor.ativo : Cor.inativo,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {cnh ? "Válida" : "Vencida"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
