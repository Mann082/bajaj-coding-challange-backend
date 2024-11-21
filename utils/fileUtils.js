const fileType = require('file-type');

const validateBase64File =async (base64String) => {
    if (!base64String) {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }

    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
    
    const fileBuffer = Buffer.from(base64Data, 'base64');

    const fileInfo = await fileType.fromBuffer(fileBuffer);

    if (fileInfo) {
        let fileValid = true;
        let fileMimeType = fileInfo.mime;
        let fileSizeKB = (fileBuffer.length / 1024).toFixed(2);
        return { file_valid: fileValid, file_mime_type: fileMimeType, file_size_kb: fileSizeKB };
    } else {
        return { file_valid: false, file_mime_type: null, file_size_kb: 0 };
    }
};

module.exports = { validateBase64File };
