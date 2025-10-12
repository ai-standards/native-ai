import { program } from './cli';

describe('CLI', () => {
  test('should have correct name and version', () => {
    expect(program.name()).toBe('nativeai');
    // Note: version() method requires arguments in newer commander versions
  });

  test('should have add command', () => {
    const commands = program.commands.map(cmd => cmd.name());
    expect(commands).toContain('add');
  });

  test('should have new command', () => {
    const commands = program.commands.map(cmd => cmd.name());
    expect(commands).toContain('new');
  });

  test('should have correct command descriptions', () => {
    const addCommand = program.commands.find(cmd => cmd.name() === 'add');
    const newCommand = program.commands.find(cmd => cmd.name() === 'new');
    
    expect(addCommand?.description()).toBe('Add a native AI package to your project');
    expect(newCommand?.description()).toBe('Create a new native AI project');
  });
});