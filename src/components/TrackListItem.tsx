import { unknownTrackImageUri } from '@/constants/image'
import { TouchableHighlight, View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import ImageModal from 'react-native-image-modal'

export type TrackListItemProps = {
	track: {
		title: string
		image?: string
		artist?: string
	}
}

export const TrackListItem = ({ track }: TrackListItemProps) => {
	const isActiveTrack = false
	return (
		<TouchableHighlight>
			<View className="pr-5 flex-row items-center gap-[14px]">
				<View>
					{/* <FastImage
						source={{
							uri: track.image ?? unknownTrackImageUri,
							priority: FastImage.priority.normal,
						}}
						className={`w-[50px] h-[50px] rounded-lg ${isActiveTrack ? 'opacity-60' : 'opacity-100'}`}
					/> */}
					<ImageModal
						style={{ width: 50, height: 50, borderRadius: 8 }}
						source={{
							uri: track.image ?? unknownTrackImageUri,
						}}
						resizeMode="cover"
					/>
				</View>

				{/* TRACK TITLE + ARTIST */}
				<View>
					<Text
						className={`max-w-[90%] text-sm font-semibold ${isActiveTrack ? 'text-primary' : 'text-white'}`}
					>
						{track.title}
					</Text>

					{track.artist && (
						<Text numberOfLines={1} className="mt-1 text-[14px] text-muted">
							{track.artist}
						</Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	)
}
