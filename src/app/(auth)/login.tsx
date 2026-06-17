import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Login</Text>
        <TouchableOpacity
        onPress={() => router.navigate('/')}
        >
          <Text>Navigate back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})