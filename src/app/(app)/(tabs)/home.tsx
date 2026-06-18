import AiAlert from '@/components/ui/aiAlert'
import { useTheme } from '@/hooks/use-theme'
import { Search } from 'lucide-react-native'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {

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
    headerSubtitle: {
      fontSize: 16,
      color: theme.text
    },
    headerTitle: {
      fontSize: 24,
      color: theme.text,
      fontWeight: 'bold'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      height: 48,
      borderRadius: 8,
      borderColor: theme.borderColor,
      borderWidth: 1,
      paddingHorizontal: 8,
      marginTop: 12,
    },
  })

  const [searchText, setSearchText] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.headerContainer}>
          <Text style={styles.headerSubtitle}>Olá, <Text style={{ fontWeight: 600 }}>Bruno</Text></Text>
          <Text style={styles.headerTitle}>Lugares próximos a você:</Text>
          <View style={styles.inputContainer}>
            <Search size={20} color={theme.textSecondary}/>
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder='Buscar lugares (ex: mercado, farmácia...)'
              placeholderTextColor={theme.textSecondary}
            />
          </View>
        </View>

        <AiAlert accessibilityNeeds='deficiência visual'/>

      </ScrollView>
    </SafeAreaView>
  )
}

