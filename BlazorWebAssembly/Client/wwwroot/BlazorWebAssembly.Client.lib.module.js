export function afterStarted(blazor) {
    let targetElement = document.getElementById('quoteContainer2');
    blazor.rootComponents.add(targetElement, 'quote',
        {
            text: "Crow: I have my doubts that this movie is actually 'starring' " +
                "anybody. More like, 'camera is generally pointed at.'"
        });
    blazor.registerCustomEventType('custompaste', {
        browserEventName: 'paste',
        createEventArgs: eventArgsCreator
    });
}

export function eventArgsCreator(event) {
    return {
        eventTimestamp: new Date(),
        pastedData: event.clipboardData.getData('text')
    };
}