import config from '../../../config/index'
import { IUser } from './user.interface'
import User from './user.model'
import { generateUserId } from './user.utils'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // arto generated incrementing id
  const id = await generateUserId()
  user.id = id
  // default password

  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new ApiError(400, 'User could not be created')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
