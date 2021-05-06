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
  service,
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
    const res = await axios.post(`${url}/api/posts`, {
            userId: uid,
            service: service,
            postHeading: postHeading,
            postDescription: description,
            loadWeight: selectedweight,
            numberOfItems: selectedquantity,
            imageUrl: "https://moversdev.com/wp-content/uploads/2019/06/9.7.-ig-e1577379582500.jpg",
            price: sliderValue,
            pickUpProvince: province,
            pickUpCity: city,
            pickUpStreetAddress: streetAddress,
            pickUpZipCode:zipCode,
            pickUpContactPerson:contactPerson,
            pickUpContactNumber: phoneNumber,
            pickUpSpecialInstruction: specialInstructions,
            dropOffProvince: dropOffProvince,
            dropOffCity: dropOffCity,
            dropOffStreetAddress: dropOffStreetAddress,
            dropOffZipCode: dropOffZipCode,
            dropOffContactPerson: dropOffContactPerson,
            dropOffContactNumber: dropOffPhoneNumber,
            dropOffSpecialInstructions: dropOffSpecialInstructions
    });
    console.log('user post created');
    return res
}