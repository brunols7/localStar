import { useTheme } from '@/hooks/use-theme'
import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp() {

  const theme = useTheme()
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primary,
        padding: 20
      },
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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