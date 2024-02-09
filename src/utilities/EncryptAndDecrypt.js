import CryptoJS from 'crypto-js';

const secretKey = 'my-unique-secret-key-007';

const encrypt = (data) => {
    // Encrypt the data using AES and the secret key
    const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
    return encryptedData;
};

const decrypt = (encryptedData) => {
    // Decrypt the data using AES and the secret key
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
};

export { encrypt, decrypt };
