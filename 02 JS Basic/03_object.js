// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Tushar",
    "full name": "Tushar Patil",
    [mySym]: "mykey1",
    age: 18,
    location: "Kolhapur",
    email: "tushar@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday"]
}

  console.log(JsUser.email)
  console.log(JsUser["email"])
  console.log(JsUser["full name"])
  console.log(JsUser[mySym])

JsUser.email = "tushar@rediff.com"
// Object.freeze(JsUser)
JsUser.email = "tushar@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());