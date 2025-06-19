import CardVoucher from "@/componentes/cardVoucher";
import FuncionariosInfos from "@/componentes/funcionairoshome";
import ModuloFinanceiro from "@/componentes/modulofinanceiro";
import MotoristaInfos from "@/componentes/motoristainfos";
import Navmenu from "@/componentes/navmenu";
import TopoInfos from "@/componentes/topoinfos";
import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CorClara, CorEscura } from "../assets/cores";

export default function Home() {
  const Cor = useColorScheme() === "dark" ? CorEscura : CorClara;

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {};

  const listaVouchers2: any[] = [];

  const listaVouchers = [
    <CardVoucher />,
    <CardVoucher />    
  ];

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Cor.base,
        }}
      >
        <TopoInfos segredo={true} fotoPerfil={false} />
        <View style={[styles.divider, { backgroundColor: Cor.primaria }]} />
        <MotoristaInfos />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 50 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          <FuncionariosInfos />
          <ModuloFinanceiro />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: Cor.secundaria }}>Programação do Dia</Text>
            <View style={[styles.divider, { backgroundColor: Cor.primaria }]} />
          </View>

          {listaVouchers.length > 0 ? (
            listaVouchers.map((item, index) => <CardVoucher key={index} />)
          ) : (
            <Text
              allowFontScaling={false}
              style={{ textAlign: "center", marginTop: 20, color: Cor.texto2, fontSize: 12 }}
            >
              Nenhum voucher disponível no momento.
            </Text>
          )}
        </ScrollView>
      </SafeAreaView>
      <Navmenu
        home={true}
        calendario={false}
        controle={false}
        equipe={false}
        perfil={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
