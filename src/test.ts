// bad
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

// good
const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};

// bad
const items = new Array();

// good
const itemsArr = [];

// bad
function getFullNameBad(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}

// good
function getFullNameGood(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

// best
function getFullNameBest({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}