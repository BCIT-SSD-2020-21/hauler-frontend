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

//==================================== To post Moving and errands service details ===================================//

export async function postItem(
  uid,
  service,
  image,
  selectedweight,
  selectedquantity,
  postHeading,
  description,
  pickUpAddress,
  pickUpCity,
  pickUpAddressLat,
  pickUpAddressLng,
  pickContactPerson,
  pickUpPhoneNumber,
  pickUpSpecialInstructions,
  dropOffAddress,
  dropOffCity,
  dropOffAddressLat,
  dropOffAddressLng,
  dropOffContactPerson,
  dropOffPhoneNumber,
  dropOffSpecialInstructions,
  sliderValue
) {
  const res = await axios.post(`${url}/api/posts`, {
    userId: uid,
    service: service,
    postHeading: postHeading,
    postDescription: description,
    loadWeight: selectedweight,
    numberOfItems: selectedquantity,
    imageUrl: image,
    price: sliderValue,
    pickUpAddress: pickUpAddress,
    pickUpCity: pickUpCity,
    pickUpAddressLat: pickUpAddressLat,
    pickUpAddressLng: pickUpAddressLng,
    pickUpContactPerson: pickContactPerson,
    pickUpContactNumber: pickUpPhoneNumber,
    pickUpSpecialInstruction: pickUpSpecialInstructions,
    dropOffAddress: dropOffAddress,
    dropOffCity: dropOffCity,
    dropOffAddressLat: dropOffAddressLat,
    dropOffAddressLng: dropOffAddressLng,
    dropOffContactPerson: dropOffContactPerson,
    dropOffContactNumber: dropOffPhoneNumber,
    dropOffSpecialInstruction: dropOffSpecialInstructions,
  });
  console.log('user post created');
  return res
}

//==================================== To post Junk service details ===================================//

export async function postJunkItem(
  uid,
  service,
  image,
  selectedweight,
  selectedquantity,
  postHeading,
  description,
  city,
  province,
  zipCode,
  specialInstructions,
  contactPerson,
  phoneNumber,
  streetAddress,
  sliderValue
) {
  console.log(`uid:${uid},
  image : ${image},
  service: ${service},
  postHeading: ${postHeading},
  description: ${description},
  selectedweight: ${selectedweight},
  selectedquantity: ${selectedquantity},
  contactPerson: ${contactPerson},
  phoneNumber: ${phoneNumber},
  streetAddress: ${streetAddress},
  city: ${city},
  province: ${province},
  zipCode: ${zipCode},
  specialInstructions: ${specialInstructions},
  sliderValue: ${sliderValue}`)
  const res = await axios.post(`${url}/api/posts`, {
    userId: uid,
    service: service,
    postHeading: postHeading,
    postDescription: description,
    loadWeight: selectedweight,
    numberOfItems: selectedquantity,
    imageUrl: image,
    price: sliderValue,
    pickUpProvince: province,
    pickUpCity: city,
    pickUpStreetAddress: streetAddress,
    pickUpZipCode: zipCode,
    pickUpContactPerson: contactPerson,
    pickUpContactNumber: phoneNumber,
    pickUpSpecialInstruction: specialInstructions
  });
  console.log('user post created');
  return res
}

//=================================Get one User ===========================================================//
// export async function getOneUser(uid) {
//   try {
//     const res = await axios.get(`${url}/api/users/${uid}`);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// }