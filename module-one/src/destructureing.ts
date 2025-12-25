// object destructuring
// array destructuring
const user = {
  id: 123,
  name: {
    firstName: 'Mahfuj',
    midleName: 'Abdullah',
    lastName: 'MIM',
  },
  gender: 'Male',
  favColour: 'Black',
};
const {
  favColour: fv,
  name: { midleName: myMidleName },
} = user;
console.log(myMidleName);

// Array Destructring
const friends = ['karim', 'Rahim', 'Mahim'];
// skipping
const [, , myBestfriend] = friends;
console.log(myBestfriend);
// !Practice 👉 Extract:

/* 
1.title
2.author.lastName as authorLastName */
const book = {
  title: 'Clean Code',
  author: {
    firstName: 'Robert',
    lastName: 'Martin',
  },
};
const {
  title: bookTitle,
  author: { lastName: authorLastName },
} = book;
console.log(bookTitle, authorLastName);
