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
        
        if (numbers && numbers.length >= 2) {
            const expectedSum = numbers.reduce((acc, num) => acc + num, 0); // Dynamically calculate the sum
            
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
    test('should answer the multiplication of two numbers from the query', () => {
        const query = "What is 83 multiplied by 45?";
        
        // Extract the numbers from the query using a regex
        const numbers = query.match(/\d+/g)?.map(Number);
        
        // Check if we have exactly two numbers
        if (numbers && numbers.length === 2) {
            const expectedProduct = numbers[0] * numbers[1]; // Dynamically calculate the product
            
            const response: string = QueryProcessor(query); // Call your function
            
            // Compare the response to the dynamically calculated expected product
            expect(response).toBe(expectedProduct.toString());
        } else {
            throw new Error('Failed to extract two numbers from the query.');
        }
    });
    test('should answer the subtraction of two numbers from the query', () => {
        const query = "What is 11 minus 72?";
        
        // Extract the numbers from the query using a regex
        const numbers = query.match(/\d+/g)?.map(Number);
        
        // Check if we have exactly two numbers
        if (numbers && numbers.length === 2) {
            const expectedDifference = numbers[0] - numbers[1]; // Dynamically calculate the difference
            
            const response: string = QueryProcessor(query); // Call your function
            
            // Compare the response to the dynamically calculated expected difference
            expect(response).toBe(expectedDifference.toString());
        } else {
            throw new Error('Failed to extract two numbers from the query.');
        }
    });
    test('should identify prime numbers from the query', () => {
        const query = "Which of the following numbers are primes: 13, 46, 16, 19, 82?";
        
        // Extract the numbers from the query
        const numbers = query.match(/\d+/g)?.map(Number);
        
        // Function to check if a number is prime
        const isPrime = (num: number): boolean => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };
    
        // Expected primes from the list
        const expectedPrimes = numbers?.filter(isPrime);
        
        const response: string = QueryProcessor(query); // Call your function
        
        // Compare the response to the expected primes as a comma-separated string
        const expectedResponse = expectedPrimes?.length ? expectedPrimes.join(", ") : "None";
        
        expect(response).toBe(expectedResponse);
    });
    test('should answer the power calculation from the query', () => {
        const query = "What is 42 to the power of 34?";
        
        // Extract the numbers from the query
        const numbers = query.match(/\d+/g)?.map(Number);
        
        // Check if we have exactly two numbers
        if (numbers && numbers.length === 2) {
            const base = numbers[0];
            const exponent = numbers[1];
            const expectedResult = Math.pow(base, exponent); // Dynamically calculate the power
            
            const response: string = QueryProcessor(query); // Call your function
            
            // Compare the response to the dynamically calculated expected result
            expect(response).toBe(expectedResult.toString());
        } else {
            throw new Error('Failed to extract base and exponent from the query.');
        }
    });
    test('should answer the expression involving addition and multiplication from the query', () => {
        const query = "What is 75 plus 88 multiplied by 6?";
    
        // Extract numbers and operators
        const numbers = query.match(/\d+/g)?.map(Number);
        const operators = query.match(/plus|multiplied/g);
    
        if (numbers && operators && numbers.length === operators.length + 1) {
            // Initialize the result with the first number
            let result = numbers[0];
    
            // Loop through the operators and apply the corresponding operations
            for (let i = 0; i < operators.length; i++) {
                if (operators[i] === "plus") {
                    result += numbers[i + 1]; // Add the next number
                } else if (operators[i] === "multiplied") {
                    result *= numbers[i + 1]; // Multiply by the next number
                }
            }
    
            const expectedResult = result; // The expected result calculated above
    
            const response: string = QueryProcessor(query); // Call your function
    
            // Compare the response to the expected result
            expect(response).toBe(expectedResult.toString());
        } else {
            throw new Error('Failed to extract numbers and operators from the query.');
        }
    });
             
});

