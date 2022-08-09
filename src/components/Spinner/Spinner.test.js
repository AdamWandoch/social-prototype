import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe(Spinner, () => {
  it('renders the right image', () => {
    const { getByAltText } = render(<Spinner />);
    const element = getByAltText('spinner');
    expect(element.nodeName).toBe('IMG');
    expect(element.src).toContain('spinner.png');
  });
});
