// document.querySelector("#padre")
// for (let element of document.querySelectorAll("id")) {
//     element.addEventListener("click", e => alert(``))
// }
padre.onclick = function(event) {
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
}