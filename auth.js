const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user == "ruvais") {
    next();
  } else {
    res.status(404).json({ success: false, msg: "user is not logged in" });
  }
};

module.exports = authorize;
