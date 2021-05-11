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
    const res = await axios.get(`${url}/api/posts/user/${uid}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//==================================== To post Moving and errands service details ===================================//

export async function postItem(
  uid,
  service,
  postHeading,
  description,
  selectedweight,
  selectedquantity,
   image,
   sliderValue,
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
  distance
) 
{
  try{
  const res = await axios.post(`${url}/api/posts`, {
    userId: uid,
    service: service,
    postHeading: postHeading,
    postDescription: description,
    loadWeight: selectedweight,
    numberOfItems: selectedquantity,
    imageUrl: "https://cdn.apartmenttherapy.info/image/upload/v1558596110/at/archive/e06c0d4c7d9800f5d664133bf5185b850372f018.jpg",
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
    distance:distance
  });
  console.log('user post created');
  return res
}catch(err){
  console.log(err)
}
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

//=============================== To get post by uid and service ====================================//
export async function getPostsByIdAndLocation(uid, location) {
  try {
    const res = await axios.get(`${url}/api/posts/user/location/${uid}/${location}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//=============================== To get post by uid and location ===================================//
export async function getPostsByIdAndService(uid, service) {
  try {
    const res = await axios.get(`${url}/api/posts/user/service/${uid}/${service}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//============================= To get service provider profile ====================================//
export async function getOneServiceProvider(uid) {
  try {
    const res = await axios.get(`${url}/api/service-providers/${uid}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}