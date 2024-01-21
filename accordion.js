// .s_07 .accordion_one
$(function(){
    //.accordionの中の.accordion_headerがクリックされたら
    $('.accordion .accordion_header').click(function(){
      //クリックされた.accordionの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });

var answer_list = [
  "そのふくどこでかったの？",
  "その服どこでかったの？",
  "そのふくどこで買ったの？",
  "その服どこで買ったの？",
  "そのふくどこでかったの",
  "その服どこでかったの",
  "そのふくどこで買ったの",
  "その服どこで買ったの",
  "ソノフクドコデカッタノ？",
  "ソノ服ドコデカッタノ？",
  "ソノフクドコデ買ッタノ？",
  "ソノ服ドコデ買ッタノ？",
  "ソノフクドコデカッタノ",
  "ソノ服ドコデカッタノ",
  "ソノフクドコデ買ッタノ",
  "ソノ服ドコデ買ッタノ"
]

function submitAnswer(){
  var answer = document.getElementById("answer").value;
  if (answer_list.includes(answer)) {
    window.location.href = "clear.html";
  }
}

function tweetClear(){
  window.location.href = "https://twitter.com/intent/tweet?text=ESC%C3%97TOKIQIL%0A%E3%80%90MONOLITH%EF%BC%9ARED%E3%80%91%E3%82%92%E8%A7%A3%E6%98%8E%E3%81%97%E3%81%9F%EF%BC%81";
}