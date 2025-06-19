import { Carros } from "@/assets/carros";
import { CorClara, CorEscura } from "@/assets/cores";
import SelecionarCarro from "@/componentes/btnselecionarcarro";
import DetalhesCarro from "@/componentes/detalhescarro";
import DetalhesFuncionario from "@/componentes/detalhesfuncionario";
import Navmenu from "@/componentes/navmenu";
import TopoInfos from "@/componentes/topoinfos";
import { useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FuncionarioMotorista() {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;
  const route = useRoute();
  const { carro, idmotorista, nome, status, placa, cnh, carromodelo, fotocarro, licenciamento } = route.params as {
      idmotorista: number;
      status: string;
      nome: string;
      cnh: string;
      carro: string;
      carromodelo: string;
      fotocarro: string;
      placa: string;
      licenciamento: string;
  };

  const [carroselecionado, setCarroselecionado] = useState({
    id: 1,
    nome: carromodelo,
    foto: carro,
    placa: placa,
    licenciamento: licenciamento === "true" ? true : false,
  });

  const opcoes = [
    {
      id: 1,
      nome: "Onix LTZ 1.0",
      foto: Carros.onix,
      placa: "STV-4A56",
      licenciamento: true,
    },
    {
      id: 2,
      nome: "OnixPLus Premier 1.0",
      foto: Carros.onixplus,
      placa: "QRT-7A56",
      licenciamento: false,
    },
    {
      id: 3,
      nome: "Spin LTZ 1.0",
      foto: Carros.spin,
      placa: "SGD-5B12",
      licenciamento: true,
    },
  ];

  const avisoCNH = (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: Cor.inativo + 50,
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <LottieView
        source={require("../../assets/animation/icinativo.json")}
        autoPlay
        speed={1}
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
          source={require("../../assets/animation/icinativo.json")}
          autoPlay
          speed={2.5}
          loop={true}
          style={{ width: 50, height: 50 }}
        />
        <Text allowFontScaling={false} style={{ color: Cor.texto1 }}>
          CNH Vencida desde o dia{" "}
          <Text style={{ fontWeight: "bold", color: Cor.inativo }}>
            22/12/2022
          </Text>
        </Text>
      </View>
    </View>
  );
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: Cor.base, gap: 10 }}>
        <TopoInfos segredo={false} fotoPerfil={true} />
        {cnh === "false" ? avisoCNH : null}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            gap: 10,
            paddingHorizontal: 20,
          }}
        >
          <DetalhesFuncionario
            carro={carro}
            idmotorista={idmotorista}
            nome={nome}
            status={status}
            placa={placa}
            cnh={cnh}
          />
          <SelecionarCarro selecionado={carroselecionado} setSelecionado={setCarroselecionado} opcoes={opcoes}/>
          <DetalhesCarro {...carroselecionado} />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                padding: 10,
                backgroundColor: Cor.primaria,
                borderRadius: 22,
                width: "40%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                allowFontScaling={false}
                style={{ color: Cor.texto1, fontSize: 16, fontWeight: "bold" }}
              >
                Salvar
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Navmenu
        home={false}
        calendario={false}
        controle={false}
        equipe={false}
        perfil={false}
      />
    </>
  );
}
