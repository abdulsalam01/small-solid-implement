var AuthenticateUser = (function () {
    function AuthenticateUser() {
    }
    AuthenticateUser.prototype.validate = function (data) {
        if (data.email === 'SOME') {
            if (data.password === 'PASS') {
                return true;
            }
            return false;
        }
        return false;
    };
    return AuthenticateUser;
})();
var EmailValidation = (function () {
    function EmailValidation() {
    }
    EmailValidation.prototype.validate = function (data) {
        if (data.email.match('EMAILREGEX'))
            return true;
        return false;
    };
    return EmailValidation;
})();
/*
    IMPLEMENTATION SRP
*/
var data = {
    email: 'abdulsalam@mail.com',
    password: '123456789'
};
var authenticateUser = new AuthenticateUser();
var emailValidation = new EmailValidation();
//
var result = emailValidation.validate(data) ? (authenticateUser.validate(data) ? '/login' : '/wrong-data') : '/not-valid';
console.log(result);
var ScienceBook = (function () {
    function ScienceBook() {
        this.title = "Science";
        this.price = 10000;
    }
    return ScienceBook;
})();
var NewsBook = (function () {
    function NewsBook() {
        this.title = "News";
        this.price = 20000;
        this.description = "extra field!";
    }
    return NewsBook;
})();
var totalOfPrice = function (books) {
    var total = 0;
    books.reduce(function (acc, curr) {
        total = acc.price + curr.price;
        return curr;
    });
    return total;
};
/*
    IMPLEMENTATION LISKOV'S
*/
var science = new ScienceBook();
var news = new NewsBook();
var books = [science, news];
var total = totalOfPrice(books);
//
console.log(total);
