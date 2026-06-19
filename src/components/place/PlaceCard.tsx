import { useTheme } from '@/hooks/use-theme';
import { PlaceCardData } from '@/types/place';
import { Check, MapPin } from 'lucide-react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

type Props = PlaceCardData

export default function PlaceCard({
  id,
  name,
  distance,
  facilities,
  averageRating,
  reviewCount,
  bannerImageUrl,
  isFavorite,
}: Props) {

    function formatDistance(distance: number): string {
        if (distance < 1000) {
            return `${Math.round(distance)} m`;
        }

        return `${(distance / 1000).toFixed(1)} km`;
    }

    const theme = useTheme()
    const styles = StyleSheet.create({
        cardContainer: {
            width: '100%',
            borderRadius: 12,
            backgroundColor: theme.background,
            marginTop: 20
        },
        infoContainer: {
            borderWidth: 0.5,
            borderTopWidth: 0,
            borderColor: theme.borderColor,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            paddingHorizontal: 18,
            paddingVertical: 16,
            gap: 8
        },
        title: {
            fontSize: 18,
            fontWeight: 600,
            color: theme.text
        },
        rowCtn: {
            gap: 6,
            flexDirection: 'row',
            alignItems: 'center'
        },
        badgesContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
        },
        badge: {
            gap: 4,
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: theme.borderColor,
            alignSelf: 'flex-start',
            alignItems: 'center',
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 1000
        },
        text: {
            color: theme.textSecondary,
            fontWeight: 600,
            fontSize: 14
        }

    })

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: bannerImageUrl }} style={{ height: 162, borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.rowCtn}>
                    <MapPin size={14} color={theme.textSecondary} />
                    <Text style={styles.text}>{formatDistance(distance)}</Text>
                </View>
                <View style={styles.rowCtn}>
                    <StarRatingDisplay rating={averageRating} starSize={16} step="quarter" starStyle={{ marginHorizontal: 1 }}/>
                    <Text style={styles.text}>{averageRating}</Text>
                    <Text style={styles.text}>({reviewCount})</Text>
                </View>

                <View style={styles.badgesContainer}>
                    {facilities.map((facility, index) => (
                        <View key={index} style={styles.badge}>
                            <Check size={12} color={theme.text}/>
                            <Text>{facility}</Text>
                        </View>
                    ))}
                </View>

            </View>
        </View>
    )
}

