import { LucideIcon } from "lucide-react-native";

export type AccessibilityCheck = {
    name: string;
    icon: LucideIcon | null;
    onPress: () => void;
    isChecked: boolean;
}