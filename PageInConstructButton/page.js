document.getElementById("firstButton").addEventListener("click", function() {
    this.style.transform = "scale(0.96)";
    this.style.boxShadow = "-1px 0px 12px 2px rgb(139, 104, 244), -1px 0px 12px 2px rgb(139, 104, 244), 0px 0px 6px 2px rgb(142, 142, 142), 0px 0px 4px 2px rgb(139, 104, 244), inset -1px 0px 14px 1px rgb(181, 181, 181), inset -1px 0px 14px 1px rgb(139, 104, 244)";
    this.style.transition = "transform 0.3s, box-shadow 0.3s";
  });
  
  document.getElementById("firstButton").addEventListener("transitionend", function() {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "";
  });

  $(document).ready(function() {
    $("a#lien1").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(2000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});