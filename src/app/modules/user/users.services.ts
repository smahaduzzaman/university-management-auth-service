import config from '../../../config/index'
import { IUser } from './users.interface'
import User from './users.model'
import { generateUserId } from './users.utils'

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
    throw new Error('User could not be created')
  }
  return createdUser
}

export default {
  createUser,
}
