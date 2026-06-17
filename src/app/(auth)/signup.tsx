import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>SignUp</Text>
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