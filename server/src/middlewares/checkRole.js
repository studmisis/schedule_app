export function checkRole(...roles) {
  return (req, res, next) => {
    const user = res.locals.user;

    if (!roles.includes(user.role)) {
      return res.status(403).json({
        message: 'Недостаточно прав для выполнения операции',
      });
    }

    next();
  };
}
