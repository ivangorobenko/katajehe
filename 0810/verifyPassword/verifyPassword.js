class Fail {
    constructor(message) {
        this.message = message;
    }
}

class Success {}

const hasHashTag = password => {
    return password.includes("#") ? new Fail("should ont contain #") : new Success();
};

const hasNoNumber = password => {
    const regex = new RegExp("[0-9]", "g");
    return regex.test(password) ? new Success() : new Fail("should contain numbers");
};

const allRules = [hasHashTag, hasNoNumber];

export const isValidPassword = password => {
    return allRules.map(rule => rule(password)).filter(r => r instanceof Fail);
};

