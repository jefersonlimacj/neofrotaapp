import { Carros } from "@/assets/carros";
import { CorClara, CorEscura } from "@/assets/cores";
import CardFuncionario from "@/componentes/cardfuncionario";
import Navmenu from "@/componentes/navmenu";
import TopoInfos from "@/componentes/topoinfos";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EquipeMotoristas() {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Cor.base,
          flexDirection: "column",
          gap: 10,
        }}
      >
        <TopoInfos segredo={false} fotoPerfil={true} />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: Cor.secundaria, fontSize: 14 }}
          >
            Equipe de Motoristas
          </Text>
          <View
            style={{ height: 1, backgroundColor: Cor.primaria, width: "100%" }}
          />
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
            paddingHorizontal: 20,
            gap: 10,
          }}
        >
          <CardFuncionario
            carro={Carros.onix}
            idmotorista={1}
            nome={"Joaquim Oliveira"}
            status={true}
            placa={"STV-4A56"}
            cnh={true}
            carromodelo={"Onix LTZ 1.0"}
            fotocarro={Carros.onix}
            licenciamento={true}
          />
          <CardFuncionario
            carro={Carros.onixplus}
            idmotorista={2}
            nome={"Matheus Barbosa"}
            status={false}
            placa={"QRT-7A56"}
            cnh={false}            
            carromodelo={"OnixPlus Premiere 1.4"}
            fotocarro={Carros.onixplus}
            licenciamento={false}
          />
          <CardFuncionario
            carro={Carros.spin}
            idmotorista={3}
            nome={"Daniel dos Santos Silva Lima"}
            status={false}
            placa={"SGD-5B12"}
            cnh={true}
            carromodelo={"Spin LTZ 1.8"}
            fotocarro={Carros.spin}
            licenciamento={true}
          />
        </ScrollView>
      </SafeAreaView>
      <Navmenu
        home={false}
        calendario={false}
        controle={false}
        equipe={true}
        perfil={false}
      />
    </>
  );
}
