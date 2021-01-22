// single responsibility
interface iUser {
    email: string;
    password?: string;
}

interface iValidate {
    validate(data: Object): boolean;
}

class AuthenticateUser implements iValidate {

    validate(data: iUser): boolean {
        if (data.email === 'abdulsalam@mail.com') {
            if (data.password === '123456789') {
                return true;
            }
            return false;
        }

        return false;
    }
}

class EmailValidation implements iValidate {
    
    validate(data: iUser): boolean {
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        if (data.email.match(regex)) return true;

        return false;
    }

}

class Handler implements iValidate {

    private validator!: iValidate;

    validate(data: Object): boolean {
        return this.validator.validate(data);
    }

    next(val: iValidate) {
        this.validator = val;
        return this;
    }

}

/*
    IMPLEMENTATION SRP
*/
const data: iUser = {email: 'abdulsalam@mail.com', password: '123456789'};
const authenticateUser = new AuthenticateUser();
const emailValidation = new EmailValidation();
const handler = new Handler();
//
const result = handler.next(emailValidation).next(authenticateUser).validate(data);
console.log(result);

// liskov substitution
interface iBook {
    title: string;
    price: number;
}

class ScienceBook implements iBook {
    title: string = "Science";
    price: number = 10000;
}

class NewsBook implements iBook {
    title: string = "News";
    price: number = 20000;
}

const totalOfPrice = (books: iBook[]) => {
    books.reduce((acc, curr) => {
        curr.price = acc.price + curr.price;
        return curr;
    });

}

/*
    IMPLEMENTATION LISKOV'S
*/
const science = new ScienceBook();
const news = new NewsBook();
const books: iBook[] = [science, news];
const total = totalOfPrice(books);
//
console.log(total);