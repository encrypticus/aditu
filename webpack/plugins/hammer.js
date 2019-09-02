const webpack = require('webpack');

/**
 * Добавляет hammerjs в проект. Подробнее http://hammerjs.github.io/getting-started/
 * @returns {{plugins: [null]}}
 */
module.exports = function () {
  return {
    plugins: [
      new webpack.ProvidePlugin({ Hammer: 'hammerjs' }),
    ],
  };
};
