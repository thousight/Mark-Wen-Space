import Promise from 'bluebird'

import Experience from '../../models/Experience'

export default (_, {  }) => new Promise((resolve, reject) => {
    Experience.find({}).populate('style').exec((error, result) => {
        error ? reject(error) : resolve(result)
    })
})