const user = (name, age = 18, role = "user") => {
    return {
        name: name,
        age: age,
        role: role
    };

}
console.log(user("dev"));
console.log(user("Nguyen Van A", 20, "Admin"));