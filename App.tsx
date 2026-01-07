import './global.css';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Toolbar } from './components/Toolbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Boton } from 'components/Boton';
import clsx from 'clsx';

export default function App() {
  const aleatorio = Math.floor(6 * Math.random());
  const colorTexto = {
  "color-red-500": aleatorio === 0,
  "color-yellow-500": aleatorio === 1,
  "color-blue-500": aleatorio === 2,
  "color-green-500": aleatorio === 3,
  "color-orange-500": aleatorio === 4,
}

// resto omitido

  return (
    <View className="flex-1">
      <View className="flex-1 items-center justify-top bg-blue-100">
        <Toolbar />
        <Text className={`clsx(styles.texto, "color-red-500 sm:text-3xl lg:text-41")`}>App</Text>
        <Text className={`clsx(styles.texto, "color-indigo-500 sm:text-3xl lg:text-41")`}>NativeWind</Text>
        <Text className={clsx(styles.texto,colorTexto,aleatorio===0 && "bg-white")}>Texto de color Aleatorio</Text>
        <Boton 
          texto={'Boton'} 
          onPress={() => console.log('hola')} />
      </View>
    </View>
  );
}

const styles = {
  texto: 'text-3xl font-bold',
};
