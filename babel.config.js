module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
