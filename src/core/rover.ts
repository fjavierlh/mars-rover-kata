import { Navigator } from "./navigator";

enum Command {
  Left = 'left',
  Right = 'right',
  Forward = 'forward'
}
type RawCommand = 'L' | 'R' | 'F';
export class Rover {
  constructor(private navigator: Navigator) { }

  run(rawCommands: string) {
    this.checkIfAreValidCommands(rawCommands);
    this.transformRawCommands(rawCommands).forEach(this.runSingleCommand);
    return this.formatterLocation();
  }

  private checkIfAreValidCommands(rawCommands: string) {
    if (!rawCommands || !rawCommands.match(/^[LRF]+$/)) {
      throw Error('Invalid command');
    }
  }

  private transformRawCommands(rawCommands: string) {
    return rawCommands.split('').map((rawCommand: RawCommand) => {
      if (rawCommand === 'L') return Command.Left;
      if (rawCommand === 'R') return Command.Right;
      if (rawCommand === 'F') return Command.Forward;
    });
  }

  private runSingleCommand = (command: Command) => {
    this.navigator = this.navigator[command]();
  };

  private formatterLocation() {
    return this.navigator.formattedPosition();
  }
}
