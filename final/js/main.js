/*----------------------------------------*/
/* 音樂音效
/*----------------------------------------*/


/*----------------------------------------*/
/* 洗牌
/*----------------------------------------*/

var cards = ["image/cards/open/card_1.png","image/cards/open/card_2.png","image/cards/open/card_3.png","image/cards/open/card_4.png","image/cards/open/card_5.png","image/cards/open/card_6.png","image/cards/open/card_7.png","image/cards/open/card_8.png","image/cards/open/card_9.png","image/cards/open/card_10.png","image/cards/open/card_1.png","image/cards/open/card_2.png","image/cards/open/card_3.png","image/cards/open/card_4.png","image/cards/open/card_5.png","image/cards/open/card_6.png","image/cards/open/card_7.png","image/cards/open/card_8.png","image/cards/open/card_9.png","image/cards/open/card_10.png"];
var hanabara = ["image/cards/hanabara/hanabara_1.png","image/cards/hanabara/hanabara_2.png","image/cards/hanabara/hanabara_3.png","image/cards/hanabara/hanabara_4.png"]
function shuffle(arr) {
  var i,
      j,
      temp;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;
};



/*----------------------------------------*/
/* 計時器
/*----------------------------------------*/

var startTime = 0;
var intervalId;

function updateCounter() {
  let currentTime = Date.now();
  let msecond = ("0" + (currentTime - startTime) % 1000).substr(-3, 3);
  let counter = Math.floor((currentTime - startTime)/1000);
  let hour = ("0" + Math.floor(counter / 3600)).substr(-2, 2);
  let minute = ("0" + Math.floor((counter % 3600) / 60)).substr(-2, 2);
  let second = ("0" + Math.floor(counter % 60)).substr(-2, 2);
  document.getElementById('counter').textContent = `${hour}:${minute}:${second}`;
}

var counting = false;
var btn = document.getElementById('counterBtn');
btn.addEventListener('click', function () {
  if (counting) {
    clearInterval(intervalId);
  } else {
    startTime = Date.now();
    intervalId = setInterval(updateCounter, 15);
  }
  
  counting = !counting;
});

/*----------------------------------------*/
/* 開始之前
/*----------------------------------------*/

$('.start_bottom').on('click', function(e){
  $(this).closest('.intro').toggleClass('check');
  shuffle(cards);
  window.alert(cards);
  counting = true
  if (counting) {
    startTime = Date.now();
    intervalId = setInterval(updateCounter, 100);
  } 
  document.getElementById("point_counter").innerHTML = current_point;
  document.getElementById("card1").src = cards[0] ;
  document.getElementById("card2").src = cards[1] ;
  document.getElementById("card3").src = cards[2] ;
  document.getElementById("card4").src = cards[3] ;
  document.getElementById("card5").src = cards[4] ;
  document.getElementById("card6").src = cards[5] ;
  document.getElementById("card7").src = cards[6] ;
  document.getElementById("card8").src = cards[7] ;
  document.getElementById("card9").src = cards[8] ;
  document.getElementById("card10").src = cards[9] ;
  document.getElementById("card11").src = cards[10] ;
  document.getElementById("card12").src = cards[11] ;
  document.getElementById("card13").src = cards[12] ;
  document.getElementById("card14").src = cards[13] ;
  document.getElementById("card15").src = cards[14] ;
  document.getElementById("card16").src = cards[15] ;
  document.getElementById("card17").src = cards[16] ;
  document.getElementById("card18").src = cards[17] ;
  document.getElementById("card19").src = cards[18] ;
  document.getElementById("card20").src = cards[19] ;
  document.getElementById("ha1").src = hanabara[0] ;
  document.getElementById("ha2").src = hanabara[0] ;
  document.getElementById("ha3").src = hanabara[0] ;
  document.getElementById("ha4").src = hanabara[0] ;
  document.getElementById("ha5").src = hanabara[0] ;
  document.getElementById("ha6").src = hanabara[0] ;
  document.getElementById("ha7").src = hanabara[0] ;
  document.getElementById("ha8").src = hanabara[0] ;
  document.getElementById("ha9").src = hanabara[0] ;
  document.getElementById("ha10").src = hanabara[0] ;
  document.getElementById("ha11").src = hanabara[0] ;
  document.getElementById("ha12").src = hanabara[0] ;
  document.getElementById("ha13").src = hanabara[0] ;
  document.getElementById("ha14").src = hanabara[0] ;
  document.getElementById("ha15").src = hanabara[0] ;
  document.getElementById("ha16").src = hanabara[0] ;
  document.getElementById("ha17").src = hanabara[0] ;
  document.getElementById("ha18").src = hanabara[0] ;
  document.getElementById("ha19").src = hanabara[0] ;
  document.getElementById("ha20").src = hanabara[0] ;
});


