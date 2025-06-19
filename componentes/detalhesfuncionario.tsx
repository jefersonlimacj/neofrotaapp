import { CorClara, CorEscura } from "@/assets/cores";
import LottieView from "lottie-react-native";
import { Image, Text, useColorScheme, View } from "react-native";

export default function DetalhesFuncionario({ carro, idmotorista, nome, status, placa, cnh } : {
    carro: string;
    idmotorista: number;
    nome: string;
    status: string;
    placa: string;
    cnh: string;
  }) {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;

  const icativo = require("../assets/animation/icativo.json");
  const icinativo = require("../assets/animation/icinativo.json");

  return (
    <>
      <View
        style={{
          borderRadius: 22,
          width: "100%",
          padding: 10,
          backgroundColor: Cor.base2,
          flexDirection: "column",
          gap: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.secundaria, fontSize: 12 }}
          >
            Motorista
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: Cor.primaria,
              width: "80%",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg",
            }}
            style={{ height: 80, width: 80, borderRadius: 22 }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Nome:{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: Cor.secundaria,
                }}
              >
                {nome}
              </Text>
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                gap: 5,
                justifyContent: "flex-start",
              }}
            >
              <Text
                allowFontScaling={false}
                style={{ color: Cor.texto2, fontSize: 12 }}
              >
                CNH:{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: Cor.secundaria,
                  }}
                >
                  123456789
                </Text>
              </Text>
              <Text
                allowFontScaling={false}
                style={{ color: Cor.texto2, fontSize: 12 }}
              >
                Validade:{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: cnh === "true" ? Cor.ativo : Cor.inativo,
                  }}
                >
                  25/12/33
                </Text>
              </Text>
            </View>

            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              CPF:{" "}
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: Cor.secundaria,
                }}
              >
                000.000.000-00
              </Text>
            </Text>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              E-mail:{" "}
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: Cor.secundaria,
                }}
              >
                motorisata@mail.com
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: Cor.texto2 + 50,
            marginVertical: 5,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "60%",
              height: 30,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Fixos / Extras
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: Cor.texto2,
              }}
            >
              <Text style={{ color: Cor.fixo }}>150</Text> /{" "}
              <Text style={{ color: Cor.extra }}>210</Text>
            </Text>
          </View>
          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: Cor.texto2 + 50,
            }}
          />
          <View
            style={{
              width: "35%",
              height: 30,
              borderRadius: 12,
              gap: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                status === "true" ? Cor.ativo + 50 : Cor.inativo + 50,
            }}
          >
            <LottieView
              source={status === "true" ? icativo : icinativo}
              autoPlay
              speed={1}
              loop={true}
              style={{ width: 20, height: 20 }}
            />

            <Text allowFontScaling={false}>
              {status === "true" ? "Ativo" : "Inativo"}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
