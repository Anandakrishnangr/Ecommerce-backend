import bcryptjs from 'bcryptjs'

export const hashPassword = async (password) => bcryptjs.hash(password, await bcryptjs.genSalt(10))
export const comparePassword = async (password, hash) => bcryptjs.compare(password, hash)