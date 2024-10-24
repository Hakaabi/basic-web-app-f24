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
    test('should find the largest number from the query', () => {
        const query = "Which of the following numbers is the largest: 17, 60, 5?";
        
        // Extract the numbers from the query using a regex
        const numbers = query.match(/\d+/g)?.map(Number);
        
        if (numbers && numbers.length > 0) {
            const largestNumber = Math.max(...numbers); // Find the largest number
            
            const response: string = QueryProcessor(query); // Call your function
            
            // Compare the response to the largest number as a string
            expect(response).toBe(largestNumber.toString());
        } else {
            throw new Error('Failed to extract numbers from the query.');
        }
    });
    test('should find numbers that are both square and cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 837, 1743, 993, 1173, 529, 1, 729?";
        
        // Extract the numbers from the query
        const numbers = query.match(/\d+/g)?.map(Number);
        
        // Expected results: Only numbers that are perfect sixth powers
        const expectedNumbers = numbers?.filter(num => {
            const root = Math.pow(num, 1/6);
            return Number.isInteger(root);
        });
    
        const response: string = QueryProcessor(query); // Call your function
    
        // Compare the response to the expected results as a comma-separated string
        const expectedResponse = expectedNumbers?.length ? expectedNumbers.join(", ") : "None";
        
        expect(response).toBe(expectedResponse);
    });    
          
});

