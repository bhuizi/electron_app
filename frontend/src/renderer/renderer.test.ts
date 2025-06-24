// src/renderer/utils/stringUtils.ts
export function concatenateStrings(str1: string, str2: string): string {
    return str1 + str2;
}

export function createGreeting(name: string = 'World'): string {
    return concatenateStrings('Hello ', name);
}

// src/renderer/utils/stringUtils.test.t

describe('stringUtils', () => {
    describe('concatenateStrings', () => {
        it('concatenates two strings', () => {
            const result = concatenateStrings('Hello', 'World')
            expect(result).toBe('HelloWorld')
        })

        it('concatenates hello and world with space', () => {
            const result = concatenateStrings('Hello ', 'World')
            expect(result).toBe('Hello World')
        })

        it('handles empty strings', () => {
            expect(concatenateStrings('', 'World')).toBe('World')
            expect(concatenateStrings('Hello', '')).toBe('Hello')
            expect(concatenateStrings('', '')).toBe('')
        })
    })

    describe('createGreeting', () => {
        it('creates default greeting', () => {
            const result = createGreeting()
            expect(result).toBe('Hello World')
        })

        it('creates personalized greeting', () => {
            const result = createGreeting('Alice')
            expect(result).toBe('Hello Alice')
        })

        it('handles empty name', () => {
            const result = createGreeting('')
            expect(result).toBe('Hello ')
        })
    })
})