/*----------------------------------------*/
/* 設定目錄
/*----------------------------------------*/

$('.menu .setting .setting_bottom').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
});

/*----------------------------------------*/
/* 換花色
/*----------------------------------------*/

$('.menu .setting .setting_menu .hanabara_option1').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
  document.getElementById("ha1").src = hanabara[0] ;
  document.getElementById("ha2").src = hanabara[0] ;
  document.getElementById("ha3").src = hanabara[0] ;
  document.getElementById("ha4").src = hanabara[0] ;
  document.getElementById("ha5").src = hanabara[0] ;
  document.getElementById("ha6").src = hanabara[0] ;
  document.getElementById("ha7").src = hanabara[0] ;
  document.getElementById("ha8").src = hanabara[0] ;
  document.getElementById("ha9").src = hanabara[0] ;
  document.getElementById("ha10").src = hanabara[0] ;
  document.getElementById("ha11").src = hanabara[0] ;
  document.getElementById("ha12").src = hanabara[0] ;
  document.getElementById("ha13").src = hanabara[0] ;
  document.getElementById("ha14").src = hanabara[0] ;
  document.getElementById("ha15").src = hanabara[0] ;
  document.getElementById("ha16").src = hanabara[0] ;
  document.getElementById("ha17").src = hanabara[0] ;
  document.getElementById("ha18").src = hanabara[0] ;
  document.getElementById("ha19").src = hanabara[0] ;
  document.getElementById("ha20").src = hanabara[0] ;
});

$('.menu .setting .setting_menu .hanabara_option2').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
  document.getElementById("ha1").src = hanabara[1] ;
  document.getElementById("ha2").src = hanabara[1] ;
  document.getElementById("ha3").src = hanabara[1] ;
  document.getElementById("ha4").src = hanabara[1] ;
  document.getElementById("ha5").src = hanabara[1] ;
  document.getElementById("ha6").src = hanabara[1] ;
  document.getElementById("ha7").src = hanabara[1] ;
  document.getElementById("ha8").src = hanabara[1] ;
  document.getElementById("ha9").src = hanabara[1] ;
  document.getElementById("ha10").src = hanabara[1] ;
  document.getElementById("ha11").src = hanabara[1] ;
  document.getElementById("ha12").src = hanabara[1] ;
  document.getElementById("ha13").src = hanabara[1] ;
  document.getElementById("ha14").src = hanabara[1] ;
  document.getElementById("ha15").src = hanabara[1] ;
  document.getElementById("ha16").src = hanabara[1] ;
  document.getElementById("ha17").src = hanabara[1] ;
  document.getElementById("ha18").src = hanabara[1] ;
  document.getElementById("ha19").src = hanabara[1] ;
  document.getElementById("ha20").src = hanabara[1] ;
});

