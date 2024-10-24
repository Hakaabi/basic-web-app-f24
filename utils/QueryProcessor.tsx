export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "hakaabi" );
  }
  if (query.toLocaleLowerCase().includes("name")) {
    return ( "hakaabi" );
  }
  if (query.toLocaleLowerCase().includes("plus")) {
    // Extract the numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number);
    
    // Check if we have exactly two numbers
    if (numbers && numbers.length >= 2) {
        const sum = numbers[0] + numbers[1];
        
        return sum.toString(); // Convert the sum to a string and return it
    }
}
if (query.toLocaleLowerCase().includes("largest")) {
  // Extract the numbers from the query
  const numbers = query.match(/\d+/g)?.map(Number);
  
  // Check if we have numbers to compare
  if (numbers && numbers.length > 0) {
      const largest = Math.max(...numbers); // Find the largest number
      return largest.toString(); // Convert it to a string and return it
  }
}
if (query.toLocaleLowerCase().includes("both a square and a cube")) {
  // Extract the numbers from the query
  const numbers = query.match(/\d+/g)?.map(Number);
  
  // Check if each number is both a square and a cube (i.e., a perfect sixth power)
  const result = numbers?.filter(num => {
      const root = Math.pow(num, 1/6); // Take the sixth root
      return Number.isInteger(root);   // Check if it's an integer
  });

  // Return the result as a string or "None" if no such numbers
  return result?.length ? result.join(", ") : "None";
}
if (query.toLocaleLowerCase().includes("multiplied by")) {
  // Extract the numbers from the query
  const numbers = query.match(/\d+/g)?.map(Number);
  
  // Check if we have exactly two numbers
  if (numbers && numbers.length === 2) {
      const product = numbers[0] * numbers[1]; // Multiply the two numbers
      return product.toString(); // Convert the product to a string and return it
  } else {
      throw new Error('Failed to extract two numbers from the query.');
  }
}
if (query.toLocaleLowerCase().includes("minus")) {
  // Extract the numbers from the query
  const numbers = query.match(/\d+/g)?.map(Number);
  
  // Check if we have exactly two numbers
  if (numbers && numbers.length === 2) {
      const difference = numbers[0] - numbers[1]; // Subtract the second number from the first
      return difference.toString(); // Convert the difference to a string and return it
  } else {
      throw new Error('Failed to extract two numbers from the query.');
  }
}
if (query.toLocaleLowerCase().includes("are primes")) {
  // Extract the numbers from the query
  const numbers = query.match(/\d+/g)?.map(Number);
  
  // Function to check if a number is prime
  const isPrime = (num: number): boolean => {
      if (num <= 1) return false; // 0 and 1 are not prime
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false; // Found a divisor
      }
      return true; // It's prime
  };

  // Filter the prime numbers
  const primeNumbers = numbers?.filter(isPrime);
  
  // Return the result as a string or "None" if no primes found
  return primeNumbers?.length ? primeNumbers.join(", ") : "None";
}
if (query.toLocaleLowerCase().includes("to the power of")) {
  // Extract the numbers from the query
  const numbers = query.match(/\d+/g)?.map(Number);
  
  // Check if we have exactly two numbers
  if (numbers && numbers.length === 2) {
      const base = numbers[0];
      const exponent = numbers[1];
      const result = Math.pow(base, exponent); // Calculate the power
      return result.toString(); // Convert the result to a string and return it
  } else {
      throw new Error('Failed to extract base and exponent from the query.');
  }
}


  return "";
}
