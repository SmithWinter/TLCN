import express from 'express'
const router = express.Router()
import {
  authUser,
  authUserSocial,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.post('/login/social', authUserSocial)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .patch(protect, admin, updateUser)

export default router
