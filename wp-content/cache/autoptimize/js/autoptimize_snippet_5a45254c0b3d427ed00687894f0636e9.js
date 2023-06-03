window.addEventListener("load",function(){var wpAdminBar=document.getElementById("wpadminbar");if(wpAdminBar){var header=document.querySelector(".header");header.style.top="32px";}else{var header=document.querySelector(".header");header.style.top="0";}
const radioButtons=document.querySelectorAll('.star-rating_list span input[type="radio"]');const stars=document.querySelectorAll(".star-rating_list span label svg path");radioButtons.forEach(function(radioButton){radioButton.addEventListener("change",function(){const value=parseInt(this.value);for(let i=0;i<stars.length;i++){if(i<value){stars[i].setAttribute("fill","#000");}else{stars[i].setAttribute("fill","#fff");}}});});const progressBar=document.querySelector(".progress-bar");window.addEventListener("scroll",()=>{const scrollTop=document.documentElement.scrollTop;const scrollHeight=document.documentElement.scrollHeight;const clientHeight=document.documentElement.clientHeight;const percentScrolled=(scrollTop/(scrollHeight-clientHeight))*100;progressBar.style.width=`${percentScrolled}%`;});});$(document).ready(function(){$(".featured-products-list").slick({infinite:true,slidesToShow:4,slidesToScroll:1,dots:true,autoplay:true,autoplaySpeed:1,useTransform:true,cssEase:"linear",speed:2000,swipeToSlide:true,});});$(document).ready(function(){$(".slider-women__slides").slick({slidesToShow:1,slidesToScroll:1,infinite:true,initialSlide:0,prevArrow:$(".slider-women__arrow--prev"),nextArrow:$(".slider-women__arrow--next"),});});$(document).ready(function(){$(".pagination .page").click(function(){$(".pagination .page").removeClass("active");$(this).addClass("active");});$(".pagination .prev").click(function(){var prev=$(".pagination .active").prev();if(prev.hasClass("page")){$(".pagination .active").removeClass("active");prev.addClass("active");}});$(".pagination .next").click(function(){var next=$(".pagination .active").next();if(next.hasClass("page")){$(".pagination .active").removeClass("active");next.addClass("active");}});});jQuery(function($){if(!String.prototype.getDecimals){String.prototype.getDecimals=function(){var num=this,match=(""+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);if(!match){return 0;}
return Math.max(0,(match[1]?match[1].length:0)-(match[2]?+match[2]:0));};}
$(document.body).on("click",".plus, .minus",function(){var $qty=$(this).closest(".quantity").find(".qty"),currentVal=parseFloat($qty.val()),max=parseFloat($qty.attr("max")),min=parseFloat($qty.attr("min")),step=$qty.attr("step");if(!currentVal||currentVal===""||currentVal==="NaN")
currentVal=0;if(max===""||max==="NaN")max="";if(min===""||min==="NaN")min=0;if(step==="any"||step===""||step===undefined||parseFloat(step)==="NaN")
step=1;if($(this).is(".plus")){if(max&&currentVal>=max){$qty.val(max);}else{$qty.val((currentVal+parseInt(step)).toFixed(step.getDecimals()));}}else{if(min&&currentVal<=min){$qty.val(min);}else if(currentVal>0){$qty.val((currentVal-parseFloat(step)).toFixed(step.getDecimals()));}}
$qty.trigger("change");$("[name=update_cart]").prop({disabled:false,"aria-disabled":false,});});});$(document).ready(function(){$(".flexslider").flexslider({animation:"slide",controlNav:false,directionNav:false,slideshow:true,itemWidth:120,itemMargin:0,minItems:4,maxItems:5,start:function(slider){slider.flexAnimate(4);},});});jQuery(document).on("click",".yith-wcan a",function(e){e.preventDefault();var data={action:"get_filtered_product_count",filter_color:jQuery('[name="filter_color"]').val(),filter_size:jQuery('[name="filter_size"]').val(),};jQuery.post(yith_wcan_frontend.ajaxurl,data,function(response){jQuery("#found-posts").html(response+" kết quả tìm thấy");});});jQuery(document).ready(function($){$(".remove_from_cart_button").click(function(e){e.preventDefault();var cart_item_key=$(this).data("cart_item_key");var product_id=$(this).data("product_id");$.ajax({type:"POST",dataType:"Text",url:wc_cart_fragments_params.ajax_url,data:{action:"remove_cart_item",cart_item_key:cart_item_key,product_id:product_id,},success:function(response){$(document.body).trigger("wc_fragment_refresh");},error:function(xhr,status,error){console.log(error);},});});});