import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import clsx from 'clsx';

type BotonProps = {
  texto: string;
  className?: string;
  onPress: () => void;
};

export function Boton({ texto, className, onPress }: BotonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        'w-52 rounded-md bg-blue-700 px-4 py-2 active:scale-90 active:bg-blue-900',
        className
      )}>
      <Text className="text-center font-bold text-white">{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
