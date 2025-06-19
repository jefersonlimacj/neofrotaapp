import { useRouter } from "expo-router";
import { useEffect } from "react";
import SplashScreen from "./splashscreen";

export default function Index() {

  const rota = useRouter();
 
  useEffect(() => {
    setTimeout(() => {
      rota.replace("/login");
    }, 3000);
  }, []);


  return (
    <SplashScreen/>
  );
}