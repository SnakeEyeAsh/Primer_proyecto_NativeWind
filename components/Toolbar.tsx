import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export function Toolbar() {
  return (

    <View className='w-full h-14 flex-row items-center bg-blue-700 justify-between'>
      <View className='flex-row items-center gap-3'>
        <MaterialIcons name={"menu"} size={24} color={"white"} />
        <Text className='text-white ml-4 text-2lg font-bold'>Tutorial 27 App</Text>
      </View>
      <View className='flex-row'>
        <MaterialIcons name={"favorite"} size={24} color={"white"} />
        <MaterialIcons name={"search"} size={24} color={"white"} />
        <MaterialIcons name={"more-vert"} size={24} color={"white"} />
      </View>
    </View>


  )
}

