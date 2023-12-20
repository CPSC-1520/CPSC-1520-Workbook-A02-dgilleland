import { describe, it, expect } from 'vitest';
// import jsdom
import { JSDOM } from 'jsdom';
import { viteLogoLink } from 'modules/ui.js';
import viteLogo from '../vite.svg';


describe('UI Builder', () => {
    it('should build an image link element', () => {
        const link = 'https://vitejs.dev';
        const src = viteLogo;
        const alt = 'Vite logo';
        const expected = `<a href="${link}" target="_blank"><img src="${src}" alt="${alt}" /></a>`;
        expect(viteLogoLink).toBe(expected);
    });
})