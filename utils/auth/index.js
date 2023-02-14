const passport =require('passport')

//authentication strategies
const LocalStrategy = require('./strategies/local.strategy')

passport.use(LocalStrategy)
