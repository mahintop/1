javascript
function download() {
  const linkInput = document.getElementById("linkInput");
  const link = linkInput.value;

  // Create an invisible link element
  const downloadLink = document.createElement("a");
  downloadLink.href = link;
  downloadLink.target = "_blank";
  downloadLink.download = "";

  // Append the link element to the body and trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}