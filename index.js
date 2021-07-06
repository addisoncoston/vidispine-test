///  https://support.vidispine.com/space/CKB/992051473/Getting+Started+with+%40vidispine%2Fvdt-api
//// https://vidispine.github.io/vdt-api/

const api = require('@vidispine/vdt-api');
const logResponse = (response) => console.log(response.data);

const baseURL = 'http://10.217.50.111:31060/';
const username = 'admin';
const password = 'admin';
const auth = { username, password };

let users, item, allItems;

api.utils.login({baseURL, username, password})

// ITEM-VX-10439
item = 'ITEM-VX-8075'



// api.item.listItemRelation({itemId: item}).then((resp) => {

//     console.log(JSON.stringify(resp.data))

// })

// api.library.getLibrary({'libraryId' : 'LIBRARY-VX*48'}).then((resp) => {

//     console.log(resp.data)

// })

// api.item.listItem().then((resp) =>  {

//     console.log(resp.data.item[0])

// });



async function getUsers(){
    let users = await api.user.listUser(); //{ queryParams: { name: 'addison.coston' } }
    users = users.data.user
    console.log(users)

}


// api.version.getVersion().then(logResponse);
 
api.user.getUserToken({username: username, password: password}).then(logResponse);
