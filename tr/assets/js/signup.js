function gtag_report_conversion(url) { 
    var callback = function () {
        if (typeof(url) != 'undefined') { 
           window.location = url; 
        } 
    }; 
    gtag('event', 'conversion', { 'send_to': 'AW-803738712/t_-wCJHMvoMBENiooP8C', 'event_callback': callback }); 
    return false; 
}

$(function() {
    //Cookies.remove('signedup');
    if (Cookies.get('signedup') === undefined ) {
        $(".thanks-for-signing-up").hide();
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    console.log("Addomg the ;ostemer");
                    var successmessageCallback = function(mutationsList){
                        if (mutation.type == 'attributes') {
                            $(".ctct-inline-form").hide();
                            Cookies.set('signedup', 'yes');
                            if (Cookies.get('lang') == 'tr') {
                                gtag_report_conversion("/tr/thanks.html");
                            } else {
                                gtag_report_conversion("/thanks.html");
                            }
                        }
                    };
                    var observer_success_message = new MutationObserver(successmessageCallback);
                    if (Cookies.get('lang') === 'tr') {
                        observer_success_message.observe($( "#success_message_1" )[0], { attributes: true, childList: true });
                    } else {
                        observer_success_message.observe($( "#success_message_0" )[0], { attributes: true, childList: true });
                    }
                    observer.disconnect();
                }
            }
        };

        var observer = new MutationObserver(callback);
        observer.observe($( ".ctct-inline-form" )[0], { attributes: true, childList: true });
    } else {
        $(".ctct-inline-form").hide();
    }
});

$(function() {
    $("#switch_to_turkish").click(function(e) {
      e.preventDefault();
      Cookies.set('lang', 'tr');
      window.location.href = "/tr/index.html";
    });
    $("#switch_to_english").click(function(e) {
        e.preventDefault();
        Cookies.set('lang', 'en');
        window.location.href = "/index.html";
      });
  });

  