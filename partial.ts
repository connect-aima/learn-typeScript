type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>
let nextUserId = 1

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
    // Find the user in the array by the id
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    // Use Object.assign to update the found user in place. 
    Object.assign(foundUser, updates)
}
function addNewUser(newUser: any): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)