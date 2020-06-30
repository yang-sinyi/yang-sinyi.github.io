
var cards = ["image/cards/open/card_1.png","image/cards/open/card_2.png","image/cards/open/card_3.png","image/cards/open/card_4.png","image/cards/open/card_5.png","image/cards/open/card_6.png","image/cards/open/card_7.png","image/cards/open/card_8.png","image/cards/open/card_9.png","image/cards/open/card_10.png","image/cards/open/card_1.png","image/cards/open/card_2.png","image/cards/open/card_3.png","image/cards/open/card_4.png","image/cards/open/card_5.png","image/cards/open/card_6.png","image/cards/open/card_7.png","image/cards/open/card_8.png","image/cards/open/card_9.png","image/cards/open/card_10.png"];
var hanabara = ["image/cards/hanabara/hanabara_1.png","image/cards/hanabara/hanabara_2.png","image/cards/hanabara/hanabara_3.png","image/cards/hanabara/hanabara_4.png"];
var card_id = ["card1","card2","card3","card4","card5","card6","card7","card8","card9","card10","card11","card12","card13","card14","card15","card16","card17","card18","card19","card20"];
var ha_id = ["ha1","ha2","ha3","ha4","ha5","ha6","ha7","ha8","ha9","ha10","ha11","ha12","ha13","ha14","ha15","ha16","ha17","ha18","ha19","ha20"];
var check_card_id = [".card1 .card",".card2 .card",".card3 .card",".card4 .card",".card5 .card",".card6 .card",".card7 .card",".card8 .card",".card9 .card",".card10 .card",".card11 .card",".card12 .card",".card13 .card",".card14 .card",".card15 .card",".card16 .card",".card17 .card",".card18 .card",".card19 .card",".card20 .card"];
var current_card = [];
var current_point = 0;
var current_card_position = [];
var same_card = false;
var recover_name = '.card';

/*----------------------------------------*/
/* 洗牌
/*----------------------------------------*/

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

/*----------------------------------------*/
/* 開始之前
/*----------------------------------------*/

$('.start_bottom').on('click', function(e){
  $(this).closest('.intro').toggleClass('check');
  shuffle(cards);
  counting = true
  if (counting) {
    startTime = Date.now();
    intervalId = setInterval(updateCounter, 100);
    if (current_point==10){
      counting = false;
    }
  } 
  document.getElementById("point_counter").innerHTML = current_point;

  for(i=0;i<20;i++){
    document.getElementById(card_id[i]).src = cards[i] ;
    document.getElementById(ha_id[i]).src = hanabara[0] ;
  };
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
  for(i=0;i<20;i++){
    document.getElementById(ha_id[i]).src = hanabara[0] ;
  };
});

$('.menu .setting .setting_menu .hanabara_option2').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
  for(i=0;i<20;i++){
    document.getElementById(ha_id[i]).src = hanabara[1] ;
  };
});

$('.menu .setting .setting_menu .hanabara_option3').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
  for(i=0;i<20;i++){
    document.getElementById(ha_id[i]).src = hanabara[2] ;
  };
});

$('.menu .setting .setting_menu .hanabara_option4').on('click', function(e){
  $(this).closest('.setting').toggleClass('open');
  for(i=0;i<20;i++){
    document.getElementById(ha_id[i]).src = hanabara[3] ;
  };
});

/*----------------------------------------*/
/* 偵測卡片是否相同
/*----------------------------------------*/

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
  counting = true;
  startTime = Date.now();
  document.getElementById("point_counter").innerHTML = current_point;
  for(i=0;i<20;i++){
    document.getElementById(card_id[i]).src = cards[i] ;
    $(check_card_id[i]).removeClass("open");
  };
});

/*----------------------------------------*/
/* 翻牌
/*----------------------------------------*/

function recover_the_cards(current_card_position,check_card_id){
  for(i=0;i<20;i++){
    if(current_card_position[0]==(i+1)){
      $(check_card_id[i]).removeClass("open");
    }
    if(current_card_position[1]==(i+1)){
      $(check_card_id[i]  ).removeClass("open");
    }
  }
}

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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
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
        setTimeout(function (){
          recover_the_cards(current_card_position,check_card_id);
          current_card_position=[];
          },1000);
      }
    }
    if (current_point==10){
      $(".pass").addClass("get");
    }
  });


/*----------------------------------------*/
/* 過關
/*----------------------------------------*/

$('.restart_bottom').on('click', function(e){
  $(".pass").removeClass("get");
  shuffle(cards);
  current_point = 0;
  counting = true;
  startTime = Date.now();
  document.getElementById("point_counter").innerHTML = current_point;
  for(i=0;i<20;i++){
    document.getElementById(card_id[i]).src = cards[i] ;
    $(check_card_id[i]).removeClass("open");
  }
});