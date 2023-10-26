const fs = require('node:fs/promises');
//const fs = require('node:fs').promises;
const path = require('node:path');

const contactsPath = path.join(__dirname, 'contacts.json');

// TODO: задокументувати кожну функцію
async function listContacts() {
    // ...твій код. Повертає масив контактів.
    try {
        const data = await fs.readFile('./db/contacts.json', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

listContacts()
    .then(() => console.log('Done'))
    .catch(err => console.log(err));

function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
    try {
        const data = await fs.writeFile(
            './db/contacts.json',
            name,
            email,
            phone
        );
        // .then(console.log (data)).catch(console.errror)
    } catch (err) {
        console.log(err);
    }
    // ...твій код. Повертає об'єкт доданого контакту.
}
