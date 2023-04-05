export default ({ config }) => {
  if (process.env.IS_STORYBOOK === 'true') {
    return { ...config, entryPoint: './storybook' };
  }
  return config;
};
