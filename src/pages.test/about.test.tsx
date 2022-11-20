import { render, screen } from '@testing-library/react';

import About from '@/pages/about';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('About page', () => {
  describe('Render method', () => {
    it('should have a div with two paragraphs', () => {
      render(<About />);

      const paragraph = screen.getByText(/Thank you for reviewing/);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
