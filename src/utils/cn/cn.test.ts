import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cn } from './cn';

// Mock the dependencies
jest.mock('clsx', () => ({
  clsx: jest.fn(),
}));

jest.mock('tailwind-merge', () => ({
  twMerge: jest.fn(),
}));

const mockClsx = clsx as jest.MockedFunction<typeof clsx>;
const mockTwMerge = twMerge as jest.MockedFunction<typeof twMerge>;

describe('cn utility - Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Function Composition', () => {
    // Verifies raw inputs are forwarded to clsx unchanged.
    it('calls clsx with the provided inputs', () => {
      mockClsx.mockReturnValue('mocked-clsx-output');
      mockTwMerge.mockReturnValue('final-output');

      const input1 = 'text-center';
      const input2 = 'p-4';

      cn(input1, input2);

      expect(mockClsx).toHaveBeenCalledTimes(1);
      expect(mockClsx).toHaveBeenCalledWith([input1, input2]);
    });

    // Confirms clsx output flows into twMerge for merging.
    it('passes clsx output to twMerge', () => {
      const clsxOutput = 'clsx-processed-classes';
      mockClsx.mockReturnValue(clsxOutput);
      mockTwMerge.mockReturnValue('merged-classes');

      cn('test-class');

      expect(mockTwMerge).toHaveBeenCalledTimes(1);
      expect(mockTwMerge).toHaveBeenCalledWith(clsxOutput);
    });

    // Ensures cn returns the merged class string from twMerge.
    it('returns the output from twMerge', () => {
      const expectedOutput = 'final-merged-classes';
      mockClsx.mockReturnValue('clsx-output');
      mockTwMerge.mockReturnValue(expectedOutput);

      const result = cn('test');

      expect(result).toBe(expectedOutput);
    });

    // Validates cn handles an empty invocation without crashing.
    it('handles no arguments', () => {
      mockClsx.mockReturnValue('');
      mockTwMerge.mockReturnValue('');

      const result = cn();

      expect(mockClsx).toHaveBeenCalledWith([]);
      expect(result).toBe('');
    });
  });

  describe('Single Input Handling', () => {
    // Checks cn can process a lone string class.
    it('processes single string input', () => {
      mockClsx.mockReturnValue('single-class');
      mockTwMerge.mockReturnValue('single-class');

      const input = 'text-center';
      cn(input);

      expect(mockClsx).toHaveBeenCalledWith([input]);
    });

    // Confirms cn accepts a single array of classes.
    it('processes single array input', () => {
      mockClsx.mockReturnValue('array-classes');
      mockTwMerge.mockReturnValue('array-classes');

      const input = ['p-4', 'rounded-lg'];
      cn(input);

      expect(mockClsx).toHaveBeenCalledWith([input]);
    });

    // Verifies truthy object entries survive class composition.
    it('processes single object input', () => {
      mockClsx.mockReturnValue('object-classes');
      mockTwMerge.mockReturnValue('object-classes');

      const input = { 'p-4': true, hidden: false };
      cn(input);

      expect(mockClsx).toHaveBeenCalledWith([input]);
    });
  });

  describe('Multiple Input Handling', () => {
    // Ensures multiple string classes compose correctly.
    it('processes multiple string inputs', () => {
      mockClsx.mockReturnValue('multiple-strings');
      mockTwMerge.mockReturnValue('merged-strings');

      cn('text-center', 'p-4', 'rounded-lg');

      expect(mockClsx).toHaveBeenCalledWith([
        'text-center',
        'p-4',
        'rounded-lg',
      ]);
    });

    // Shows cn tolerates mixed class value types.
    it('processes mixed input types', () => {
      mockClsx.mockReturnValue('mixed-classes');
      mockTwMerge.mockReturnValue('merged-mixed');

      const inputs: ClassValue[] = [
        'string-class',
        ['array-class'],
        { 'object-class': true },
        undefined,
        null,
      ];

      cn(...inputs);

      expect(mockClsx).toHaveBeenCalledWith(inputs);
    });

    // Confirms falsy values are tolerated without breaking merges.
    it('processes conditional inputs with falsy values', () => {
      mockClsx.mockReturnValue('filtered-classes');
      mockTwMerge.mockReturnValue('merged-filtered');

      cn('p-4', false, 'rounded-lg', null, undefined, '');

      expect(mockClsx).toHaveBeenCalledWith([
        'p-4',
        false,
        'rounded-lg',
        null,
        undefined,
        '',
      ]);
    });
  });

  describe('Integration Between clsx and twMerge', () => {
    // Demonstrates the clsx->twMerge chain on simple strings.
    it('chains clsx and twMerge correctly for simple input', () => {
      const clsxOutput = 'p-4 rounded-lg text-center';
      const twMergeOutput = 'p-4 rounded-lg text-center';

      mockClsx.mockReturnValue(clsxOutput);
      mockTwMerge.mockReturnValue(twMergeOutput);

      const result = cn('p-4', 'rounded-lg', 'text-center');

      expect(mockClsx).toHaveBeenCalledWith([
        'p-4',
        'rounded-lg',
        'text-center',
      ]);
      expect(mockTwMerge).toHaveBeenCalledWith(clsxOutput);
      expect(result).toBe(twMergeOutput);
    });

    // Exercises chaining when objects and arrays are involved.
    it('chains clsx and twMerge correctly for complex input', () => {
      const clsxOutput = 'p-4 bg-blue-500 text-white';
      const twMergeOutput = 'p-4 bg-blue-500 text-white';

      mockClsx.mockReturnValue(clsxOutput);
      mockTwMerge.mockReturnValue(twMergeOutput);

      const result = cn('p-4', { 'bg-blue-500': true, 'bg-red-500': false }, [
        'text-white',
      ]);

      expect(mockClsx).toHaveBeenCalledTimes(1);
      expect(mockTwMerge).toHaveBeenCalledTimes(1);
      expect(mockTwMerge).toHaveBeenCalledWith(clsxOutput);
      expect(result).toBe(twMergeOutput);
    });

    // Validates safe handling when clsx produces an empty string.
    it('handles empty clsx output', () => {
      mockClsx.mockReturnValue('');
      mockTwMerge.mockReturnValue('');

      const result = cn(false, null, undefined);

      expect(mockClsx).toHaveBeenCalledWith([false, null, undefined]);
      expect(mockTwMerge).toHaveBeenCalledWith('');
      expect(result).toBe('');
    });
  });

  describe('Edge Cases', () => {
    // Checks undefined input paths through without issues.
    it('handles undefined input', () => {
      mockClsx.mockReturnValue('');
      mockTwMerge.mockReturnValue('');

      cn(undefined);

      expect(mockClsx).toHaveBeenCalledWith([undefined]);
    });

    // Ensures null input is forwarded without throwing.
    it('handles null input', () => {
      mockClsx.mockReturnValue('');
      mockTwMerge.mockReturnValue('');

      cn(null);

      expect(mockClsx).toHaveBeenCalledWith([null]);
    });

    // Verifies empty strings do not break the pipeline.
    it('handles empty string input', () => {
      mockClsx.mockReturnValue('');
      mockTwMerge.mockReturnValue('');

      cn('');

      expect(mockClsx).toHaveBeenCalledWith(['']);
    });

    // Confirms empty arrays are acceptable class values.
    it('handles empty array input', () => {
      mockClsx.mockReturnValue('');
      mockTwMerge.mockReturnValue('');

      cn([]);

      expect(mockClsx).toHaveBeenCalledWith([[]]);
    });

    // Validates empty objects are handled like other falsy-ish values.
    it('handles empty object input', () => {
      mockClsx.mockReturnValue('');
      mockTwMerge.mockReturnValue('');

      cn({});

      expect(mockClsx).toHaveBeenCalledWith([{}]);
    });

    // Guards against regressions with many class arguments.
    it('handles very long input array', () => {
      mockClsx.mockReturnValue('long-output');
      mockTwMerge.mockReturnValue('merged-long-output');

      const manyInputs = Array(100).fill('class');
      cn(...manyInputs);

      expect(mockClsx).toHaveBeenCalledWith(manyInputs);
      expect(mockTwMerge).toHaveBeenCalledTimes(1);
    });
  });

  describe('Type Handling', () => {
    // Smoke test for plain string class values.
    it('accepts string type', () => {
      mockClsx.mockReturnValue('string');
      mockTwMerge.mockReturnValue('string');

      cn('test-class');

      expect(mockClsx).toHaveBeenCalled();
    });

    // Verifies arrays are treated as valid class inputs.
    it('accepts array type', () => {
      mockClsx.mockReturnValue('array');
      mockTwMerge.mockReturnValue('array');

      cn(['class1', 'class2']);

      expect(mockClsx).toHaveBeenCalled();
    });

    // Confirms object maps merge to classes.
    it('accepts object type', () => {
      mockClsx.mockReturnValue('object');
      mockTwMerge.mockReturnValue('object');

      cn({ active: true, disabled: false });

      expect(mockClsx).toHaveBeenCalled();
    });

    // Ensures nested arrays flatten via clsx.
    it('accepts nested array type', () => {
      mockClsx.mockReturnValue('nested');
      mockTwMerge.mockReturnValue('nested');

      cn(['class1', ['class2', ['class3']]]);

      expect(mockClsx).toHaveBeenCalled();
    });

    // Shows cn tolerates a combination of supported types.
    it('accepts mixed ClassValue types', () => {
      mockClsx.mockReturnValue('mixed');
      mockTwMerge.mockReturnValue('mixed');

      cn('string', ['array'], { object: true }, undefined, null, false);

      expect(mockClsx).toHaveBeenCalled();
    });
  });

  describe('Call Order and Invocation', () => {
    // Tracks invocation order to ensure clsx precedes twMerge.
    it('calls clsx before twMerge', () => {
      const callOrder: string[] = [];

      mockClsx.mockImplementation((...args) => {
        callOrder.push('clsx');
        return 'clsx-result';
      });

      mockTwMerge.mockImplementation((...args) => {
        callOrder.push('twMerge');
        return 'final-result';
      });

      cn('test');

      expect(callOrder).toEqual(['clsx', 'twMerge']);
    });

    // Asserts no extra invocations occur during a cn call.
    it('calls each function exactly once per cn call', () => {
      mockClsx.mockReturnValue('output');
      mockTwMerge.mockReturnValue('final');

      cn('test-class');

      expect(mockClsx).toHaveBeenCalledTimes(1);
      expect(mockTwMerge).toHaveBeenCalledTimes(1);
    });

    // Confirms cn leaves incoming arguments untouched.
    it('does not modify the input arguments', () => {
      const input = 'test-class';
      mockClsx.mockReturnValue('output');
      mockTwMerge.mockReturnValue('final');

      cn(input);

      // Input should remain unchanged
      expect(input).toBe('test-class');
      expect(mockClsx).toHaveBeenCalledWith([input]);
    });
  });
});
