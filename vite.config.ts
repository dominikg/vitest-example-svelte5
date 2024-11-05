import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],

    test: {
        // no include or exclude settings here, just global things like
        coverage:{
            provider:'v8',
            include:['src/**/*.{svelte,js,ts}']
        }
    }
});
