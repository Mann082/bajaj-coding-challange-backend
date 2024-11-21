const validateBase64File = (base64String) => {
    if (!base64String) {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }

    let mimeType = null;
    let base64Data = base64String;

    // Check if the string is a valid data URL
    const match = base64String.match(/^data:(.+);base64,(.+)$/);
    if (match) {
        mimeType = match[1];
        base64Data = match[2]; // Extract the base64-encoded data from the match
    } else {
        // If the string doesn't match the data URL format, assume raw base64 input
        mimeType = "application/octet-stream"; // Default to binary file type if no mime is provided
    }

    // Convert base64 string to buffer
    try {
        const buffer = Buffer.from(base64Data, 'base64');
        const fileSizeKb = buffer.length / 1024;
        
        return { file_valid: true, file_mime_type: mimeType, file_size_kb: fileSizeKb.toFixed(2) };
    } catch (error) {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }
};

module.exports = { validateBase64File };