$('.menu .setting .setting_menu .hanabara_option3').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
  document.getElementById("ha1").src = hanabara[2] ;
  document.getElementById("ha2").src = hanabara[2] ;
  document.getElementById("ha3").src = hanabara[2] ;
  document.getElementById("ha4").src = hanabara[2] ;
  document.getElementById("ha5").src = hanabara[2] ;
  document.getElementById("ha6").src = hanabara[2] ;
  document.getElementById("ha7").src = hanabara[2] ;
  document.getElementById("ha8").src = hanabara[2] ;
  document.getElementById("ha9").src = hanabara[2] ;
  document.getElementById("ha10").src = hanabara[2] ;
  document.getElementById("ha11").src = hanabara[2] ;
  document.getElementById("ha12").src = hanabara[2] ;
  document.getElementById("ha13").src = hanabara[2] ;
  document.getElementById("ha14").src = hanabara[2] ;
  document.getElementById("ha15").src = hanabara[2] ;
  document.getElementById("ha16").src = hanabara[2] ;
  document.getElementById("ha17").src = hanabara[2] ;
  document.getElementById("ha18").src = hanabara[2] ;
  document.getElementById("ha19").src = hanabara[2] ;
  document.getElementById("ha20").src = hanabara[2] ;
});

$('.menu .setting .setting_menu .hanabara_option4').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
  document.getElementById("ha1").src = hanabara[3] ;
  document.getElementById("ha2").src = hanabara[3] ;
  document.getElementById("ha3").src = hanabara[3] ;
  document.getElementById("ha4").src = hanabara[3] ;
  document.getElementById("ha5").src = hanabara[3] ;
  document.getElementById("ha6").src = hanabara[3] ;
  document.getElementById("ha7").src = hanabara[3] ;
  document.getElementById("ha8").src = hanabara[3] ;
  document.getElementById("ha9").src = hanabara[3] ;
  document.getElementById("ha10").src = hanabara[3] ;
  document.getElementById("ha11").src = hanabara[3] ;
  document.getElementById("ha12").src = hanabara[3] ;
  document.getElementById("ha13").src = hanabara[3] ;
  document.getElementById("ha14").src = hanabara[3] ;
  document.getElementById("ha15").src = hanabara[3] ;
  document.getElementById("ha16").src = hanabara[3] ;
  document.getElementById("ha17").src = hanabara[3] ;
  document.getElementById("ha18").src = hanabara[3] ;
  document.getElementById("ha19").src = hanabara[3] ;
  document.getElementById("ha20").src = hanabara[3] ;
});

/*----------------------------------------*/
/* 偵測卡片是否相同
/*----------------------------------------*/

var current_card = [];
var current_point = 0;
var current_card_position = [];
var same_card = false;
var recover_name = '.card';

function check_same (card1,card2){
  if(card1==card2){
    return true;
  }
  else{
    return false;
  }
}

function count_card(current_card,new_card){
  current_card.push(new_card);
  return current_card;
}

function count_position(current_card_position,position){
  current_card_position.push(position);
  return current_card_position;
}

/*----------------------------------------*/
/* 重新開始
/*----------------------------------------*/

