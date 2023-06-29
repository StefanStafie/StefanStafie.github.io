function copyToClipboard(dataToCopy, callingElement) {

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = dataToCopy;
    document.body.appendChild(tempInput);
  
    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text to the clipboard
    document.execCommand("copy");
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  
    // Show animation effect on the button
    callingElement.innerHTML = "copied";

    // Reset the button after a certain duration
    setTimeout(function () {
        callingElement.innerHTML = "copy";
    }, 3000);
  }