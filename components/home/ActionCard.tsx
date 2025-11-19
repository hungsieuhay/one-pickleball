import { styles } from "@/assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export const ActionCard = ({
    icon,
    label,
    onPress,
    color
  }: {
    icon: string;
    label: string;
    onPress: () => void;
    color: string;
  }) => (
    <TouchableOpacity
      style={[styles.actionCard, { backgroundColor: `${color}15`, borderColor: color }]}
      onPress={onPress}
    >
      <View style={[styles.actionIcon, { backgroundColor: color }]}>
        <Ionicons name={icon as any} size={24} color="#fff" />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );