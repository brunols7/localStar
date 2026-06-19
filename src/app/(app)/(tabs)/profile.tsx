import { useTheme } from '@/hooks/use-theme'
import * as Application from 'expo-application'
import { router } from 'expo-router'
import { Accessibility, Calendar, LogOut } from 'lucide-react-native'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {

  const appVersion = Application.nativeApplicationVersion;
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
    },
    avatarCtn: {
      width: '100%',
      padding: 20,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center'
    },
    cardCtn: {
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    },
    cardColumnCtn: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4
    },
    cardRowCtn: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center'
    },
    cardTitle: {
      fontSize: 16,
      color: theme.textSecondary
    },
    cardSubtitle: {
      fontSize: 16,
      color: theme.text
    },
    badge: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: 1000,
      backgroundColor: theme.badgeBg,
      alignSelf: 'flex-start'
    },
    profileAvatar: {
      width: 48,
      height: 48,
      borderRadius: 1000,
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center'
    },
    profileAvatarText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.whiteText
    },
    profileName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text
    },
    profileEmail: {
      fontSize: 16,
      color: theme.textSecondary
    },
    versionText: {
      fontSize: 10,
      alignSelf: 'center',
      marginTop: 32
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>

        <View style={styles.avatarCtn}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>BS</Text>
          </View>

          <View style={{ gap: 2 }}>
            <Text style={styles.profileName}>Bruno Leonardo Silva</Text>
            <Text style={styles.profileEmail}>bruno.silva@gmail.com</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações</Text>
          <View style={styles.cardCtn}>
              <View style={styles.cardRowCtn}>
                <Calendar size={24} color={theme.textSecondary}/>
                <View style={styles.cardColumnCtn}>
                  <Text style={styles.cardTitle}>Data de nascimento</Text>
                  <Text style={styles.cardSubtitle}>15/08/2005</Text>
                </View>
              </View>

              <View style={{ width: '100%', height: 1, backgroundColor: theme.textSecondary}}></View>

              <View style={styles.cardRowCtn}>
                <Accessibility size={24} color={theme.textSecondary}/>
                <View style={styles.cardColumnCtn}>
                  <Text style={styles.cardTitle}>Necessidades</Text>
                  <View style={styles.badge}>
                    <Text style={styles.cardSubtitle}>Visual</Text>
                  </View>
                </View>
              </View>

          </View>

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

        <Text style={styles.versionText}>App Version: <Text style={{ fontWeight: 600}}>{appVersion}</Text></Text>

      </ScrollView>
    </SafeAreaView>
  )
}

