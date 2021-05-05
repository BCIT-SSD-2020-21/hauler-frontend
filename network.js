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

//======================================To get user's posts ==========================================//
export async function getAllPosts(uid) {
    try {
      const res = await axios.get(`${url}/api/user/${uid}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

//==================================== To post Moving service details ===================================//

export async function postItem(
  uid,
  postHeading,
  description,
  selectedweight,
  selectedquantity,
  contactPerson,
  phoneNumber,
  streetAddress,
  city,
  province,
  zipCode,
  specialInstructions,
  sliderValue,
  dropOffContactPerson,
  dropOffPhoneNumber,
  dropOffStreetAddress,
  dropOffCity,
  dropOffProvince,
  dropOffZipCode,
  dropOffSpecialInstructions
){
    const res = await axios.post(`${url}/api/user/${uid}`, {
      postHeading: postHeading,
      description: description,
      selectedweight: selectedweight,
      selectedquantity: selectedquantity,
      contactPerson: contactPerson,
      phoneNumber: phoneNumber,
      streetAddress: streetAddress,
      city: city,
      province: province,
      zipCode: zipCode,
      specialInstructions: specialInstructions,
      sliderValue: sliderValue,
      dropOffContactPerson: dropOffContactPerson,
      dropOffPhoneNumber: dropOffPhoneNumber,
      dropOffStreetAddress: dropOffStreetAddress,
      dropOffCity: dropOffCity,
      dropOffProvince: dropOffProvince,
      dropOffZipCode: dropOffZipCode,
      dropOffSpecialInstructions: dropOffSpecialInstructions
    });
    console.log('user post created');
    return res
}