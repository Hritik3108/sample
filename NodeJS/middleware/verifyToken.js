import jwt from "jsonwebtoken";
import userModel from '../model/users.model.js'

export function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    // console.log(req.headers.authorization.split(" ")[1]);
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "jwtlock",
      function (err, verifiedToken) {
        if (err) {
            res.status(401).json({message: "Invalid JSON Token"});
        }
        // console.log("Verified Token ", verifiedToken._id);
        // console.log("Verified Token ", verifiedToken);

        userModel.findById(verifiedToken.id).then(user => {
            req.user = user;
            next();
        }).catch(err => {
            res.status(500).json({message: err.message});
        })
      }
    );
  } else {
    res.status(403).json({message: "token not present"});
  }
}