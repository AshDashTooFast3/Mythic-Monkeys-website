document.getElementById('downloadButton').addEventListener('click', function() {
    const imageSelector = document.getElementById('imageSelector');
    const selectedImage = imageSelector.value;
    
    fetch(selectedImage)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = selectedImage.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert('Image has been downloaded successfully!');
        })
        .catch(error => {
            console.error('Error downloading image:', error);
            alert('Failed to download image, try again');
        });
});
