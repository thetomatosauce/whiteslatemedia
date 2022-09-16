var a = 0;
$(window).scroll(function () {
  var oTop = $("#whyus").offset().top - window.innerHeight;
  //   console.log(oTop);
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".client-count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 5000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            // alert("finished");
          },
        }
      );
    });
    a = 1;
  }
});
