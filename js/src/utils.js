NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not(".group-picture img").each(function(){var e=$(this),t=e.attr("title"),i=e.parent("a");i.size()<1&&(i=e.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")),i.addClass("fancybox"),i.attr("rel","group"),t&&(i.append('<p class="image-caption">'+t+"</p>"),i.attr("title",t))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn"})},registerBackToTop:function(){var e=$(".back-to-top");$(window).on("scroll",function(){e.toggleClass("back-to-top-on",50<window.pageYOffset)}),e.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe"),a=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));function r(e){return{width:e.width(),height:e.height()}}function c(e,t){return t/e*100}e.each(function(){var e,t=this,i=$(this),n=r(i);if(0<this.src.search(a)){var o=c(n.width,n.height);i.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var s=document.createElement("div");if(s.className="fluid-vids",s.style.position="relative",s.style.marginBottom="20px",s.style.width="100%",s.style.paddingTop=o+"%",t.parentNode.insertBefore(s,t),s.appendChild(t),0<this.src.search("music.163.com"))((e=r(i)).width>n.width||e.height<n.height)&&(s.style.paddingTop=c(e.width,n.height)+"%")}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href="'+e+'"]').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&767<window.screen.width&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){this.isDesktop()&&!this.isPisces()&&$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),t=e[0],i=t.offsetWidth-t.clientWidth;return e.remove(),i},needAffix:function(){return this.isPisces()}};