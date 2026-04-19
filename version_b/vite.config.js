import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/stylus/app.styl',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: [
                'resources/stylus/app.styl',
                'resources/js/app.js'
            ]
        }
    },
    server: {
        host: true,
        port: 5173
    }
});