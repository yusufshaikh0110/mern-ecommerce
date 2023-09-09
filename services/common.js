const passport = require("passport")

exports.isAuth = (req, res, next) => {
    return passport.authenticate('jwt')
}

exports.sanitizeUser = (user) => {
    return { id: user.id, role: user.role }
}

exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    //temporary cheating
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjcwZmYwMzQyZTNmNTgxZGYwNWViNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0MTc0MDE0fQ.XnCIrZg_gTt2RxVR_6k4zAVJ1wHQjmMZ4GYjPmhCkGk"
    return token;
};
