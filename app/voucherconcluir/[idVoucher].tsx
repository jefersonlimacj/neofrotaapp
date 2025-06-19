import { CorClara, CorEscura } from "@/assets/cores";
import TopoInfos from "@/componentes/topoinfos";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function VoucherConcluir() {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;

  const route = useRoute();

  const navigation = useNavigation();

  const { idVoucher } = route.params as { idVoucher: number };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Cor.base,
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <TopoInfos segredo={false} fotoPerfil={true} />
      <Text
        allowFontScaling={false}
        style={{
          color: Cor.texto1,
          fontSize: 15,
          marginTop: 10,
        }}
      >
        Voucher:{" "}
        <Text
          allowFontScaling={false}
          style={{
            color: Cor.fixo,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {idVoucher}
        </Text>
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          paddingHorizontal: 20,
          gap: 15,
        }}
      >
        <Text
          allowFontScaling={false}
          style={{ color: Cor.texto2, fontSize: 12 }}
        >
          Destino:{" "}
          <Text
            style={{ fontWeight: "bold", color: Cor.secundaria, fontSize: 14 }}
          >
            Unidade Arcelor Mittal Candeias
          </Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "column", gap: 5, width: "45%" }}>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Motorista:{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  color: Cor.secundaria,
                  fontSize: 14,
                }}
              >
                Jeferson
              </Text>
            </Text>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Passageiros:{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  color: Cor.secundaria,
                  fontSize: 14,
                }}
              >
                3
              </Text>
            </Text>
          </View>
          <View
            style={{ height: "90%", width: 1, backgroundColor: Cor.texto2 }}
          />
          <View style={{ flexDirection: "column", gap: 5, width: "45%" }}>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Categoria:{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  color: Cor.secundaria,
                  fontSize: 14,
                }}
              >
                Compacto
              </Text>
            </Text>
            <Text
              allowFontScaling={false}
              style={{ color: Cor.texto2, fontSize: 12 }}
            >
              Valor:{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  color: Cor.secundaria,
                  fontSize: 14,
                }}
              >
                R$ 100,00
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: Cor.base2,
            borderRadius: 22,
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.secundaria, fontSize: 12, padding: 10 }}
          >
            Observação:
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: Cor.base2,
            borderRadius: 22,
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.secundaria, fontSize: 12, padding: 10 }}
          >
            Assinatura:
          </Text>
        </View>
        <Pressable
          onPress={() => router.push("../confirmado")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            overflow: "hidden",
            width: "100%",
            height: 50,
            zIndex: 1,
            borderRadius: 22,
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: Cor.primaria,
            backgroundColor: Cor.primaria + "AA",
          }}
        >
          <BlurView
            intensity={50}
            tint="light"
            pointerEvents="none"
            style={StyleSheet.absoluteFill}
          />
          <Text
            allowFontScaling={false}
            style={{
              color: Cor.texto1,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Confirmar
          </Text>
        </Pressable>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            allowFontScaling={false}
            style={{
              color: Cor.primaria,
              fontSize: 14,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
