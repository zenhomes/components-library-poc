import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import builtins from 'rollup-plugin-node-builtins';

import pkg from './package.json';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        postcss({
            modules: false,
            loaders: ['sass']
        }),
        url(),
        svgr(),
        resolve({
            preferBuiltins: true
        }),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true
        }),
        commonjs({
            namedExports: {
                'react-pdf': ['Document', 'Page', 'pdfjs'],
                'node_modules/lodash/lodash.js': [
                    'isNumber',
                    'isNil',
                    'isNull',
                    'isUndefined',
                    'size',
                    'isNaN',
                    'isInteger',
                    'isEmpty',
                    'get',
                    'isString',
                    'includes',
                    'find'
                ],
                'node_modules/@zenhomes/sauron/dist/index.js': ['getInitials']
            }
        }),
        builtins()
    ],
    onwarn(warning, rollupWarn) {
        if (warning.code !== 'CIRCULAR_DEPENDENCY') {
            rollupWarn(warning);
        }
    }
};
