
const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};
const {
    data: {
        title,
        author: {
            name: authorName,
            email: authorEmail
        }
    },

} = response;
console.log("title:", title);
console.log("authorName:", authorName);
console.log("authorEmail:", authorEmail);