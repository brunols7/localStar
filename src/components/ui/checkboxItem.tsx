import { useTheme } from '@/hooks/use-theme';
import { Check } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    text: string;
    onPress: () => void;
    isChecked: boolean;
};

export default function CheckboxItem({ text, onPress, isChecked }: Props) {
  
    const theme = useTheme()
    const styles = StyleSheet.create({

        container: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 56,
            paddingVertical: 12,
            paddingHorizontal: 16,
            backgroundColor: isChecked ? theme.primary : theme.background,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: isChecked ? theme.secondary : theme.primary,
            gap: 6
        }, text:{
            color: isChecked ? theme.whiteText : theme.primary,
            fontSize: 16,
            fontWeight: 600,
            flex: 1
        },
        checkbox: {
            width: 24,
            height: 24,
            borderRadius: 6,
            borderWidth: 2,
            borderColor: isChecked ? theme.whiteText : theme.primary,
            backgroundColor: isChecked ? theme.background : 'transparent',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.checkbox}>
                {isChecked && <Check size={22} color={theme.primary} />}
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

