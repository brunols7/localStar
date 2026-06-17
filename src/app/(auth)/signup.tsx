import AccessibilityNeedsForm from '@/components/accessibility/accessibilityNeedsForm'
import BottomSheetTerms from '@/components/terms/BottomSheetTerms'
import CheckboxItem from '@/components/ui/checkboxItem'
import { useTheme } from '@/hooks/use-theme'
import { isFullName, isValidBirthDate, isValidEmail } from '@/utils/validations'
import { router } from 'expo-router'
import { ChevronLeft, Eye, EyeClosed } from 'lucide-react-native'
import { useState } from 'react'
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp() {

  const handleRegister = () => {
    if (name === '' || dateOfBirth === '' || email === '' || password === '') {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    if(!isFullName(name)) {
      alert(`Digite um nome válido`)
    }

    if (password.length < MIN_LENGTH) {
      alert(`A senha deve ter pelo menos ${MIN_LENGTH} caracteres`)
      return
    }

    if (!isValidEmail(email)) {
      alert('Digite um e-mail válido')
      return
    }

    if (!isValidBirthDate(dateOfBirth)) {
      alert('Digite uma data válida')
      return
    }

    console.log('Nome:', name)
    console.log('Data de Nascimento:', dateOfBirth)
    console.log('E-mail:', email)
    console.log('Senha:', password)
    console.log('Aceitou o termo:', hasAcceptedTerms)
    console.log('Accesibilidades:', accessibilityNeeds)
  }

  const openTermsModal = () => {
    setIsPresented(true)
  }

  const [isPresented, setIsPresented] = useState(false) 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSecure, setIsSecure] = useState(true)
  const MIN_LENGTH = 6
  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [accessibilityNeeds, setAccessibilityNeeds] = useState<string[]>([])
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)

  const isFormValid =
    name.trim() !== '' &&
    dateOfBirth.trim() !== '' &&
    email.trim() !== '' &&
    password.length >= MIN_LENGTH &&
    hasAcceptedTerms &&
    accessibilityNeeds.length > 0

  const theme = useTheme()
    
    const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: theme.background,
          padding: 20,
        },
        divider: {
          flex: 1, 
          width: '100%', 
          height: 1, 
          backgroundColor: "gray", 
          marginVertical: 20
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
          backgroundColor: theme.primary,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 32
        },
        termsText: {
          textAlign: 'left',
          fontSize: 12,
          color: theme.primary
        },
        overlay: {
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.4)',
        },

        modalContent: {
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: 24,
          minHeight: 300,
        },
    })

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
              onPress={() => router.navigate('/')}
              >
                <ChevronLeft color={theme.primary} size={32} />
              </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Criar conta</Text>
              <Text style={styles.subtitle}>Conte um pouco sobre você para personalizar o app.</Text>
            </View>

            <View style={styles.formContainer}>

              <View style={styles.labelContainer}>
                <Text style={styles.textLable}>Nome *</Text>
                <TextInput
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
                style={styles.inputContainer}
                placeholderTextColor={theme.secondary}
                />
              </View>

              <View style={styles.labelContainer}>
                <Text style={styles.textLable}>Data de nascimento *</Text>

                <MaskedTextInput
                  mask="99/99/9999"
                  onChangeText={(text, rawText) => setDateOfBirth(text)}
                  style={styles.inputContainer}
                  keyboardType='numeric'
                  placeholder='dd/mm/aaaa'
                  placeholderTextColor={theme.secondary}
                />
                
              </View>

              <View style={styles.labelContainer}>
                <Text style={styles.textLable}>E-mail *</Text>
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
                <Text style={styles.textLable}>Senha *</Text>
                
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
                <Text style={{ fontSize: 12, color: theme.secondary }}>Use pelo menos 6 caracteres</Text>
              </View>

            </View>

            <AccessibilityNeedsForm 
              accessibilityNeeds={accessibilityNeeds}
              onChange={setAccessibilityNeeds}
            />

            <View style={styles.divider}/>

            <View style={{ marginBottom: 24 }}>
              <Text style={styles.termsText}>
                Ao criar sua conta, você concorda com os{" "}
                <Text 
                  style={{ fontWeight: 'semibold', textDecorationLine: 'underline' }}
                  onPress={openTermsModal}
                >
                  Termos de Uso e as Diretrizes da Comunidade
                </Text>
                .
              </Text>
            </View>

            <Modal
              visible={isPresented}
              animationType="slide"
              transparent
              onRequestClose={() => setIsPresented(false)}
            >
              <View style={styles.overlay}>
                <View style={styles.modalContent}>
                  <BottomSheetTerms onClose={() => setIsPresented(false)}/>
                </View>
              </View>
            </Modal>

            <CheckboxItem 
              text='Li e concordo com os Termos de Uso' 
              onPress={() => setHasAcceptedTerms(!hasAcceptedTerms)} 
              isChecked={hasAcceptedTerms}
            />

            <TouchableOpacity
              style={
                [
                  styles.loginBtn,
                  !isFormValid && { backgroundColor: theme.disabledBackground }
                ]
              }
              onPress={handleRegister}
              disabled={!isFormValid}
            >
              <Text style={{ color: !isFormValid ? theme.disabledText : theme.whiteText, fontWeight: 'semibold', fontSize: 18 }}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> 
      </SafeAreaView>
  )
}