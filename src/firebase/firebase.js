import * as firebase from 'firebase';
import { setTimeout } from 'timers';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();



export { firebase, database as default };

//Reference:
// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed/hild_moved
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         console.log(snapshot.val());
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     }); 

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'note1',
//     amount: 109500,
//     createdAt: 976123498763
// });

// //database.ref('notes/-L2JIVSfmkISWhEj3vc3').remove();

// // database.ref('notes').push({
// //     title: 'Course Topic',
// //     body: 'React Native, Angular, Python'
// // });

// // database.ref().on('value',  (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name}, is a ${val.job.title} at ${val.job.company}`);
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //     database.ref('age').set(33);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(34);
// // }, 10500);

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error:', e);
// //     });

// // database.ref().set({
// //     name: 'Sagar Dodia',
// //     age: 31,
// //     single: false,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Engineer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Newark',
// //         country: 'USA'
// //     }
// // }).then(() => {
// //     console.log('Data is saved.');
// // }).catch((e) => {
// //     console.log('This failed.', e);
// // });

// //database.ref().set('This is new data for firebase!');

// // database.ref('age').set(32);
// // database.ref('location/city').set('New York');

// // database.ref('attributes').set({
// //     height: 6,
// //     weight: 200
// // }).then(() => {
// //     console.log("Second set call worked.");
// // }).catch((e) => {
// //      console.log("Things didn't work for 2nd error: ", e);
// // });

// // database.ref().remove(()=>{
// //     console.log("Removed Data!");
// // });

// // database.ref('single')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed!');
// //     }).catch((e) => {
// //         console.log('Data wasnt removed', e);
// //     })

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seatle'
// // });