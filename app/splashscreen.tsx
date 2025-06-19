import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

export default function SplashScreen() {

     const animationRef = useRef<LottieView>(null);

  const playForward = () => {
    animationRef.current?.play(0, 100); // do início ao fim
  };

  const playReverse = () => {
    animationRef.current?.play(100, 0); // do fim ao início
  };
  useEffect(() => {
    const timeout = setTimeout(() => {}, 6000); // tempo da animação

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}  
        source={require('../assets/animation/LogoNeoFrotaLottie.json')}
        autoPlay
        loop={false}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});