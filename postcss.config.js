module.exports = {
    content : [ './src/main.css' ],
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['last 2 versions'],
      },
      'postcss-import' : {},
      'postcss-preset-env' : {
        stage: 1,
        features: { 'nesting-rules': false },
      },
      'tailwindcss/nesting': {},
      tailwindcss: {}
    },
  };
  
