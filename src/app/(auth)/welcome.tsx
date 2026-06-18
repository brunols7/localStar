import { useTheme } from '@/hooks/use-theme'
import { router } from 'expo-router'
import { LogIn, UserPlus } from 'lucide-react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcome() {

  const theme = useTheme()

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      padding: 20
    },
    buttonFill: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.background,
      height: 56,
      width: '100%',
      borderRadius: 8,
    },
    buttonOutline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 56,
      width: '100%',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: theme.background,
    },
    buttonContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8
    },
    title: {
      fontSize: 70,
      fontWeight: 'bold',
      color: theme.background
    },
    welcomeContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    }
  })


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.primary }}>
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>LocalStar</Text>
          <View style={{alignItems: 'center', gap: 4}}>
            <Image source={require('../../assets/images/img-mobilidade.png')} style={{ width: 326, height: 367}} />
            <Text style={{ fontSize: 36, fontWeight: 600, color: theme.background }}>Bem-vindo(a)</Text>
            <Text style={{ fontSize: 20, fontWeight: 600, color: theme.background }}>Como você deseja prosseguir?</Text>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', marginTop: 32 }}>
          <TouchableOpacity
          onPress={() => router.push('/login')}
          style={styles.buttonFill}
          >
            <View style={styles.buttonContent}>
              <LogIn color={theme.primary} size={24}/>
              <Text style={{ color: theme.primary, fontWeight: 600, fontSize: 18 }}>Entrar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => router.push('/signup')}
          style={styles.buttonOutline}
          >
            <View style={styles.buttonContent}>
              <UserPlus color={theme.background} size={24}/>
              <Text style={{ color: theme.background, fontWeight: 600, fontSize: 18 }}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}
