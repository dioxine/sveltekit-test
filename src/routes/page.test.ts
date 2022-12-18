import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Page from 'src/routes/+page.svelte';

// @vitest-environment happy-dom

describe('testing case', () => {
	it('shold be true', () => {
		const component = render(Page).component;
		expect(component.testTests()).toBe(true);
	});
});
