import { useTheme } from '@/hooks/use-theme'
import { Sparkles } from 'lucide-react-native'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    accessibilityNeeds: string
}

export default function AiAlert({ accessibilityNeeds }: Props) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: 12,
            padding: 14,
            backgroundColor: theme.alertBg,
            borderRadius: 12
        },
        text: {
            flex: 1,
            flexShrink: 1,
            fontSize: 14
        }
    })
    return (
        <View style={styles.container}>
            <View>
                <Sparkles size={18} fill={theme.primary} color={theme.primary}/>
            </View>
            <Text style={styles.text}>Mostrando lugares acessíveis para <Text style={{ fontWeight: 600 }}>{accessibilityNeeds}</Text></Text>
        </View>
    )
}

