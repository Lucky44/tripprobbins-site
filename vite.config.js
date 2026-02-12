import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                fiction: 'fiction.html',
                starcitizen: 'starcitizen.html',
                journalism: 'journalism.html',
                software: 'software.html',
                newsletter: 'newsletter.html',
            },
        },
    },
})
