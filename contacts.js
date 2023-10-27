const fs = require('node:fs/promises');
//const fs = require('node:fs').promises;
const path = require('node:path');
const { randomUUID } = require('crypto');

const contactsPath = path.join(__dirname, 'contacts.json');

// TODO: задокументувати кожну функцію
async function listContacts() {
    // ...твій код. Повертає масив контактів.

    const data = await fs.readFile('./db/contacts.json', 'utf-8');
    return data;
}

// listContacts()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contact = data.find(contact => contact.id === contactId);
    return contact || null;
}

async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    const data = await fs.readFile(contactsPath, 'utf-8');

    const index = data.findIndex(contact => contact.id === contactId);
    if (index === -1) {
        return null;
    }
    const [result] = data.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return result;
}

async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту.
    const data = await fs.readFile(contactsPath, 'utf-8');
    const newContact = {
        id: randomUUID(),
        name,
        email,
        phone,
    };
    data.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
