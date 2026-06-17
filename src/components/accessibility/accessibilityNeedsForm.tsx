import { useTheme } from '@/hooks/use-theme'
import { Accessibility, Brain, EarOff, EyeOff } from 'lucide-react-native'
import { StyleSheet, Text, View } from 'react-native'
import AccessibilityNeedsCheckbox from './accessibilityNeedsCheckbox'

type Props = {
  accessibilityNeeds: string[]
  onChange: (needs: string[]) => void
}

export default function accessibilityNeedsForm({ accessibilityNeeds, onChange }: Props) {

    const handleAccessibilityNeedPress = (need: string) => {
        if (accessibilityNeeds.includes(need)) {
            onChange(accessibilityNeeds.filter(n => n !== need))
        } else {
            onChange([...accessibilityNeeds, need])
        }
    }

    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            alignItems: 'flex-start',
            backgroundColor: theme.background,
            gap: 12
        },
        subtitleContainer: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
        },
        subtitle: {
            fontSize: 12,
            color: theme.textSecondary
        },
        checkboxContainer: {
            flexDirection: 'column',
            width: '100%',
            gap: 12
        }
    })

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16, fontWeight: 'semibold' }}>Quais são suas necessidades? *</Text>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Pode escolher mais de uma!</Text>
                <Text style={styles.subtitle}>Vamos personalizar os lugares para você.</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <AccessibilityNeedsCheckbox 
                    name='Visual' 
                    icon={EyeOff}
                    onPress={() => handleAccessibilityNeedPress('visual')} 
                    isChecked={accessibilityNeeds.includes('visual')} />

                <AccessibilityNeedsCheckbox 
                    name='Motora' 
                    icon={Accessibility}
                    onPress={() => handleAccessibilityNeedPress('motora')} 
                    isChecked={accessibilityNeeds.includes('motora')} />

                <AccessibilityNeedsCheckbox 
                    name='Cognitiva' 
                    icon={Brain}
                    onPress={() => handleAccessibilityNeedPress('cognitiva')} 
                    isChecked={accessibilityNeeds.includes('cognitiva')} />

                <AccessibilityNeedsCheckbox 
                    name='Auditiva' 
                    icon={EarOff}
                    onPress={() => handleAccessibilityNeedPress('auditiva')} 
                    isChecked={accessibilityNeeds.includes('auditiva')} />

                    <AccessibilityNeedsCheckbox 
                    name='Nenhuma / Não quero dizer' 
                    icon={null}
                    onPress={() => handleAccessibilityNeedPress('nenhuma/nao-dizer')} 
                    isChecked={accessibilityNeeds.includes('nenhuma/nao-dizer')} />
            </View>
        </View>
    )
}

