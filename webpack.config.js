const path = require('path');

module.exports = {
  entry: './src/index.js', // 애플리케이션 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들링된 파일이 생성될 경로
    filename: 'bundle.js', // 번들링된 자바스크립트 파일명
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel을 사용하여 ES6+ 코드를 변환
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // 개발 서버에서 제공되는 파일들의 경로
    port: 3000, // 개발 서버 포트
  },
  resolve: {
    extensions: ['.js', '.jsx'], // import 시 확장자 생략 가능하도록 설정
  },
};
