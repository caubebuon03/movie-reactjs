import { render } from '@testing-library/react';
import MovieActor from '../../components/common/movie-actor/movie-actor';

describe('MovieActor', () => {
  const actor = {
    id: "1",
    name: 'John Doe',
    avatarUrl: 'https://example.com/avatar.jpg',
  };

  it('renders actor name correctly', () => {
    const { getByText } = render(<MovieActor actor={actor} />);
    const actorNameElement = getByText(actor.name);
    expect(actorNameElement).toBeTruthy();
  });

  it('renders actor avatar correctly', () => {
    const { getByRole } = render(<MovieActor actor={actor} />);
    const actorAvatarElement = getByRole('img');
    expect(actorAvatarElement).toBeTruthy();
  });
});