import { render, act, fireEvent } from '@testing-library/react';
import { Avatar } from './Avatar';

describe(Avatar, () => {
  it('gets the right image source', () => {
    const { getByAltText } = render(<Avatar index={0} />);
    const image = getByAltText('avatar');
    expect(image.src).toContain('asian.svg');
  });
  it('gets the right image source', () => {
    const { getByAltText } = render(<Avatar index={1} />);
    const image = getByAltText('avatar');
    expect(image.src).toContain('diver.svg');
  });
});

describe(Avatar, () => {
  it(`renders the right avatar's name`, () => {
    const { getByTestId } = render(<Avatar index={0} />);
    const paragraph = getByTestId('paragraph');
    expect(paragraph.textContent).toEqual('ASIAN');
  });
  it(`renders the right avatar's name`, () => {
    const { getByTestId } = render(<Avatar index={1} />);
    const paragraph = getByTestId('paragraph');
    expect(paragraph.textContent).toEqual('DIVER');
  });
});

describe(Avatar, () => {
  it('has the P element', () => {
    const { queryByText } = render(<Avatar index={0} />);
    const element = queryByText('ASIAN');
    expect(element).toBeTruthy;
    expect(element.nodeName).toBe('P');
  });

  it('has the IMG element', () => {
    const { queryByAltText } = render(<Avatar index={0} />);
    const element = queryByAltText('avatar');
    expect(element).toBeTruthy;
    expect(element.nodeName).toBe('IMG');
  });
});

describe(Avatar, () => {
  it('can call pickAvatar', () => {
    const mockCallback = jest.fn();
    const { getByAltText } = render(
      <Avatar index={0} pickAvatar={mockCallback} />
    );
    const element = getByAltText('avatar');

    act(() => {
      fireEvent.click(element);
    });

    expect(mockCallback).toHaveBeenCalled();
  });
});
