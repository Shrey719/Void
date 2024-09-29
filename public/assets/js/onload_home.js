import {__lib$randRange as randRange, __lib$aboutblankcloaking as cloakCurrent} from "/assets/js/lib.js"
let cloakingURLS = [
    "https://google.com",
    "https://classroom.google.com",
    "https://bing.com",
    "https://docs.google.com"
]



if (localStorage.getItem("cloaking") == "true") {
    cloakCurrent()
}