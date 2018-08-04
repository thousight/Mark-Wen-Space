export const handleMongoSaveError = (error, reject) => {
    if (error) {
        console.log(error)
        reject(error)
        return false
    }
    return true
}