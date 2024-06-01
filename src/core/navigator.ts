import { Coordinates } from "./coordinates";

type Navigator = NavigatorFacingNorth | NavigatorFacingSouth | NavigatorFacingEast | NavigatorFacingWest;
export class NavigatorFacingNorth {
  constructor(private coordinates: Coordinates) { }

  left() {
    return new NavigatorFacingWest(this.coordinates);
  }

  right() {
    return new NavigatorFacingEast(this.coordinates);
  }

  forward() {
    return new NavigatorFacingNorth(this.coordinates.increaseLongitude());
  }

  currentPosition() {
    return this.coordinates;
  }

  formattedPosition() {
    return this.coordinates.toString() + ':N';
  }
}
export class NavigatorFacingSouth {
  constructor(private coordinates: Coordinates) { }

  left() {
    return new NavigatorFacingEast(this.coordinates);
  }

  right() {
    return new NavigatorFacingWest(this.coordinates);
  }

  forward() {
    return new NavigatorFacingSouth(this.coordinates.decreaseLongitude());
  }

  currentPosition() {
    return this.coordinates;
  }

  formattedPosition() {
    return this.coordinates.toString() + ':S';
  }
}
export class NavigatorFacingEast {
  constructor(private coordinates: Coordinates) { }

  left() {
    return new NavigatorFacingNorth(this.coordinates);
  }

  right() {
    return new NavigatorFacingSouth(this.coordinates);
  }

  forward() {
    return new NavigatorFacingEast(this.coordinates.increaseLatitude());
  }

  currentPosition() {
    return this.coordinates;
  }

  formattedPosition() {
    return this.coordinates.toString() + ':E';
  }
}
export class NavigatorFacingWest {
  constructor(private coordinates: Coordinates) { }

  left() {
    return new NavigatorFacingSouth(this.coordinates);
  }

  right() {
    return new NavigatorFacingNorth(this.coordinates);
  }

  forward() {
    return new NavigatorFacingWest(this.coordinates.decreaseLatitude());
  }

  currentPosition() {
    return this.coordinates;
  }

  formattedPosition() {
    return this.coordinates.toString() + ':W';
  }
}
