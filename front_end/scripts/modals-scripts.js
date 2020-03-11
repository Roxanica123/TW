window.onload = function() {
  var modalFilter = document.getElementById("modal-filter");
  var buttonFilter = document.getElementById("fillter-button");
  var closeFilter = document.getElementsByClassName("close")[0];
  var closeDownload = document.getElementsByClassName("close")[1];
  var buttonDownload = document.getElementById("download-button");
  var modalDownload = document.getElementById("modal-download");
  var pageWrapper = document.getElementById("page-wrapper");
  
  buttonFilter.onclick = function() {
    modalFilter.style.display = "block";
    pageWrapper.style.webkitFilter = "blur(5px) grayscale(50%)";
  };

  buttonDownload.onclick = function() {
    modalDownload.style.display = "block";
    pageWrapper.style.webkitFilter = "blur(5px) grayscale(50%)";
  };

  closeFilter.onclick = function() {
    modalFilter.style.display = "none";
    pageWrapper.style.webkitFilter = "none";

  };

  closeDownload.onclick = function() {
    modalDownload.style.display = "none";
    pageWrapper.style.webkitFilter = "none";
  };

  window.onclick = function(event) {
    if (event.target == modalFilter) {
      modalFilter.style.display = "none";
      pageWrapper.style.webkitFilter = "none";
    }
    else{
        if (event.target == modalDownload){
            modalDownload.style.display = "none";
            pageWrapper.style.webkitFilter = "none";
          }
    }
  };
};
