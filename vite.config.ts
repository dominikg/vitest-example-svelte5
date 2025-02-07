import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';
import {svelteTesting} from "@testing-library/svelte/vite";

export default defineConfig({
    plugins: [sveltekit()],

    test: {
        // global test settings that are not workspace dependant
        coverage:{
            provider:'v8',
            include:['src/**/*.{svelte,js,ts}']
        },
        // workspace settings
        workspace:[
            {
                extends: true,
                plugins:[svelteTesting()],
                test:{
                    name:"client",
                    environment:'jsdom',
                    clearMocks: true,
                    include:["src/**/*.svelte.{test,spec}.{js,ts}"],
                    exclude:["src/lib/server/**"],
                    setupFiles:['./vitest-setup-client.ts']
                }
            },
            {
                extends: true,
                test:{
                    name:"server",
                    environment: "node",
                    include:["src/**/*.{test,spec}.{js,ts}"],
                    exclude:["src/**/*.svelte.{test,spec}.{js,ts}"]
                }
            },
        ]
    }
});
