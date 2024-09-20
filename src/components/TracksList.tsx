import { FlatList, FlatListProps, View } from 'react-native'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListItem'

export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => <View className="my-2 ml-[60px] border border-muted opacity-30" />

export const TracksList = ({ ...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={library}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => (
				<TrackListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
			{...flatlistProps}
		/>
	)
}