$('.logo').on('click', function(e){
  shuffle(cards);
  current_point = 0;
  startTime = Date.now();
  intervalId = setInterval(updateCounter, 100);
  document.getElementById("point_counter").innerHTML = current_point;
  document.getElementById("card1").src = cards[0] ;
  document.getElementById("card2").src = cards[1] ;
  document.getElementById("card3").src = cards[2] ;
  document.getElementById("card4").src = cards[3] ;
  document.getElementById("card5").src = cards[4] ;
  document.getElementById("card6").src = cards[5] ;
  document.getElementById("card7").src = cards[6] ;
  document.getElementById("card8").src = cards[7] ;
  document.getElementById("card9").src = cards[8] ;
  document.getElementById("card10").src = cards[9] ;
  document.getElementById("card11").src = cards[10] ;
  document.getElementById("card12").src = cards[11] ;
  document.getElementById("card13").src = cards[12] ;
  document.getElementById("card14").src = cards[13] ;
  document.getElementById("card15").src = cards[14] ;
  document.getElementById("card16").src = cards[15] ;
  document.getElementById("card17").src = cards[16] ;
  document.getElementById("card18").src = cards[17] ;
  document.getElementById("card19").src = cards[18] ;
  document.getElementById("card20").src = cards[19] ;
  $(".card1 .card").removeClass("open");
  $(".card2 .card").removeClass("open");
  $(".card3 .card").removeClass("open");
  $(".card4 .card").removeClass("open");
  $(".card5 .card").removeClass("open");
  $(".card6 .card").removeClass("open");
  $(".card7 .card").removeClass("open");
  $(".card8 .card").removeClass("open");
  $(".card9 .card").removeClass("open");
  $(".card10 .card").removeClass("open");
  $(".card11 .card").removeClass("open");
  $(".card12 .card").removeClass("open");
  $(".card13 .card").removeClass("open");
  $(".card14 .card").removeClass("open");
  $(".card15 .card").removeClass("open");
  $(".card16 .card").removeClass("open");
  $(".card17 .card").removeClass("open");
  $(".card18 .card").removeClass("open");
  $(".card19 .card").removeClass("open");
  $(".card20 .card").removeClass("open");
});

/*----------------------------------------*/
/* 翻牌
/*----------------------------------------*/


$('.card1 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[0]);
    current_card_position=count_position(current_card_position,1)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card2 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[1]);;
    current_card_position=count_position(current_card_position,2)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card3 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[2]);
    current_card_position=count_position(current_card_position,3)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card4 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[3]);
    current_card_position=count_position(current_card_position,4)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card5 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[4]);
    current_card_position=count_position(current_card_position,5)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card6 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[5]);
    current_card_position=count_position(current_card_position,6)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card7 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[6]);
    current_card_position=count_position(current_card_position,7)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card8 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[7]);
    current_card_position=count_position(current_card_position,8)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card9 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[8]);
    current_card_position=count_position(current_card_position,9)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card10 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[9]);
    current_card_position=count_position(current_card_position,10)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card11 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[10]);
    current_card_position=count_position(current_card_position,11)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card12 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[11]);
    current_card_position=count_position(current_card_position,12)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card13 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[12]);
    current_card_position=count_position(current_card_position,13)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card14 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[13]);
    current_card_position=count_position(current_card_position,14)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card15 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[14]);
    current_card_position=count_position(current_card_position,15)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card16 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[15]);
    current_card_position=count_position(current_card_position,16)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card17 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[16]);
    current_card_position=count_position(current_card_position,17)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card18 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[17]);
    current_card_position=count_position(current_card_position,18)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card19 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card = count_card(current_card,cards[18]);
    current_card_position=count_position(current_card_position,19)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });

