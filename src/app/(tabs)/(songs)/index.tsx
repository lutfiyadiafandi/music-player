import { TracksList } from '@/components/TracksList'
import { View, ScrollView } from 'react-native'

const SongsScreen = () => {
	return (
		<View className="flex-1 bg-black pl-2">
			<ScrollView>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
