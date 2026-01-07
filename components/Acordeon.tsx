import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import clsx from 'clsx';

type AcordeonProps = {
  titulo: string;
  texto: string;
};

export function Acordeon({ titulo, texto }: AcordeonProps) {
  const [acordeon, setAcordeon] = useState(false);
  return (
    <View className="w-11/12 border border-gray-300 bg-white">
      <Pressable
        className="flex-row justify-between px-4 py-2"
        onPress={() => setAcordeon(!acordeon)}>
        <Text className="text-base text-gray-800">{titulo}</Text>
        <Text className={clsx(!acordeon && 'rotate-180', 'transition-all')}>{'\u25B2'}</Text>
      </Pressable>
      {acordeon && (
        <View className="px-5 py-4">
          <Text className="text-sm text-gray-600">{texto}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
