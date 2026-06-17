import { useTheme } from '@/hooks/use-theme'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  onClose: () => void
}

export default function BottomSheetTerms({ onClose }: Props) {

    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            gap: 8,
            paddingVertical: 16,
            paddingHorizontal: 8
        },
        title: {
            fontSize: 16,
            fontWeight: 'semibold',
            color: theme.primary
        },
        text: {
            fontSize: 14,
            fontWeight: 'semibold',
            color: theme.text
        },
        closeBtn: {
            marginTop: 20,
            width: '100%',
            height: 56,
            backgroundColor: theme.primary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Termo de aceite:</Text>
            <Text style={styles.text}>Ao criar sua conta, você concorda com o uso do seu e-mail e com a exibição do seu nome e necessidades de acessibilidade nas avaliações publicadas, com o objetivo de ajudar outros usuários da comunidade.</Text>
            <Text style={styles.text}>Você também concorda em seguir as diretrizes da comunidade, mantendo respeito nas interações e não publicando conteúdos ofensivos, discriminatórios ou inadequados.</Text>
            <Text style={styles.text}>As avaliações podem passar por análise automática para garantir um ambiente seguro e acessível para todos.</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={{ fontWeight: 'semibold', fontSize: 16, color: theme.whiteText }}>Fechar</Text>
            </TouchableOpacity>
        </View>
    )
}