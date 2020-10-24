//윈도우 사이즈 변경시
function window_size() {
    var width_size = window.outerWidth;
    if (width_size <= 510) {
        //home.html
        $('.content3-member-container div').css('width',width_size-80+"px");
        $('.content3-card-div').css('width',"55%");
        //members.html
        $('.members_card').css('width',width_size-80+"px");
        $('.members_card div').css('width',"55%");
    }
    else{
        //home.html
        $('.content3-member-container div').css('width',"420px");
        $('.content3-card-div').css('width',"60%");
        //members.html
        $('.members_card').css('width',"420px");
        $('.members_card div').css('width',"60%");
    }
    if (width_size >= 800) {
        //base.html
        $('.footerInfo1').css('display','block');
        $('.footerInfo2').css('text-align','left');
        $('.footerInfo2_img').css({'display':'inline-block', 'margin':'10px 40px 20px 80px'});
        $('.footerInfo2_font').css({'font-size':'14px', 'margin' : '0px'});
        
        //home.html
        $('.youtube1').css('width','88%');
        $('.text-fitter0').css('font-size','25px');
        $('.text-fitter1').css({'font-size':'32px','line-height':'50px'});
        $('.text-fitter2').css({'font-size':'21px','line-height':'30px'});
        $('.img1_text').css('font-size','40px');
        $('.img2').css('width','700px');
        $('.img2_text').css({'font-size':'30px','bottom':'560px'});
        $('.img3_text').css('font-size','40px');
        $('.text1_box').css('margin','60px 30px 0px 50px');
        $('.text2_box').css('margin','20px 20px 0px 50px');
        $('.content2-cardbox').css('width',"100%");
        $('.content2-subbox').css('display',"none");

        //members.html
        $('.membersImg_text').css('font-size','40px');
        $('.members_h2_link').css({'width':"50%","text-align":"right"});

        //place.html
        $('.placeImg_text').css('font-size','40px');
        $('.place_card_container').css('text-align',"left");
    }
    else {
        //base.html
        $('.footerInfo1').css('display','none');
        $('.footerInfo2').css('text-align','center');
        $('.footerInfo2_img').css({'display':'block', 'margin':'0 auto'});
        $('.footerInfo2_font').css({'font-size':'10px', 'margin' : '20px 0px'});

        //home.html
        $('.youtube1').css('width','100%');
        $('.text-fitter0').css('font-size','18px');
        $('.text-fitter1').css({'font-size':'23px','line-height':'35px'});
        $('.text-fitter2').css({'font-size':'14px','line-height':'24px'});
        $('.img1_text').css('font-size','28px');
        $('.img2').css('width','500px');
        $('.img2_text').css({'font-size':'23px','bottom':'440px'});
        $('.img3_text').css('font-size','28px');
        $('.text1_box').css('margin','25px 20px 0px 20px');
        $('.text2_box').css('margin','15px 15px 0px 15px');
        $('.content2-cardbox').css('width',"100%");
        $('.content2-subbox').css('display',"none");

        //members.html
        $('.membersImg_text').css('font-size','27px');
        $('.members_h2_link').css({'width':"100%","text-align":"left"});

        //place.html
        $('.placeImg_text').css('font-size','27px');
        $('.place_card_container').css('text-align',"center");
    }   
    
    if (width_size >= 1032) {
        //base.html
        $('.nav-link').css('display','inline');
        $('.nav-button').css('display','none');
        $('.background-nav').css('display','none');

        //home.html
        $('.content2-card-text').css('font-size','19px');
        $('.content2-card-span').css('font-size','13px');
    }
    else{
        //base.html
        $('.nav-link').css('display','none');
        $('.nav-button').css('display','inline');

        //home.html
        $('.content2-card-text').css('font-size','13px');
        $('.content2-card-span').css('font-size','9px');
    }
    if (width_size >=1380){
        //members.html
        $('.members_card_container').css('text-align','left');
        $('.members_card').css('margin','0px 0px 30px 40px');
    }
    else{
        //members.html
        $('.members_card_container').css('text-align','center');
        $('.members_card').css('margin','0px 20px 30px 20px');
    }
}