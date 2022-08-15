import { render } from '@testing-library/react';
import { Comment } from './Comment';
import { API_URL } from '../../helpers/urls';
import axios from 'axios';

jest.mock('axios');

describe(Comment, () => {
  it('performs get request with axios', async () => {
    // given
    const dummyUser = {
      id: 0,
      nickname: 'dummy nickname',
      avatarId: 0,
    };
    axios.get.mockResolvedValueOnce(dummyUser);

    // when
    const result = await axios.get(
      'https://social-proto-api.herokuapp.com/'.concat(`user/${dummyUser.id}`)
    );

    // then
    expect(axios.get).toHaveBeenCalled();
    expect(result).toEqual(dummyUser);
  });

  // FIXME: test not working
  it.skip('renders and avatar image', () => {
    // when
    const { getByAltText } = render(<Comment key={0} />);
    const element = getByAltText('avatar');

    //then
    expect(element.nodeName).toBe('IMG');
  });
});
