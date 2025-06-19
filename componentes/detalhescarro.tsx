import { CorClara, CorEscura } from "@/assets/cores";
import LottieView from "lottie-react-native";
import { Image, Text, useColorScheme, View } from "react-native";

export default function DetalhesCarro({
  nome,
  foto,
  placa,
  licenciamento,
}: {
  nome: string;
  foto: string;
  placa: string;
  licenciamento: boolean;
}) {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;

  const avisoLicenciamento = (
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingHorizontal: 20,
          paddingVertical: 5,
          backgroundColor: Cor.inativo + 50,
          alignItems: "center",
          overflow: "hidden",
          borderBottomLeftRadius: 22,
          borderBottomRightRadius: 22,
        }}
      >
        <LottieView
          source={require("../assets/animation/icinativo.json")}
          autoPlay
          speed={2}
          loop={true}
          style={{
            width: 500,
            height: 500,
            position: "absolute",
            opacity: 0.5,
            left: -350,
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center", zIndex: 1 }}>
          <LottieView
            source={require("../assets/animation/icinativo.json")}
            autoPlay
            speed={3}
            loop={true}
            style={{ width: 50, height: 50 }}
          />
          <Text allowFontScaling={false} style={{ color: Cor.texto1 }}>
            CRLV vencida desde o dia{" "}
            <Text style={{ fontWeight: "bold", color: Cor.inativo }}>
              22/12/2022
            </Text>
          </Text>
        </View>
      </View>
    );
    
  return (
    <View
      style={{
        borderRadius: 22,
        width: "100%",
        backgroundColor: Cor.base2,
        flexDirection: "column",
        gap: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingHorizontal: 10,
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          allowFontScaling={false}
          style={{ color: Cor.secundaria, fontSize: 12 }}
        >
          Veículo Selecionado
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: Cor.primaria,
            width: "62%",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "30%",
            gap: 5,
          }}
        >
          <View>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Modelo
            </Text>
            <Text
              allowFontScaling={false}
              style={{ fontWeight: "bold", fontSize: 16, color: Cor.texto1 }}
            >
              {nome}
            </Text>
          </View>
          <View>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Placa
            </Text>
            <Text
              allowFontScaling={false}
              style={{ fontWeight: "bold", fontSize: 16, color: Cor.texto1 }}
            >
              {placa}
            </Text>
          </View>
          <View>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Licenciamento
            </Text>
            <Text
              allowFontScaling={false}
              style={{ fontWeight: "bold", fontSize: 16, color: licenciamento ? Cor.ativo : Cor.inativo }}
            >
              {licenciamento ? "Licenciado" : "Vencido"}
            </Text>
          </View>
        </View>

        <Image
          source={{ uri: foto}}
          style={{ height: 120, width: "60%" }}
          resizeMode="contain"
        />
      </View>
      {licenciamento ? null : avisoLicenciamento}
    </View>
  );
}
