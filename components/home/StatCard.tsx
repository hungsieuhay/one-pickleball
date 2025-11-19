import { StatCardProps } from "@/app/(tabs)";
import { styles } from "@/assets/styles/home.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const StatCard = ({ item }: { item: StatCardProps }) => (
    <View style={[styles.statCard, { borderLeftColor: item.color }]}>
        <View style={[styles.statIcon, { backgroundColor: `${item.color}20` }]}>
            <MaterialCommunityIcons name={item.icon as any} size={24} color={item.color} />
        </View>
        <View>
            <Text style={styles.statNumber}>{item.number}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
        </View>
    </View>
);