import CryptoJS from 'crypto-js';

const secretKey = 'my-unique-secret-key-007';

const encrypt = (data) => {
    // Encrypt the data using AES and the secret key
    const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
    return encryptedData;
};

const decrypt = (encryptedData) => {
    try {
        if(encryptedData){
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
            const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
            return decryptedData;
        } 
    } catch (error) {
        console.error('Decryption error:', error);
        return null; // or handle the error accordingly
    }
};

export { encrypt, decrypt };
