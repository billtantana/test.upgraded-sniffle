import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import dns from 'dns';
import vue from '@vitejs/plugin-vue';

// Use localhost instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8181,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
