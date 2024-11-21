const validateBase64File = (base64String) => {
    if (!base64String) {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }

    const match = base64String.match(/^data:(.+);base64,(.+)$/);
    if (!match) {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }

    const mimeType = match[1];
    const base64Data = match[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const fileSizeKb = buffer.length / 1024;

    return { file_valid: true, file_mime_type: mimeType, file_size_kb: fileSizeKb.toFixed(2) };
};

module.exports = { validateBase64File };