$('.card20 .card_back').on('click', function(e){
    $(this).closest('.card').toggleClass('open');
    current_card= count_card(current_card,cards[19]);
    current_card_position=count_position(current_card_position,20)
    if (current_card.length==2){
      same_card = check_same(current_card[0],current_card[1]);
      current_card = [];
      if (same_card){
        current_point+=1;
        document.getElementById("point_counter").innerHTML = current_point;
        current_card_position=[];
      }
      else{
        if(current_card_position[0]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[1]==1){
          $(".card1 .card").removeClass("open");
        }
        if(current_card_position[0]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[1]==2){
          $(".card2 .card").removeClass("open");
        }
        if(current_card_position[0]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[1]==3){
          $(".card3 .card").removeClass("open");
        }
        if(current_card_position[0]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[1]==4){
          $(".card4 .card").removeClass("open");
        }
        if(current_card_position[0]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[1]==5){
          $(".card5 .card").removeClass("open");
        }
        if(current_card_position[0]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[1]==6){
          $(".card6 .card").removeClass("open");
        }
        if(current_card_position[0]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[1]==7){
          $(".card7 .card").removeClass("open");
        }
        if(current_card_position[0]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[1]==8){
          $(".card8 .card").removeClass("open");
        }
        if(current_card_position[0]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[1]==9){
          $(".card9 .card").removeClass("open");
        }
        if(current_card_position[0]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==10){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[1]==11){
          $(".card11 .card").removeClass("open");
        }
        if(current_card_position[0]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[1]==12){
          $(".card12 .card").removeClass("open");
        }
        if(current_card_position[0]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[1]==13){
          $(".card13 .card").removeClass("open");
        }
        if(current_card_position[0]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[1]==14){
          $(".card10 .card").removeClass("open");
        }
        if(current_card_position[0]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[1]==15){
          $(".card15 .card").removeClass("open");
        }
        if(current_card_position[0]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[1]==16){
          $(".card16 .card").removeClass("open");
        }
        if(current_card_position[0]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[1]==17){
          $(".card17 .card").removeClass("open");
        }
        if(current_card_position[0]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[1]==18){
          $(".card18 .card").removeClass("open");
        }
        if(current_card_position[0]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[1]==19){
          $(".card19 .card").removeClass("open");
        }
        if(current_card_position[0]==20){
          $(".card20 .card").removeClass("open");
        }
        if(current_card_position[1]==20){
          $(".card20 .card").removeClass("open");
        }
        current_card_position=[];
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
      clearInterval(intervalId);
      document.getElementById('time_used').textContent = `總共花了${hour}時${minute}分${second}秒`;
    }
  });


/*----------------------------------------*/
/* 過關
/*----------------------------------------*/

$('.restart_bottom').on('click', function(e){
  $(".pass").removeClass("get");
  shuffle(cards);
  current_point = 0;
  startTime = Date.now();
  intervalId = setInterval(updateCounter, 100);
  document.getElementById("point_counter").innerHTML = current_point;
  document.getElementById("card1").src = cards[0] ;
  document.getElementById("card2").src = cards[1] ;
  document.getElementById("card3").src = cards[2] ;
  document.getElementById("card4").src = cards[3] ;
  document.getElementById("card5").src = cards[4] ;
  document.getElementById("card6").src = cards[5] ;
  document.getElementById("card7").src = cards[6] ;
  document.getElementById("card8").src = cards[7] ;
  document.getElementById("card9").src = cards[8] ;
  document.getElementById("card10").src = cards[9] ;
  document.getElementById("card11").src = cards[10] ;
  document.getElementById("card12").src = cards[11] ;
  document.getElementById("card13").src = cards[12] ;
  document.getElementById("card14").src = cards[13] ;
  document.getElementById("card15").src = cards[14] ;
  document.getElementById("card16").src = cards[15] ;
  document.getElementById("card17").src = cards[16] ;
  document.getElementById("card18").src = cards[17] ;
  document.getElementById("card19").src = cards[18] ;
  document.getElementById("card20").src = cards[19] ;
  $(".card1 .card").removeClass("open");
  $(".card2 .card").removeClass("open");
  $(".card3 .card").removeClass("open");
  $(".card4 .card").removeClass("open");
  $(".card5 .card").removeClass("open");
  $(".card6 .card").removeClass("open");
  $(".card7 .card").removeClass("open");
  $(".card8 .card").removeClass("open");
  $(".card9 .card").removeClass("open");
  $(".card10 .card").removeClass("open");
  $(".card11 .card").removeClass("open");
  $(".card12 .card").removeClass("open");
  $(".card13 .card").removeClass("open");
  $(".card14 .card").removeClass("open");
  $(".card15 .card").removeClass("open");
  $(".card16 .card").removeClass("open");
  $(".card17 .card").removeClass("open");
  $(".card18 .card").removeClass("open");
  $(".card19 .card").removeClass("open");
  $(".card20 .card").removeClass("open");
});