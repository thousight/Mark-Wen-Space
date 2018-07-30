import Promise from 'bluebird'

import Education from '../../models/Education'

export default (_, {  }) => new Promise((resolve, reject) => {
    Education.find({}).populate('style').exec((error, result) => {
        error ? reject(error) : resolve(result)
    })
})