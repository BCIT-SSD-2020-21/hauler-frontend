import axios from 'axios';
import { NETWORK_URL } from '@env';

const url = NETWORK_URL;

//========================================To register user ===================================================//
export async function signUp(
    uid,
    firstName,
    lastName,
    profilePicUrl,
    // dateOfBirth,
    province,
    city,
    streetAddress,
    unitNumber,
    email,
    contactNumber,
    creditCardNumber,
    // expiryDate,
    cvv) {
    const res = await axios.post(`${url}/api/users`, {
        uid: uid,
        firstName: firstName,
        lastName: lastName,
        profilePicUrl: profilePicUrl,
        // dateOfBirth:"01/01/2000",
        province: province,
        city: city,
        streetAddress: streetAddress,
        unitNumber: unitNumber,
        email: email,
        contactNumber: contactNumber,
        creditCardNumber: creditCardNumber,
        // expiryDate:expiryDate,
        cvv: cvv
    });
    console.log('user created');
    return res
}