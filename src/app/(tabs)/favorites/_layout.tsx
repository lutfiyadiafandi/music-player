import { StackScreenWithSearchBar } from '@/constants/layout'
import { colors } from '@/constants/tokens'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const FavoritesScreenLayout = () => {
	return (
		<View className="flex-1 bg-black">
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Favorites',
						headerStyle: {
							backgroundColor: colors.background,
						},
					}}
				/>
			</Stack>
		</View>
	)
}

export default FavoritesScreenLayout
