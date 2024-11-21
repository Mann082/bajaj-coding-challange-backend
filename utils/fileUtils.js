const fileType = require('file-type');

const validateBase64File = (base64String) => {
    if (!base64String) {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }

    // Check if the string is in data URL format
    const match = base64String.match(/^data:(.+);base64,(.+)$/);
    let base64Data = base64String;
    if (match) {
        base64Data = match[2]; // Extract the actual base64 data (remove MIME type and header)
    }

    try {
        // Convert base64 string to a buffer
        const buffer = Buffer.from(base64Data, 'base64');
        const fileSizeKb = buffer.length / 1024;

        // Use file-type to detect MIME type
        const type = fileType(buffer);

        return {
            file_valid: type ? true : false,
            file_mime_type: type ? type.mime : 'unknown',
            file_size_kb: fileSizeKb.toFixed(2),
        };
    } catch (error) {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }
};

module.exports = { validateBase64File };
