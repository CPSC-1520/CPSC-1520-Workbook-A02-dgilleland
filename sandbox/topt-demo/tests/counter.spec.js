import { describe, it, expect, vi, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { setupCounter } from '../counter';


describe('Counter', () => {
    const listener = function(ev) {

    };
    beforeEach(() => {
        // Reset the spy
        vi.resetAllMocks();
        // Use vi to spy on an event listener
        listener = vi.spyOn();
    });

    it('should increment', () => {
        // Create a DOM element to test against
        const dom = new JSDOM('<button id="counter"></button>');
        const counter = dom.window.document.querySelector('#counter');
        // Setup the counter
        setupCounter(counter);
        // Click the counter
        counter.click();
        // Assert the counter's value
        expect(counter.innerHTML).toBe('count is 1');
        // Click the counter again
        counter.click();
        // Assert the counter's value again
        expect(counter.innerHTML).toBe('count is 2');
    });
    it('should return an observer when setting up the counter', () => {
        // Create a DOM element to test against
        const dom = new JSDOM('<button id="counter"></button>');
        const counter = dom.window.document.querySelector('#counter');
        // Setup the counter
        const observer = setupCounter(counter);
        // Ensure the observer is returned
        expect(observer).toBeDefined();
        // Click the counter
        counter.click();
        // Assert the counter's value
        expect(counter.innerHTML).toBe('count is 1');
        // Click the counter again
        counter.click();
        // Assert the counter's value again
        expect(counter.innerHTML).toBe('count is 2');
        // Unsubscribe the observer
        observer.unsubscribe();
        // Click the counter again
        counter.click();
        // Assert the counter's value again
        expect(counter.innerHTML).toBe('count is 2');
    });
    it('should include a reference to the element in the observer', () => {
        // Create a DOM element to test against
        const dom = new JSDOM('<button id="counter"></button>');
        const counter = dom.window.document.querySelector('#counter');
        // Setup the counter
        const observer = setupCounter(counter);
        // Ensure the observer is returned
        expect(observer).toBeDefined();
        // Ensure the observer has a reference to the element
        expect(observer.element).toBe(counter);
    });
    it('should dispatch a custom event when the counter is clicked', () => {
        // The event name to dispatch
        const eventName = 'increment';
        // Create a DOM element to test against
        const dom = new JSDOM('<button id="counter"></button>');
        const counter = dom.window.document.querySelector('#counter');
        // Setup the counter
        const observer = setupCounter(counter);
        // Ensure the observer is returned
        expect(observer).toBeDefined();
        // Listen for the custom event
        counter.addEventListener(eventName, listener);
        // Click the counter
        counter.click();
        // Ensure the listener was called
        expect(listener).toHaveBeenCalled();
        // Ensure the listener was called with the correct event
        expect(listener).toHaveBeenCalledWith(vi.event(eventName));
        // Unsubscribe the observer
        observer.unsubscribe();
        // Click the counter again
        counter.click();
        // Ensure the listener was not called again
        expect(listener).toHaveBeenCalledTimes(1);
    });
});