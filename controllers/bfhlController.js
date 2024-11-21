const { validateBase64File } = require('../utils/fileUtils');
const { processData, parseJsonString } = require('../utils/dataUtils');

const handlePostRequest = (req, res) => {
    const { input } = req.body; 
    console.log(input);
    // Expecting a single "input" field containing the JSON string

    // Validate and parse the input JSON string
    const { isValid, data, error } = parseJsonString(input);

    if (!isValid) {
        return res.status(400).json({
            is_success: false,
            message: error
        });
    }

    // Extract data and file_b64 from the parsed JSON
    const { data: jsonData, file_b64 } = data;

    // Process data array
    const { numbers, alphabets, highestLowercaseAlphabet, isPrimeFound } = processData(jsonData);

    // Validate file
    const fileValidation = validateBase64File(file_b64);

    res.status(200).json({
        is_success: true,
        user_id: process.env.USERID,
        email: process.env.EMAIL,
        roll_number: process.env.ROLLNO,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet,
        is_prime_found: isPrimeFound,
        file_valid: fileValidation.file_valid,
        file_mime_type: fileValidation.file_mime_type,
        file_size_kb: fileValidation.file_size_kb
    });
};

const handleGetRequest = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};

module.exports = { handlePostRequest, handleGetRequest };
