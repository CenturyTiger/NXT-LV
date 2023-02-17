$("h1").addClass("center");

$("p").addClass("center");

$('#lvUpButton').on('click', function() {
  $('#lvUpAudio')[0].play();
  setTimeout(function() {
    location.href = 'question1.html';
  }, 1400);
});
