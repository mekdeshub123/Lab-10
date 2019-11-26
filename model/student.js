module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define('student', {
        name:{
            type: DataTypes.STRING,
        }, starID:{
            type: DataTypes.STRING,
        }, present: {
            type: DataTypes.BOOLEAN,
        }
    })
    Student.sync({ force: false}).then( () => {
        console.log('synced table')
    })
    return Student
}