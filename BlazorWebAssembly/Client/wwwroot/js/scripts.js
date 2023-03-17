async function showQuote() {
    let targetElement = document.getElementById('quoteContainer');
    await Blazor.rootComponents.add(targetElement, 'quote',
        {
            text: "Crow: I have my doubts that this movie is actually 'starring' " +
                "anybody. More like, 'camera is generally pointed at.'"
        });
}
export async function downloadFileFromStream(fileName, contentStreamReference) {
    const arrayBuffer = await contentStreamReference.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);

    triggerFileDownload(fileName, url);

    URL.revokeObjectURL(url);
}

export function triggerFileDownload(fileName, url) {
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = fileName ?? '';
    anchorElement.click();
    anchorElement.remove();
}