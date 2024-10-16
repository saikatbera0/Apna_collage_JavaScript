function hello() {
    console.log("inside Hello Function");
    console.log("Hello");
}
function demo() {
    console.log("Calling Hello Function");
    hello();
}
console.log("calling demo function");
demo();
console.log("Done,bye!");