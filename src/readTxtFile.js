export function readTxtFile(file, callback) {
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.overrideMimeType("application/json");
  xmlHttpRequest.open("GET", file, false);
  xmlHttpRequest.onreadystatechange =
    function() {
      if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status == "200") {
        callback(xmlHttpRequest.responseText);
      }
    };

  xmlHttpRequest.send();
}
