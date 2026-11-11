import convertToMilliseconds from '../utils/convertToMilliseconds.js';
import jwtConfig from './jwtConfig.js';

const cookiesConfig = {
  access: {
    httpOnly: true,
    maxAge: convertToMilliseconds(jwtConfig.access.expiresIn),
  },
  refresh: {
    httpOnly: true,
    maxAge: convertToMilliseconds(jwtConfig.refresh.expiresIn),
  },
};

export default cookiesConfig;
