import { NewsItem } from "@/app/(tabs)";
import { styles } from "@/assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export const NewsItemComponent = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity style={styles.newsItem}>
      <View style={[styles.newsThumbnail, { backgroundColor: item.image as any }]}>
        <Text style={{ color: item.categoryColor, fontSize: 12, fontWeight: '600' }}>
          News
        </Text>
      </View>
      <View style={styles.newsContent}>
        <Text style={[styles.newsCategory, { color: item.categoryColor }]}>
          {item.category}
        </Text>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <View style={styles.newsMeta}>
          <Text style={styles.newsMetaText}>{item.time}</Text>
          <Text style={styles.newsMetaDot}>•</Text>
          <Text style={styles.newsMetaText}>{item.readTime}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#ccc" />
    </TouchableOpacity>
  );
