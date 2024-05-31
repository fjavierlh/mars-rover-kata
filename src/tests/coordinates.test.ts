import { Coordinates } from '../core/coordinates';

describe('The Coordinates', () => {
  it('not allow negative values for latitude', () => {
    expect(() => Coordinates.create(-1, 0)).toThrow('Coordinates cannot be negative numbers');
  });

  it('not allow negative values for longitude', () => {
    expect(() => Coordinates.create(0, -1)).toThrow('Coordinates cannot be negative numbers');
  });

  it('wraps around the altitude when it reaches the boundary', () => {
    const coordinates = Coordinates.create(10, 9);
    expect(coordinates).toEqual(Coordinates.create(0, 9));
  });

  it('wraps around the longitude when it reaches the boundary', () => {
    const coordinates = Coordinates.create(9, 10);
    expect(coordinates).toEqual(Coordinates.create(9, 0));
  });

  it('increase the latitude by one', () => {
    const coordinates = Coordinates.create(0, 0);
    expect(coordinates.increaseLatitude()).toEqual(Coordinates.create(1, 0));

    const boundaryCoordinates = Coordinates.create(9, 0);
    expect(boundaryCoordinates.increaseLatitude()).toEqual(Coordinates.create(0, 0));
  });

  it('increase the latitude by one', () => {
    const coordinates = Coordinates.create(0, 0);
    expect(coordinates.increaseLongitude()).toEqual(Coordinates.create(0, 1));

    const boundaryCoordinates = Coordinates.create(0, 9);
    expect(boundaryCoordinates.increaseLongitude()).toEqual(Coordinates.create(0, 0));
  });

  it('decrease the latitude by one', () => {
    const coordinates = Coordinates.create(0, 0);
    expect(coordinates.decreaseLatitude()).toEqual(Coordinates.create(9, 0));
  });

  it('decrease the longitude by one', () => {
    const coordinates = Coordinates.create(0, 0);
    expect(coordinates.decreaseLongitude()).toEqual(Coordinates.create(0, 9));
  });
});
