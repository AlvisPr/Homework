
import greet from './greet';

test('Greet function', () => {
    expect(greet(null)).toBe('Hello there!');
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
    expect(greet('JOSE')).toBe('HELLO JOSE!');
    expect(greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
});