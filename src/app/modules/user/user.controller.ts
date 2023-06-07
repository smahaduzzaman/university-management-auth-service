import { RequestHandler } from 'express'
import { UserService } from './user.services'
import { z } from 'zod'

const createUser: RequestHandler = async (req, res, next) => {
  const createUserZodSchema = z.object({
    body: z.object({
      role: z.string({
        required_error: 'Role is required',
      }),
      password: z.string().optional(),
    }),
  })

  await createUserZodSchema.parseAsync(req)
  // req - validation
  // body-- > object
  // data-- > object

  try {
    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUser,
}
