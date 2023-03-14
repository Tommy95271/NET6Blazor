export function afterStarted(blazor) {
    let targetElement = document.getElementById('quoteContainer2');
    blazor.rootComponents.add(targetElement, 'quote',
        {
            text: "Crow: I have my doubts that this movie is actually 'starring' " +
                "anybody. More like, 'camera is generally pointed at.'"
        });
}