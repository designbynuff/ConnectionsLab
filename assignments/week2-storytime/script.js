window.onload = () => {

    console.log("loaded");

    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");

    console.log(one);

    // Hover underline effect:
    one.addEventListener("hover", () => {
        console.log("one hovered");
        one.classList.add("hint");

    });

    // Select the span with ID "one" when clicked
    // Change the text to include Punctuation
    // Add a class "edit"

    one.addEventListener("click", () => {
        console.log("one clicked");
        one.innerHTML = "James,";
        one.classList.add("edit");

    });

    two.addEventListener("click", () => {
        console.log("two clicked");
        two.innerHTML = "“had”,";
        two.classList.add("edit");

    });

    three.addEventListener("click", () => {
        console.log("three clicked");
        three.innerHTML = "“had had”.";
        three.classList.add("edit");

    });

    four.addEventListener("click", () => {
        console.log("four clicked");
        four.innerHTML = "“Had had”";
        four.classList.add("edit");

    });

}