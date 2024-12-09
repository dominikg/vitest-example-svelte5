import {defineWorkspace} from "vitest/config";
import {svelteTesting} from '@testing-library/svelte/vite';
export default defineWorkspace([
    {
        extends: './vite.config.ts',
        plugins:[svelteTesting()],
        // TODO: without this block, an error happens because resolved vite config only has "ssr" environment set up
        environments:{
          "client": {
              resolve:{
                  conditions:["svelte","browser"]
              }
          }
        },
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
        extends: './vite.config.ts',
        test:{
            name:"server",
            environment: "node",
            include:["src/**/*.{test,spec}.{js,ts}"],
            exclude:["src/**/*.svelte.{test,spec}.{js,ts}"]
        }
    },
])
