window.onload = function() {
  var modalFilter = document.getElementById("modal-filter");
  var buttonFilter = document.getElementById("fillter-button");
  var closeFilter = document.getElementsByClassName("close")[0];
  var closeDownload = document.getElementsByClassName("close")[1];
  var buttonDownload = document.getElementById("download-button");
  var modalDownload = document.getElementById("modal-download");

  buttonFilter.onclick = function() {
    modalFilter.style.display = "block";
  };

  buttonDownload.onclick = function() {
    modalDownload.style.display = "block";
  };

  closeFilter.onclick = function() {
    modalFilter.style.display = "none";
  };

  closeDownload.onclick = function() {
    modalDownload.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modalFilter) {
      modalFilter.style.display = "none";
    }
    else{
        if (event.target == modalDownload){
            modalDownload.style.display = "none";
        }
    }
  };
};
