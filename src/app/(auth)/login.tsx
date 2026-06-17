import { useTheme } from '@/hooks/use-theme'
import { router } from 'expo-router'
import { ChevronLeft, Eye, EyeClosed } from 'lucide-react-native'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login() {

  const handleLogin = () => {
    console.log('Login with, email:', email, 'password:', password)
    router.navigate('/')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSecure, setIsSecure] = useState(true)
  const isFormValid =
    email.trim() !== '' &&
    password.trim() !== ''
  
  const theme = useTheme()
    
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: theme.background,
          padding: 20
        },
        headerContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          paddingVertical: 20
        },
        titleContainer: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          paddingVertical: 12,
          gap: 4
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
          color: theme.text
        },
        subtitle: {
          fontSize: 18,
          color: theme.textSecondary
        },
        formContainer: {
          marginVertical: 32,
          flexDirection: 'column',
          width: '100%',
          gap: 24
        },
        labelContainer: {
          width: '100%',
          gap: 4
        },
        inputContainer: {
          flexDirection: 'row',
          width: '100%',
          height: 56,
          backgroundColor: theme.background,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: theme.secondary,
          alignItems: 'center',
          paddingHorizontal: 15,
          gap: 8
        },
        textLable: {
          fontSize: 14,
          fontWeight: 'semibold',
          color: theme.text
        },
        loginBtn: {
          width: '100%',
          height: 56,
          backgroundColor: isFormValid ? theme.primary : theme.disabledBackground,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }
    })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={styles.container}>

        <View style={styles.headerContainer}>
            <TouchableOpacity
          onPress={() => router.navigate('/')}
          >
            <ChevronLeft color={theme.primary} size={32} />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Acesse sua conta para continuar.</Text>
        </View>

        <View style={styles.formContainer}>

          <View style={styles.labelContainer}>
            <Text style={styles.textLable}>E-mail</Text>
            <TextInput
              placeholder='Digite seu e-mail'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
              style={styles.inputContainer}
              placeholderTextColor={theme.secondary}
            />
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.textLable}>Senha</Text>
            
            <View style={styles.inputContainer}>
              <TextInput
                placeholder='Digite sua senha'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                secureTextEntry={isSecure}
                style={{ flex: 1, height: '100%' }}
                placeholderTextColor={theme.secondary}
              />
              
              <TouchableOpacity
                onPress={() => setIsSecure(!isSecure)}
              >
                {isSecure ? <EyeClosed size={22}/> : <Eye size={22}/> }
              </TouchableOpacity>

            </View>

          </View>

        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handleLogin}
          disabled={!isFormValid}
        >
          <Text style={{ color: isFormValid ? theme.whiteText : theme.disabledText, fontWeight: 'semibold', fontSize: 18 }}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})