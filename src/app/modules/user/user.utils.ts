import User from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne().sort({ createdAt: -1 }).lean()
  return lastUser?.id || 0
}

export const generateUserId = async () => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0')
  return incrementedId
}
