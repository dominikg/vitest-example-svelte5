import '@testing-library/jest-dom/vitest'
import {vi} from 'vitest';

// add global mocks here, eg for sveltekit '$app/stores' ?

// needed for svelte/motion that exports new MediaQuery which calls window.matchMedia eagerly
Object.defineProperty(window, "matchMedia", {
    writable: true,
    enumerable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});
