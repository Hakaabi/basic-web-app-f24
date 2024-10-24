import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "hakaabi"
          ));
    });
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "hakaabi"
          ));
    });
    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "hakaabi"
          ));
    });
    test('should answer the sum of two numbers from the query', () => {
        const query = "What is 26 plus 43?";
        
        // Extract the numbers from the query using a regex
        const numbers = query.match(/\d+/g)?.map(Number);
        
        if (numbers && numbers.length === 2) {
            const expectedSum = numbers[0] + numbers[1]; // Dynamically calculate the sum
            
            const response: string = QueryProcessor(query); // Call your function
            
            // Compare the response to the dynamically calculated expected sum
            expect(response).toBe(expectedSum.toString());
        } else {
            throw new Error('Failed to extract numbers from the query.');
        }
    });    
    
});

