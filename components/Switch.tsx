import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import clsx from 'clsx';

export function Switch() {
  const [activado, setActivado] = useState<boolean>(false);
  return (
    <Pressable
    onPress={()=>setActivado(!activado)}
      className={clsx(
        'h-7 w-14 justify-center rounded-full p-1 transition-all my-4',
        activado ? 'bg-black' : 'bg-gray-300'
      )}>
      <View className={clsx("h-6 w-6 rounded-full bg-white transition-all", activado? "translate-x-6":"")}/>
    </Pressable>
  );
}


