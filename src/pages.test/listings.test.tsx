import { render, screen } from '@testing-library/react';

import Listings from '@/pages/listings';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Listings page', () => {
  describe('Render method', () => {
    it('should have div tag', () => {
      render(<Listings />);

      const heading = screen.getByRole('heading', {
        name: /Your Listings/,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
