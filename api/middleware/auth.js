
const jwt = require('jsonwebtoken');
const secretKey = "SomeRandomkey";
let isAuthorized = (req, res, next) => {
    if (req.header('authToken')) {
        console.log(req.header('authToken'));
        jwt.verify(req.header('authToken'), secretKey, function (error, decoded) {
            if (error) {
                console.log("error section .....");
                console.log(error);
                res.send(error);

            } else {
                console.log("Decoded :::", decoded);
                req.user = { email: decoded.data.email }
                next();
            }
        })
        // .then((decoded)=>{

        // }).catch((err)=>{

        // })
    } else {
        res.send('Authorization token is missing ....')
    }
}
module.exports = {
    isAuthorized: isAuthorized
}