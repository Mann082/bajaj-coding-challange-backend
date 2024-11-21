const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const processData = (data) => {
    const numbers = data.filter(item => !isNaN(item)); // Extract numbers
    const alphabets = data.filter(item => isNaN(item)); // Extract alphabets
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1); // Get highest lowercase alphabet
    const isPrimeFound = numbers.some(num => isPrime(parseInt(num, 10))); // Check if any prime exists

    let output={};
    if(numbers && numbers.length!=0)output.number

    return { numbers, alphabets, highestLowercaseAlphabet, isPrimeFound };
};

const parseJsonString = (jsonString) => {
    try {
        const parsed = JSON.parse(jsonString);
        return { isValid: true, data: parsed };
    } catch (error) {
        return { isValid: false, error: "Invalid JSON string" };
    }
};

module.exports = { parseJsonString, isPrime, processData };

