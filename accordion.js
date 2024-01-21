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
  window.location.href = "https://twitter.com/intent/tweet?text=%23%E3%83%88%E3%82%AD%E3%82%AD%E3%83%AB%20012%20%E8%A7%A3%E8%AA%AD%E6%88%90%E5%8A%9F%0Ahttps%3A%2F%2Ft.co%2F9qHVA1gehP";
}