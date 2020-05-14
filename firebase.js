var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hamst3rwars.firebaseio.com"
});

//let auth = admin.auth();
let db = admin.firestore();


//kanske bör lägga detta i en annan fil?
let hamsters = [{"id":1,"name":"Sixten","age":1,"favFood":"ostbollar","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-1.jpg","wins":0,"defeats":0,"games":0},{"id":2,"name":"Sven","age":5,"favFood":"morot","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-2.jpg","wins":0,"defeats":0,"games":0},{"id":3,"name":"Ayla","age":2,"favFood":"majs","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-3.jpg","wins":0,"defeats":0,"games":0},{"id":4,"name":"Aleena","age":3,"favFood":"rädisor","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-4.jpg","wins":0,"defeats":0,"games":0},{"id":5,"name":"Tuss","age":1,"favFood":"ananas","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-5.jpg","wins":0,"defeats":0,"games":0},{"id":6,"name":"Zigge","age":5,"favFood":"ananas","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-6.jpg","wins":0,"defeats":0,"games":0},{"id":7,"name":"Mårten","age":4,"favFood":"sallad","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-7.jpg","wins":0,"defeats":0,"games":0},{"id":8,"name":"Frippe","age":6,"favFood":"sallad","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-8.jpg","wins":0,"defeats":0,"games":0},{"id":9,"name":"Bengt","age":5,"favFood":"rädisor","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-9.jpg","wins":0,"defeats":0,"games":0},{"id":10,"name":"Lelaah","age":5,"favFood":"sallad","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-10.jpg","wins":0,"defeats":0,"games":0},{"id":11,"name":"Kaylee","age":4,"favFood":"ananas","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-11.jpg","wins":0,"defeats":0,"games":0},{"id":12,"name":"Gnuggis","age":5,"favFood":"äpple","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-12.jpg","wins":0,"defeats":0,"games":0},{"id":13,"name":"Mumsan","age":5,"favFood":"cornflakes","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-13.jpg","wins":0,"defeats":0,"games":0},{"id":14,"name":"Loppan","age":3,"favFood":"gurka","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-14.jpg","wins":0,"defeats":0,"games":0},{"id":15,"name":"Wheelie","age":4,"favFood":"gurka","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-15.jpg","wins":0,"defeats":0,"games":0},{"id":16,"name":"Einar","age":4,"favFood":"majs","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-16.jpg","wins":0,"defeats":0,"games":0},{"id":17,"name":"Poppy","age":6,"favFood":"ruccula","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-17.jpg","wins":0,"defeats":0,"games":0},{"id":18,"name":"Bella","age":7,"favFood":"nötter","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-18.jpg","wins":0,"defeats":0,"games":0},{"id":19,"name":"Lola","age":1,"favFood":"rädisor","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-19.jpg","wins":0,"defeats":0,"games":0},{"id":20,"name":"Coco","age":2,"favFood":"sågspån","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-20.jpg","wins":0,"defeats":0,"games":0},{"id":21,"name":"Ajax","age":1,"favFood":"popcorn","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-21.jpg","wins":0,"defeats":0,"games":0},{"id":22,"name":"Skutte","age":1,"favFood":"gräs","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-22.jpg","wins":0,"defeats":0,"games":0},{"id":23,"name":"Norris","age":5,"favFood":"morot","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-23.jpg","wins":0,"defeats":0,"games":0},{"id":24,"name":"Pilen","age":4,"favFood":"sågspån","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-24.jpg","wins":0,"defeats":0,"games":0},{"id":25,"name":"Snurre","age":5,"favFood":"morot","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-25.jpg","wins":0,"defeats":0,"games":0},{"id":26,"name":"Bubblan","age":2,"favFood":"skorpor","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-26.jpg","wins":0,"defeats":0,"games":0},{"id":27,"name":"Felix","age":1,"favFood":"gräs","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-27.jpg","wins":0,"defeats":0,"games":0},{"id":28,"name":"Bixie","age":3,"favFood":"sallad","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-28.jpg","wins":0,"defeats":0,"games":0},{"id":29,"name":"Caoz","age":2,"favFood":"persilja","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-29.jpg","wins":0,"defeats":0,"games":0},{"id":30,"name":"Cirkus","age":3,"favFood":"rädisor","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-30.jpg","wins":0,"defeats":0,"games":0},{"id":31,"name":"Majsan","age":4,"favFood":"cornflakes","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-31.jpg","wins":0,"defeats":0,"games":0},{"id":32,"name":"Spånet","age":3,"favFood":"sallad","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-32.jpg","wins":0,"defeats":0,"games":0},{"id":33,"name":"Techno","age":6,"favFood":"ruccula","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-33.jpg","wins":0,"defeats":0,"games":0},{"id":34,"name":"Ninjah","age":7,"favFood":"ruccula","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-34.jpg","wins":0,"defeats":0,"games":0},{"id":35,"name":"Alma","age":5,"favFood":"ananas","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-35.jpg","wins":0,"defeats":0,"games":0},{"id":36,"name":"Molly","age":3,"favFood":"ananas","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-36.jpg","wins":0,"defeats":0,"games":0},{"id":37,"name":"Smulan","age":1,"favFood":"gräs","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-37.jpg","wins":0,"defeats":0,"games":0},{"id":38,"name":"Nisse","age":2,"favFood":"majs","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-38.jpg","wins":0,"defeats":0,"games":0},{"id":39,"name":"Fluffy","age":7,"favFood":"sallad","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-39.jpg","wins":0,"defeats":0,"games":0},{"id":40,"name":"Dart","age":3,"favFood":"morot","loves":"Running that wheeeeeeeeeeeeeeeel!","imgName":"hamster-40.jpg","wins":0,"defeats":0,"games":0}];
//Skickar till firebase db
// hamsters.forEach(obj => {

//     db.collection("hamsters").add({
//             id: obj.id,
//             name: obj.name,
//             age: obj.age,
//             imgName: obj.imgName,    
//             favFood: obj.favFood,
//             loves: obj.loves,
//             imgName: obj.imgName,
//             wins: obj.wins,
//             defeats: obj.defeats,
//             games: obj.games
//     })
// })

module.exports = { db };