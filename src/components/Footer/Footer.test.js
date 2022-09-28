import { render } from '@testing-library/react';
import { Footer } from './Footer';

const year = new Date().getFullYear();

describe(Footer, () => {
  it('can display the correct content', () => {
    const { getByTestId } = render(<Footer />);
    const paragraph = getByTestId('paragraph');
    expect(paragraph.textContent).toEqual(`Adam Wandoch ${year}`);
  });
});
