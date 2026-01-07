import './global.css';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Toolbar } from './components/Toolbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Boton } from 'components/Boton';
import clsx from 'clsx';
import { useColorScheme } from 'nativewind';
import { Acordeon } from 'components/Acordeon';
import { Switch } from './components/Switch';

export default function App() {
  const aleatorio = Math.floor(6 * Math.random());
  const colorTexto = {
  "color-red-500": aleatorio === 0,
  "color-yellow-500": aleatorio === 1,
  "color-blue-500": aleatorio === 2,
  "color-green-500": aleatorio === 3,
  "color-orange-500": aleatorio === 4,
}



const { colorScheme, setColorScheme } = useColorScheme();
useEffect(() => setColorScheme("system"), [])

  return (
    <SafeAreaView className="flex-1" >
      <View className="flex-1 items-center justify-top bg-background dark:bg-darkbackground ">
        <Toolbar />
        <Text className={clsx(styles.texto, "color-primary dark:color-darkprimary")}>App</Text>
        <Text className={clsx(styles.texto, "color-secondary dark:color-darksecondary")}>NativeWind</Text>
        <Text className={clsx(styles.texto,colorTexto,aleatorio===0 && "bg-white")}>Texto de color Aleatorio</Text>
        <Boton 
          texto={'Boton'} 
          onPress={()=>setColorScheme (colorScheme==="light"?"dark":"light")} />
          <Switch/>
          <Acordeon titulo={'Raidel'} texto={'Daniel'}/>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  texto: 'text-3xl font-bold',
};
