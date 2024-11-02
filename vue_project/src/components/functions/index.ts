// <script setup lang="ts">
export interface Room {
  roomId: number
  icon?: string
  roomName?: string
  talkMembers?: number
  recentlyMessage?: string
  recentlyPostDate?: string
  tourokuYmd: string
  kousinYmd: string
}

export interface User {
  userId: number
  icon?: string
  userName?: string
  userNameKana?: string
  backgroundIcon?: string
  statusMessage?: string
  accountId: string
  birth?: Date
  sakujoFlag?: boolean
  tourokuYmd: string
  kousinYmd: string
}

export interface UserFriend {
  userId: number
  friendId: number
  favorite: boolean
  friendKbn: number
  tourokuYmd: string
  kousinYmd: string
}

export interface UserRoom {
  userId: number
  roomId: number
  tourokuYmd: string
  kousinYmd: string
}

export interface RoomMember {
  userId: number
  roomId: number
  friendUserId?: number
  tourokuYmd: string
  kousinYmd: string
}

export interface UserChat {
  userId: number
  roomId: number
  chatId: number
  messageBody?: string
  reactionKbn?: number
  sousinTorikeshiFlag?: boolean
  toukouShubetsu?: number
  tourokuYmd: string
  tourokuHms: string
  kousinYmd: string
}
// </script>
