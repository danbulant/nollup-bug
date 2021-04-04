import node_resolve from 'rollup-plugin-node-resolve';
import static_files from 'rollup-plugin-static-files';
import { terser } from 'rollup-plugin-terser';

let config = {
    input: './src/sharedworker.js',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]'
    },
    plugins: [
        node_resolve()
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        static_files({
            include: ['./public']
        }),
        terser()
    ]);
}

export default config;
