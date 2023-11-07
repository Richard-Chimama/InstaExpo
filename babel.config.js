module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin'],
      ['module-resolver',{
        alias:{
          '@auth': './src/auth/',
          '@components': './src/components/',
          '@reduxStore': './src/ReduxStore/',
          '@Screens': './src/Screens/',
          '@theme': './src/theme.ts',
          '@types': './src/types.ts',
          '@utility': './src/Utility/',
          '@app': './src/RouteApp'
        }
      }]
    ],
  };
};
