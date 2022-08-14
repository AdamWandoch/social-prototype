import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import avatars from '../../img/avatars/avatars';
import { AvatarsModal } from './AvatarsModal';

describe(AvatarsModal, () => {
  it('renders avatars grid of images', () => {
    const { queryAllByAltText } = render(<AvatarsModal />);
    const avatarGrid = queryAllByAltText('avatar');
    avatarGrid.forEach((avatar) => {
      expect(avatar.nodeName).toEqual('IMG');
    });
  });

  it('renders grid of the correct length', () => {
    const { queryAllByAltText } = render(<AvatarsModal />);
    const avatarGrid = queryAllByAltText('avatar');
    expect(avatarGrid.length).toEqual(avatars.length);
  });

  it('renders avatars name uppercased', () => {
    const { queryAllByTestId } = render(<AvatarsModal />);
    const paragraphArr = queryAllByTestId('paragraph');
    expect(paragraphArr.length).toEqual(avatars.length);
    paragraphArr.forEach((paragraph, index) => {
      expect(paragraph.textContent).toEqual(avatars[index].name.toUpperCase());
    });
  });

  it('call shoChoice onClick', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<AvatarsModal showChoice={mockCallback} />);
    const element = getByTestId('avatars');

    act(() => {
      fireEvent.click(element);
    });

    expect(mockCallback).toHaveBeenCalled();
  });
});
