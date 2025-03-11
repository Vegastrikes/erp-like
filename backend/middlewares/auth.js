export default function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next()
  } else {
    return res.status(403).send({message: "user not authenticated", isAuthenticated: false});
  }
}