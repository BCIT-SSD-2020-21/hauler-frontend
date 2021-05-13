# Hauler

## Overview

<i>The software enables self-employed participants to profit from junk removal, small moving and/or courier/errand services.</i>

<strong>Project Goal</strong>

<i>The aim for the team is to achieve fucntional mobile applications (User and Service Provider) through which a user is able to create a post for the required services and a service provider is able to accpet a job. </i>

### Product description

- In the software, the dispatching technology uses a Geographical location component that will ensure that users and service providers are connected in the same regional space.  
- The application will allow users to post open contracts for services that they require to be completed.  
- The service providers would be able to accept the contract or decline and in turn allowing another service provider to take the contract.

<strong> Mainly 3 services will be provided </strong>

- Hauler Junk Removal Services
- Hauler Moving Services
- Hauler Errands Services

### Essential Feature List

#### Core Features
-   Create two separate mobile applications <strong>User & Service Provider</strong>.

    ##### User App
    - Is able to create a profile on the application.
    - Is able to create a post for all three services.
    - Is able to accept/negotiate and decline any offer provided by the service provider.
    - Is able to search a list of service providers in their geographical location.
    - Is able to save a list of jobs created by them

    ##### Service Provider App
    - Is able to create a profile on the application.
    - Is able to search a relevant post for all the services listed in their geographical area.
    - Is able to accept or submit a counter offer for a job listed by the user.
    - Is able to accept/negotiate and decline an offer by the user.

### Nice to have
- User is able to submit a review for the service provider
- An admin panel created for the company(Hauler) to execute the below fuctions
    - Approve a service provider once relevant documents are verified.
    - Is able to perform CRUD operations for a user and service provider
    - Is able to delete a post from the database
    - Is able to generate reports for a relevant
- Integration with QuickBooks for invoicing, order summary and payment methods.
- Live tracking of services and routing.

-----------------------------------------------------------------------------------------------------------------------------------------------

## Technical details

### Tech-Stack used:
- React-Native for Front-end mobile
- MongoDB for Backend Database
- Firebase for User/Service Provider Authentication
- Node.js, Express for Backend 

### Web Services
- Mongo Atlas, hosting database
- Heroku, hosting backend API
- Firebase, hosting user (client, service provider & admin) authentication credentials


### Installation instructions

#### Prerequisites
-   Node 12 LTS or higher
-   Node Package Manager (NPM) or Yarn
-   Android Emulator / iOS Simulator is installed
-   Expo CLI (Install Globally)

#### Installation
- Clone the repo
- npm install or yarn install
- npm start or yarn start
- add .env file to the root folder (Sample for .env file created in the repo for refernce)
    - Create and add API keys for FireBase Authentication (API, Auth Domain, Project Id, Storage Bucket, Messaging Sender ID and App ID)
    - Add this Heroku link to the NETWORK_URL= 

-----------------------------------------------------------------------------------------------------------------------------------------------

## Use Case Diagram

<img src="/planning/supportingDocs/UCD.png" width="1000" alt="UCD">

-----------------------------------------------------------------------------------------------------------------------------------------------

## User App Prototype

<img src="/planning/supportingDocs/UserApp.gif" width="350" alt="UserApp">

<strong> Click here for the protoype for the backend <link> </link> </strong> 

-----------------------------------------------------------------------------------------------------------------------------------------------

## Endpoints from MongoDb database

<<<<<<< HEAD
### `GET` - for all posts

 ##### `api/posts/all`
 ##### `api/posts/location/:location`
 ##### `api/posts/service/:service`
 ##### `api/posts//one/:postId`

.get('/',postController.getAll)

<hr/>

### `POST` - for all posts

 ##### `api/` - create post
 ##### `api/:postId`
 ##### `api/one/:postId`

<hr/>

### `POST` - for all responses


.post('/response/service-provider', postController.addServiceProviserResponse);
.post('/response/user', postController.addUserResponse) 


.delete ('/', postController.deleteAll)
.delete('/:postId', postController.deleteOnePost);
.delete('/response/:responseId', postController.deleteResponse) 

.get('/user/:uid', postController.getPostsByUid)
.get('/user/location/:uid/:location', postController.getPostsByIdAndLocation)
.get('/user/service/:uid/:service', postController.getPostsByIdAndService)

.get('/serviceprovider/:serviceProviderId', postController.getPostsByServiceProviderId)
.get('/serviceprovider/location/:serviceProviderId/:location', postController.getPostsByServiceProviderIdAndLocation)
.get('/serviceprovider/service/:serviceProviderId/:service', postController.getPostsByServiceProviderAndService)
.get('/response/service-provider/:serviceProviderId/:postId', postController.getResponseByServiseProviderId)


=======
### `GET`

Get all posts from the database

#### `api/posts/all`

Sample Response:
        `
        {
          {
                "price": 50,
                "totalOffers": 0,
                "show": true,
                "status": "Active",
                "_id": "609c476ae1b76d8070f4fdee",
                "userId": "xt9Kw94VkMehXbZ4hwl63Z6iSAD2",
                "service": "Junk",
                "postHeading": "junk post 1",
                "postDescription": "this is junk post",
                "loadWeight": "Light 0-20Kgs",
                "numberOfItems": 2,
                "loadImages": [
                    {
                        "imageUrl": "https://cdn.apartmenttherapy.info/image/upload/v1558596110/at/archive/e06c0d4c7d9800f5d664133bf5185b850372f018.jpg",
                        "_id": "609c476ae1b76d8070f4fdef"
                    }
                ],
                "pickUpAddress": "14269 64a Ave, Surrey, BC V3W, Canada",
                "pickUpCity": "Surrey",
                "pickUpAddressLat": 49.1208289,
                "pickUpAddressLng": -122.827293,
                "pickUpContactPerson": "person",
                "pickUpContactNumber": "123456",
                "pickUpSpecialInstruction": "instructions",
                "response": [
                    {
                        "notificationOnServiceProvider": "none",
                        "notificationOnUser": "none",
                        "serviceProviderActionButtons": false,
                        "userActionButtons": false,
                        "_id": "609c476ae1b76d8070f4fdf0",
                        "serviceProviderResponseSchema": [
                            {
                                "_id": "609c476ae1b76d8070f4fdf1",
                                "timeStamp": "2021-05-12T21:23:54.576Z"
                            }
                        ],
                        "userResponseSchema": [
                            {
                                "_id": "609c476ae1b76d8070f4fdf2",
                                "timeStamp": "2021-05-12T21:23:54.583Z"
                            }
                        ]
                    }
                ],
                "timeStamp": "2021-05-12T21:23:54.584Z",
                "__v": 0
            }
        } `
>>>>>>> 48f44c245d8008b63324d6be53532686ac843c37


## An industry project by: 

- Kulveer Brar
- Abhishek Pundir
- Mandeep Dhillon
- Owen Ow


