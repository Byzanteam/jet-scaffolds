import * as path from 'path'

const config = {
  projectName: '/* @echo name */',
  date: '2023-3-18',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [['@dcasia/mini-program-tailwind-webpack-plugin/dist/taro', {}]],
  defineConstants: {},
  alias: {
    /**
     * 如果此处定义的别名导致和某些包名产生了冲突，则手动定义需要使用的别名，
     * 如下：
     *   '@/components': path.resolve(__dirname, '..', 'src/components'),
     *   ...
     */
    '@': path.resolve(__dirname, '..', 'src'),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'vue3',
  compiler: 'webpack5',
  cache: {
    enable: true, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain(chain) {
      chain.merge({
        module: {
          rule: {
            mjsScript: {
              test: /\.mjs$/,
              include: [/pinia/],
              use: {
                babelLoader: {
                  loader: require.resolve('babel-loader'),
                },
              },
            },
          },
        },
      })
    },
    postcss: {
      autoprefixer: {},
      tailwindcss: {
        enable: true,
      },
      url: {
        enable: true,
        config: {
          limit: 2048, // 设定转换尺寸上限
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      tailwindcss: {
        enable: true,
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
    },
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return merge({}, config, require('./dev'))
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return merge({}, config, require('./prod'))
}
