import path from "path";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      },
    }),
    
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "micro-todo-lib"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "@chakra-ui/react": "@chakra-ui/react",
    "@emotion/react": "@emotion/react",
    "@emotion/styled": "@emotion/styled",
    "framer-motion": "framer-motion"
  },

};

const addSourceMap = (env:any, argv: any) => {
  if (argv.mode === 'development') {
      console.log('Serving with sourcemaps for easy debugging');
      config.devtool = 'inline-source-map';
  }
  return config;
}

export default addSourceMap;