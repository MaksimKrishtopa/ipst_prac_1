const countFilledValues = (obj: Record<string, unknown>): number => {
    return Object.values(obj).filter(value => value !== null && value !== undefined && value !== "").length;
};

const data = {
    name: "Alice",
    age: 20,
    gender: undefined,
    address: "",
    phone: 89234259679,
    email: "alice@example.com",
    notes: null
};

console.log(countFilledValues(data));
