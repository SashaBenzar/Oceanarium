export function ScrollToBlock(elName) {
    let el = document.querySelector(elName);
    el.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });
}