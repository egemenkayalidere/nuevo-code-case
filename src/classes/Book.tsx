class Book {
    private greeting: string;

    constructor() {
        this.greeting = '1';
    }

    public list() {
        return "Hello, " + this.greeting;
    }
}