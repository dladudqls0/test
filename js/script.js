


    $( document ).ready( function() {
        $('.question_mark_container').css('display','none');
        var now_page = document.querySelector(".now_page").innerText;
        var temp_scroll;
        //새로고침할때 맨위로
        $(window).bind('unload', function(){window.scrollTo({top:0});});
        
        window_size();
        $(window).on('resize', window_size);
        click_placebox();
        click();
        $( window ).scroll( scrollMove );

        switch (now_page){
            case 'home':
                $( '.home_page' ).css('color', '#ec1d25');
                $( '.switch' ).fadeIn(1500);
                $( '.footer' ).css('position', 'absolute');
                //처음 이미지
                $( '.img1_container' ).fadeIn(1500);
                $( '.img1_text' ).fadeIn(2200);
                $( window ).scroll( scrollMove_home );
                break;
            case 'qrcode':
                $( '.qrcode_page' ).css('color', '#ec1d25');
                $( '.footer' ).css('position', 'static');
                break;
            case 'members':
                $( '.members_page' ).css('color', '#ec1d25');
                $( '.footer' ).css('position', 'static');
                var value= $( '.passValue' ).val();
                if(value=='all'){
                    value="지역검색";
                    $( '.members_h2_box a' ).css('color', '#e05247');
                }
                else{
                    $( '.signup_place_search span' ).css('color','black');
                }
                $( '.signup_place_search span' ).text(value);
                break;
            case 'place':
                $( '.place_page' ).css('color', '#ec1d25');
                $( '.footer' ).css('position', 'static');

                $( window ).scroll( scrollMove_place );
                break;
            case 'signin':
                $( '.signin_page' ).css('color', '#ec1d25');
                $( '.footer' ).css('position', 'static');
                break;
            case 'signup':
                $( '.signup_page' ).css('color', '#ec1d25');
                $( '.footer' ).css('position', 'static');
                break;
            case 'mypage':
                $( '.mypage_page' ).css('color', '#ec1d25');
                $( '.footer' ).css('position', 'static');
                break;
            case 'mypage_edit':
                $( '.mypage_page' ).css('color', '#ec1d25');
                $( '.footer' ).css('position', 'static');
                var value= $( '.passValue' ).val();
                $( '.signup_place_search span' ).text(value);
                break;
            default:
                break;
        }

        
        $( '.question_mark' ).click( function() {
            var temp = $('.question_mark_container').css('display');
            if(temp=="none")
                $('.question_mark_container').css('display', 'block');
            else
                $('.question_mark_container').css('display','none');
            return false;
        } );
        $( '.question_mark_container' ).click( function() {
            $('.question_mark_container').css('display','none');
        } );

        

        
    } );


