import jsonwebtoken from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig.js';
import 'dotenv/config';

function generateTokens(payload) {
  if (!process.env.ACCESS_TOKEN_SECRET || !process.env.REFRESH_TOKEN_SECRET) {
    throw new Error('JWT secrets are not defined in environment variables');
  }

  const accessToken = jsonwebtoken.sign(payload, process.env.ACCESS_TOKEN_SECRET, jwtConfig.access);
  const refreshToken = jsonwebtoken.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET,
    jwtConfig.refresh,
  );

  return {
    accessToken,
    refreshToken,
  };
}

export default generateTokens;
