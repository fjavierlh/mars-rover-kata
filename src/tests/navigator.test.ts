import { Coordinates } from '../core/coordinates';
import {
  NavigatorFacingEast,
  NavigatorFacingNorth,
  NavigatorFacingSouth,
  NavigatorFacingWest,
} from '../core/navigator';

describe('The Navigator', () => {
  describe('when navigator facing North', () => {
    it('should have West to the left', () => {
      const navigator = new NavigatorFacingNorth(Coordinates.create(0, 0));
      expect(navigator.left()).toBeInstanceOf(NavigatorFacingWest);
    });

    it('should have East to the right', () => {
      const navigator = new NavigatorFacingNorth(Coordinates.create(0, 0));
      expect(navigator.right()).toBeInstanceOf(NavigatorFacingEast);
    });

    it('should continue to the North and increase longitude when go forward', () => {
      const navigator = new NavigatorFacingNorth(Coordinates.create(0, 0));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingNorth);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(0, 1));
      expect(nextNavigator.formattedPosition()).toBe('0:1:N');
    });
  });

  describe('when navigator facing South', () => {
    it('should have East to the left', () => {
      const navigator = new NavigatorFacingSouth(Coordinates.create(0, 0));
      expect(navigator.left()).toBeInstanceOf(NavigatorFacingEast);
    });

    it('should have West to the right', () => {
      const navigator = new NavigatorFacingSouth(Coordinates.create(0, 0));
      expect(navigator.right()).toBeInstanceOf(NavigatorFacingWest);
    });

    it('should continue to the South and decrease longitude when go forward', () => {
      const navigator = new NavigatorFacingSouth(Coordinates.create(0, 2));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingSouth);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(0, 1));
      expect(nextNavigator.formattedPosition()).toBe('0:1:S');
    });
  });

  describe('when navigator facing East', () => {
    it('should have North to the left', () => {
      const navigator = new NavigatorFacingEast(Coordinates.create(0, 0));
      expect(navigator.left()).toBeInstanceOf(NavigatorFacingNorth);
    });

    it('should have South to the right', () => {
      const navigator = new NavigatorFacingEast(Coordinates.create(0, 0));
      expect(navigator.right()).toBeInstanceOf(NavigatorFacingSouth);
    });

    it('should continue to the East and increase latitude when go forward', () => {
      const navigator = new NavigatorFacingEast(Coordinates.create(0, 0));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingEast);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(1, 0));
      expect(nextNavigator.formattedPosition()).toBe('1:0:E');
    });
  });

  describe('when navigator facing West', () => {
    it('should have South to the left', () => {
      const navigator = new NavigatorFacingWest(Coordinates.create(0, 0));
      expect(navigator.left()).toBeInstanceOf(NavigatorFacingSouth);
    });

    it('should have North to the right', () => {
      const navigator = new NavigatorFacingWest(Coordinates.create(0, 0));
      expect(navigator.right()).toBeInstanceOf(NavigatorFacingNorth);
    });

    it('should continue to the West and decrease latitude when go forward', () => {
      const navigator = new NavigatorFacingWest(Coordinates.create(2, 0));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingWest);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(1, 0));
      expect(nextNavigator.formattedPosition()).toBe('1:0:W');
    });
  });
});
