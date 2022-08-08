import { render } from '@testing-library/react';
import { Header } from './Header';

describe(Header, () => {
  it('is wrappedwww with a header tag', () => {
    const { getByTestId } = render(<Header />);
    const wrapper = getByTestId('wrapper');
    expect(wrapper.nodeName).toBe('HEADER');
  });

  it('renders a logo image', () => {
    const { getByAltText } = render(<Header />);
    const element = getByAltText('logo');
    expect(element.nodeName).toBe('IMG');
    expect(element.src).toContain('avatar-group.png');
  });
});
