export function __lib$randRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function __lib$aboutblankcloaking() {
    if (location == parent.location) {
        const popup = open("about:blank", "_blank")
        if (!popup || popup.closed) {
            alert("Please enable Popups and redirects.")
        }
        const doc = popup.document;
        let iframe = popup.document.createElement("iframe")
        const style = iframe.style 
        popup.document.title = "My Drive - Google Drive"
        iframe.src = location.href
        style.position = "fixed";
        style.top = style.bottom = style.left = style.right = 0;
        style.border = style.outline = "none";
        style.width = style.height = "100%";
        doc.head.appendChild(doc.createElement("link"));
        doc.body.appendChild(iframe);
        location.replace(cloakingURLS[randRange(0, cloakingURLS.length)])   
    }
}