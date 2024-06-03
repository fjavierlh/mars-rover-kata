import { Coordinates } from '../core/coordinates';
import { NavigatorFacingNorth } from '../core/navigator';
import { Rover } from '../core/rover';

describe('The Rover', () => {
  it('does not allow invalid commands', () => {
    const coordinates = Coordinates.create(0, 0);
    const navigator = new NavigatorFacingNorth(coordinates);
    const rover = new Rover(navigator);

    expect(() => rover.run('A')).toThrow('Invalid command');
    expect(() => rover.run('9')).toThrow('Invalid command');
    expect(() => rover.run(null)).toThrow('Invalid command');
  });

  it.each([
    ['L', '0:0:W'],
    ['R', '0:0:E'],
    ['F', '0:1:N'],
    ['FF', '0:2:N'],
    ['RFF', '2:0:E'],
    ['LFF', '8:0:W'],
    ['LLFF', '0:8:S'],
    ['FRFFR', '2:1:S'],
  ])(
    'generates the expected formatted location after executes the given commands sequence: (%s)',
    (commands, expectedLocation) => {
      const coordinates = Coordinates.create(0, 0);
      const navigator = new NavigatorFacingNorth(coordinates);
      const rover = new Rover(navigator);

      expect(rover.run(commands)).toBe(expectedLocation);
    }
  );
});
