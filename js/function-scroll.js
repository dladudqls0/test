//스크롤 이동시(home.html)
function scrollMove_home(){
    temp_scroll=$( this ).scrollTop();
    
    if (temp_scroll < 150){
        $( '.switch1' ).css('background-color', 'white');
        $( '.switch2' ).css('background-color', 'white');
        $( '.switch3' ).css('background-color', 'white');
    }
    if (temp_scroll < 250){
        $( '.background' ).slideDown(1500);
    }
    else if(temp_scroll < 920 ){
        $( '.switch1' ).css('background-color', '#e05247');
        $( '.switch2' ).css('background-color', 'white');
        $( '.switch3' ).css('background-color', 'white');
        $( '.text1' ).slideDown(1000);
        $( '.contentImg1' ).fadeIn(1000);
    }
    else if(temp_scroll < 1600 ){
        $( '.switch1' ).css('background-color', 'white');
        $( '.switch2' ).css('background-color', '#e05247');
        $( '.switch3' ).css('background-color', 'white');
        $( '.text2' ).slideDown(1000);
        $( '.contentImg2' ).fadeIn(1000);
        $( '.content2-text' ).fadeIn(2000);
    }
    else if(temp_scroll < 2490 ){
        $( '.switch1' ).css('background-color', 'white');
        $( '.switch2' ).css('background-color', 'white');
        $( '.switch3' ).css('background-color', '#e05247');
        $( '.text3' ).slideDown(500);
        $( '.content3-member-container' ).fadeIn(1500);
        $( '.content3-button-container' ).fadeIn(1500);
    }
    else if(temp_scroll < 2800 ){
        $( '.img2_text' ).fadeIn(1000);
        $( '.img2' ).animate({
            bottom: '20px'
        });
        $( '.img2' ).animate({
            bottom: '0px'
        });
        $( '.img2_background' ).animate({
            width: '0%'
        });
        $( '.switch1' ).css('background-color', 'white');
        $( '.switch2' ).css('background-color', 'white');
        $( '.switch3' ).css('background-color', 'white');
    }
    else{
        $( '.img3_text' ).fadeIn(1000);
        $( '.switch1' ).css('background-color', 'white');
        $( '.switch2' ).css('background-color', 'white');
        $( '.switch3' ).css('background-color', 'white');
    }
}

//스크롤 이동시(모든 페이지)
function scrollMove() {
    temp_scroll=$(this).scrollTop();
    // if ( $( this ).scrollLeft() > 0 ) {
    //     window.scrollTo({left:0});
    // }
    if ( temp_scroll > 400 ) {
        $( '.top' ).fadeIn();
    } else {
        $( '.top' ).fadeOut();
    }
}

//스크롤 이동시(place.html)
function scrollMove_place() {
    var pos1= $( '.pos1' ).offset().top -510;
    var pos2= $( '.pos2' ).offset().top -510;
    var pos3= $( '.pos3' ).offset().top -510;
    var pos4= $( '.pos4' ).offset().top -510;
    var pos5= $( '.pos5' ).offset().top -510;
    if ( $( this ).scrollTop() > pos1 && $( this ).scrollTop() < pos2) {
        $( '.pos1' ).children('div.place_card_container').slideDown(800);
        $( '.pos1' ).children('div.place_bar1').animate( { width : '40%' }, 500 );
    }
    else if ( $( this ).scrollTop() > pos2 && $( this ).scrollTop() < pos3) {
        $( '.pos2' ).children('div.place_card_container').slideDown(800);
        $( '.pos2' ).children('div.place_bar1').animate( { width : '40%' }, 500 );
    }
    else if ( $( this ).scrollTop() > pos3 && $( this ).scrollTop() < pos4) {
        $( '.pos3' ).children('div.place_card_container').slideDown(800);
        $( '.pos3' ).children('div.place_bar1').animate( { width : '40%' }, 500 );
    }
    else if ( $( this ).scrollTop() > pos4 && $( this ).scrollTop() < pos5) {
        $( '.pos4' ).children('div.place_card_container').slideDown(800);
        $( '.pos4' ).children('div.place_bar1').animate( { width : '40%' }, 500 );
    }
    else if ( $( this ).scrollTop() > pos5) {
        $( '.pos5' ).children('div.place_card_container').slideDown(800);
        $( '.pos5' ).children('div.place_bar1').animate( { width : '40%' }, 500 );
    }
}