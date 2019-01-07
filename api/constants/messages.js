export const mongoErrorMsg = type =>
  `Error occurred when fetching ${type.toLowerCase()} from Mongo Database`

export const mongoNotFoundMsg = type =>
  `${type} cannot be not found in Mongo Database`

export const invalidUsername =
  'Invalid username, username has to be an email address'

export const invalidPassword =
  'Invalid password, password has to be longer than 8 characters'
