'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert({ tableName: 'user', schema: 'public' }, [
            {
                email: 'myname@myemail.com',
                password: '$2sd435fr4tfsdfsdfb$10$V8sXzHjvj9sgjYFNEs4ZPe6Dw.6llqJz/ExF3gAEZef1qrh/fFkz72',
                isDeleted: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete({ tableName: 'user', schema: 'public' }, null, {})
    }
}
