const User = require('../models').User
const model = require('../models/index')

class UserHelper {
    static async getAllUsers () {
        try {
            return await model.sequelize.transaction(async (t) => {
              return await User.findAll({ transaction: t })
                  .then(users => {
                      return users
                  })
            })
        }
        catch (e) {
            return new Promise.reject(e)
        }
    }
}

module.exports = UserHelper
