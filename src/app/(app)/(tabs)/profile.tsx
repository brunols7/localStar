import { useTheme } from '@/hooks/use-theme'
import { router } from 'expo-router'
import { LogOut } from 'lucide-react-native'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {

  const handleLogOut = () => {
    console.log('Saindo...')
    router.navigate('/')
  }

  const theme = useTheme()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    headerContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      paddingVertical: 20,
      gap: 4
    },
    headerTitle: {
      fontSize: 24,
      color: theme.text,
      fontWeight: 'bold'
    },
    section: {
      gap: 12,
      marginTop: 24
    },
    sectionTitle: {
      fontWeight: 600,
      fontSize: 18
    },
    btnOutlinedAccount: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      gap: 12,
      width: '100%',
      height: 56,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: theme.error
    },
    btnTextAccount: {
      fontSize: 16,
      color: theme.error,
      fontWeight: 600
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conta</Text>

          <TouchableOpacity style={styles.btnOutlinedAccount}
            onPress={handleLogOut}
          >
            <LogOut size={20} color={theme.error}/>
            <Text style={styles.btnTextAccount}>Sair da conta</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

