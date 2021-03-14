/** @format */

const config = () => {
  const env = process.env.NODE_ENV;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return {
    env,
    baseUrl
  };
};

export default config();
