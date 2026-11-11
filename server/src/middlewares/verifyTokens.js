import jsonwebtoken from 'jsonwebtoken';
import generateTokens from '../utils/generateTokens.js';
import cookiesConfig from '../config/cookiesConfig.js';
import 'dotenv/config';

export function verifyRefreshToken(req, res, next) {
  try {
    const currentRefreshToken = req.cookies.refreshToken;
    const { user } = jsonwebtoken.verify(currentRefreshToken, process.env.REFRESH_TOKEN_SECRET);

    const { accessToken, refreshToken } = generateTokens({ user });

    res.locals.user = user;

    res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh);

    next();
  } catch (error) {
    console.log('Failed verification of the refresh token');
    res.clearCookie('refreshToken').sendStatus(403);
  }
}

export function verifyAccessToken(req, res, next) {
  try {
    const { accessToken } = req.cookies;
    const { user } = jsonwebtoken.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Failed verification of the access token');
    verifyRefreshToken(req, res, next);
  }
}
