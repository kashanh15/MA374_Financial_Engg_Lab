



/* ControlTag Loader for Motley Fool 56f19c32-962f-44e6-b929-63e7b379738e */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.41.5","schema_version":3},"confid":"ral3af1zw","context_terms":[{"id":"L1HDZhWE","value":"prime services"},{"id":"L1HDWKx_","value":"wells fargo"},{"id":"L1HC_Eca","value":"terrorism"},{"id":"L1HDAvZp","value":"concert explosions"},{"id":"L1HDMqT9","value":"Homepage"},{"id":"L1HDQXlY","value":"rioting"},{"id":"L1HDNROV","value":"Suspect"},{"id":"lz23lnzx","value":"lz23lnzx"},{"id":"L1HDJrzp","value":"dies"},{"id":"L1HDYybg","value":"raped"},{"id":"L1HC-SRn","value":"porn"},{"id":"L1HDQFD9","value":"nationalists"},{"id":"L1Hd60WR","value":"457b"},{"id":"L1HDLxtr","value":"overdoses"},{"id":"L1HDOz4o","value":"court dingan"},{"id":"L1HDbL7W","value":"complaint"},{"id":"L1HDWsYE","value":"spicer"},{"id":"L1HDZK0x","value":"class action"},{"id":"L1HDTKbJ","value":"bruce"},{"id":"L1HDAX8d","value":"401a"},{"id":"L1HDFr6U","value":"mosque"},{"id":"L1HDa-8j","value":"casualty"},{"id":"L1HDLdyT","value":"paddock"},{"id":"L1HDBY2z","value":"school shooting"},{"id":"L1HDDVh6","value":"burns"},{"id":"L1HDTgD-","value":"harassed"},{"id":"L1HDUkDM","value":"domestic terrorism"},{"id":"L1HDb13B","value":"fidelity fidelity"},{"id":"L1HDBn44","value":"sayfullo saipov"},{"id":"L1HDWfHm","value":"fidelity fraud"},{"id":"L1HC_VhJ","value":"devin kelley"},{"id":"L1HDEszT","value":"fidelity settle"},{"id":"L1HDIg7z","value":"nuke"},{"id":"L1HDF7TR","value":"Florida"},{"id":"L1HDEIsv","value":"contraception"},{"id":"L1HDHYc8","value":"alexandria"},{"id":"L1HDRyiS","value":"raping"},{"id":"L1HDYLG5","value":"ariana grande"},{"id":"L1Hd1B3O","value":"altright"},{"id":"L1HDAEuk","value":"neo nazis"},{"id":"L1HDCoy-","value":"bombs"},{"id":"llxju1zi","value":"llxju1zi"},{"id":"L1HC9OxV","value":"allegation"},{"id":"L1HDaICr","value":"sessions testimony"},{"id":"L1HDNh7h","value":"improper"},{"id":"L1HDRDPy","value":"fidelity lawsuit"},{"id":"L1HDbhz8","value":"myers"},{"id":"L1HDRhZu","value":"manchester explosion"},{"id":"L1HDJEYD","value":"bachelor party"},{"id":"L1HC98cZ","value":"pornography"},{"id":"L1HDCYmC","value":"deaths"},{"id":"L1HDVAIR","value":"protests"},{"id":"L1HC_2qz","value":"assault"},{"id":"L1HDQ3g8","value":"bay"},{"id":"L1HDE8Hc","value":"morrow"},{"id":"L1HDb7Nm","value":"news"},{"id":"L1HDN3Yv","value":"acess"},{"id":"lclvt2d5","value":"lclvt2d5"},{"id":"L1HDAJiT","value":"harassment"},{"id":"L1HDXrav","value":"trial"},{"id":"L1HDBMn4","value":"heroin"},{"id":"L1HDKq16","value":"manager"},{"id":"L1Hds7RR","value":"burn ieika"},{"id":"L1HDMBso","value":"klan"},{"id":"L1HDHrNa","value":"Technical"},{"id":"L1HdyxrM","value":"prochoice"},{"id":"L1HDUAEW","value":"andrew andrew"},{"id":"L1HDYfW3","value":"meth"},{"id":"L1HDWmYK","value":"outages"},{"id":"L1HC-lvN","value":"erika wesson"},{"id":"L1HDbuvd","value":"markets"},{"id":"L1HDGys-","value":"midgets"},{"id":"L1HC9b5V","value":"genocide"},{"id":"L1HDOhms","value":"confederate monuments"},{"id":"llxju3pb","value":"llxju3pb"},{"id":"L1HDFRul","value":"incident"},{"id":"L1HDVkfe","value":"bridge"},{"id":"L1HDJacO","value":"fraud"},{"id":"L1HDbQh2","value":"sucks"},{"id":"L1HDGhCd","value":"sassine"},{"id":"L1HDICti","value":"evangelical"},{"id":"L1HDOBfe","value":"north korea"},{"id":"L1HDCEa2","value":"brutal"},{"id":"lqpgetc6","value":"lqpgetc6"},{"id":"L1HDVcxb","value":"ban"},{"id":"L1HDKVKo","value":"crime"},{"id":"L1HDSpMv","value":"james james"},{"id":"lpbgodbe","value":"lpbgodbe"},{"id":"L1HDDEiV","value":"403b"},{"id":"L1HDY3hj","value":"homicide"},{"id":"L1HDA7jI","value":"criminal"},{"id":"L1HDPog3","value":"bomb"},{"id":"L1HDUNoq","value":"chrysler"},{"id":"livyzbcq","value":"livyzbcq"},{"id":"L1HDD4o8","value":"pyramis"},{"id":"L1Hd8qVM","value":"primeservices"},{"id":"L1HC9tcb","value":"smith"},{"id":"L1HDIyvG","value":"stab"},{"id":"L1HDMX8M","value":"state"},{"id":"L1HDJwb_","value":"Crashes"},{"id":"L1HC-XJK","value":"missile"},{"id":"L1HDGNEw","value":"cocaine"},{"id":"L1HDRnLs","value":"gunman"},{"id":"L1Hdx_rL","value":"classaction"},{"id":"L1HDOnv6","value":"probe"},{"id":"lpbgodif","value":"lpbgodif"},{"id":"L1HDSPXJ","value":"rep compensation"},{"id":"L1HDYPeW","value":"abortion"},{"id":"L1HDTSFT","value":"plane crash"},{"id":"L1HDQLwO","value":"investigations"},{"id":"L1HC_KtS","value":"dead"},{"id":"L1HDaXIf","value":"workplace services"},{"id":"L1Hd6Az-","value":"manchesterexplosion"},{"id":"L1HDLM8z","value":"kessler"},{"id":"L1HDXmQL","value":"islamic state"},{"id":"L1HDPRf4","value":"court court"},{"id":"L1HC-Azc","value":"school"},{"id":"L1HDMvXa","value":"marijuana"},{"id":"L1HDUtlh","value":"tsunami"},{"id":"L1HDDl1E","value":"scam"},{"id":"L1HDFdS9","value":"madoff"},{"id":"L1HC_aDM","value":"explosion fatalities"},{"id":"L1HDZ0ks","value":"people shot"},{"id":"L1HDTm4H","value":"isis"},{"id":"L1HDItZo","value":"sudan"},{"id":"L1HDCtng","value":"springs"},{"id":"L1HDF2lh","value":"white nationalist"},{"id":"livyy9pi","value":"livyy9pi"},{"id":"L1HDHTVD","value":"drugs"},{"id":"L1HDZlxP","value":"testimony"},{"id":"L1HDR4Zx","value":"shots"},{"id":"L1HDEnKN","value":"jeff jeff"},{"id":"L1HDcO98","value":"devin devin"},{"id":"L1Hd08Ga","value":"alt-right"},{"id":"L1HDQd7K","value":"munich"},{"id":"L1HDW0FN","value":"gm"},{"id":"lz23louj","value":"lz23louj"},{"id":"L1HDAbqx","value":"beran"},{"id":"L1HDbcuG","value":"family office"},{"id":"L1HDXOX6","value":"pro life"},{"id":"L1HDBdzn","value":"steroids"},{"id":"L1HDLpj7","value":"supremacists"},{"id":"L1HDaiOn","value":"people people"},{"id":"L1HDAgAy","value":"Parkland"},{"id":"L1HDO5mr","value":"dakota acess"},{"id":"L1HDLBy0","value":"stephen paddock"},{"id":"L1HDDPai","value":"gang"},{"id":"L1HDaqmq","value":"serial killer"},{"id":"L1HDX6ou","value":"shot dead"},{"id":"L1HDBruG","value":"threat"},{"id":"L1HdtPbq","value":"ErikaWesson"},{"id":"L1HDUd0C","value":"nuclear"},{"id":"L1HC-hLY","value":"riot"},{"id":"L1HDL7UB","value":"Douglas"},{"id":"L1HDavtQ","value":"money"},{"id":"L1HDV5Zh","value":"white supremacy"},{"id":"llxju3qd","value":"llxju3qd"},{"id":"L1HDG3j_","value":"shot"},{"id":"L1HDN8HU","value":"grope"},{"id":"L1HDI-jM","value":"monuments"},{"id":"L1HDZZFK","value":"telemarketer"},{"id":"L1HDPjNy","value":"alt right"},{"id":"livyy_ie","value":"livyy_ie"},{"id":"L1HC_x_Q","value":"scandal"},{"id":"L1HDLHgx","value":"terror attack"},{"id":"L1HDbqeN","value":"las vegas"},{"id":"L1HDMdm0","value":"murder"},{"id":"L1HDEOds","value":"Glitches"},{"id":"L1HDNdKg","value":"Shooter"},{"id":"L1HDKlX9","value":"shareholders"},{"id":"L1HDOUuq","value":"dingan"},{"id":"L1HDYCh9","value":"betsy devos"},{"id":"L1HDA3u0","value":"jihad"},{"id":"L1HDCzoP","value":"bad"},{"id":"L1HDCR5U","value":"trump"},{"id":"L1HDD-SZ","value":"gop"},{"id":"L1HC-xrV","value":"aclu"},{"id":"L1HdwiwQ","value":"sutherlandsprings"},{"id":"L1HDcdRF","value":"life"},{"id":"L1HDE3Ut","value":"fidelity manager"},{"id":"L1HDQxbX","value":"office"},{"id":"L1HDIPVX","value":"baghdad"},{"id":"L1HC9plv","value":"multiple deaths"},{"id":"llxju4cj","value":"llxju4cj"},{"id":"L1HDRVPn","value":"explosion"},{"id":"L1HDFXDS","value":"choice"},{"id":"L1HDNMkk","value":"workplace shooting"},{"id":"L1HDZGvP","value":"desano"},{"id":"L1HDGnog","value":"harris"},{"id":"L1HDCAt7","value":"Crash"},{"id":"k_pflo0q","value":"k_pflo0q"},{"id":"L1HDKOkC","value":"a"},{"id":"L1Hd9p-r","value":"rep steve scalise"},{"id":"L1HDPK1D","value":"massacre"},{"id":"L1HDb_jl","value":"Active Active"},{"id":"L1HDSigh","value":"marilou danley"},{"id":"L1HDDggK","value":"investigation"},{"id":"L1HDaDAG","value":"control"},{"id":"L1HDBIwz","value":"baker"},{"id":"L1HDIJYF","value":"heyer"},{"id":"L1Hd9-Yt","value":"ariana gande"},{"id":"L1HDHkvZ","value":"syria"},{"id":"L1HDET10","value":"complaints"},{"id":"L1HDT5TL","value":"settlement"},{"id":"L1HDEiUo","value":"jason kessler"},{"id":"k_pflpso","value":"k_pflpso"},{"id":"L1Hd0NcH","value":"alqaeda"},{"id":"L1HDW_nU","value":"orlando shootng"},{"id":"llxju2bc","value":"llxju2bc"},{"id":"L1HC9W4s","value":"login"},{"id":"L1HDAOtg","value":"stabbed"},{"id":"L1HDZ5AD","value":"london bridge"},{"id":"L1HDbYYk","value":"incentive"},{"id":"L1HDLSTs","value":"ultrasector"},{"id":"L1HDG8fb","value":"robert chow"},{"id":"L1HDCdhn","value":"jeff sessions"},{"id":"L1HDXWka","value":"heather heyer"},{"id":"L1HDOtmr","value":"bombing"},{"id":"L1HDadYk","value":"bruderman"},{"id":"L1HDZqMw","value":"party"},{"id":"L1HDDJoX","value":"person of the year"},{"id":"L1HDcT-8","value":"al qaeda"},{"id":"L1HC-EvW","value":"active shooter"},{"id":"L1HDSJiQ","value":"xxx"},{"id":"L1HDBvoQ","value":"sex"},{"id":"L1HDGG9m","value":"shooting"},{"id":"L1HDRsQV","value":"conway"},{"id":"L1HDJ11k","value":"outage"},{"id":"L1HDLkXX","value":"settle"},{"id":"L1HDR9wh","value":"mass shooting"},{"id":"L1HDbDdp","value":"ballgame"},{"id":"L1HDO_cs","value":"alleged"},{"id":"L1HDQkpq","value":"orlando fatalities"},{"id":"L1HDS8dZ","value":"mandalay bay"},{"id":"L1HDYTsO","value":"manchester arena"},{"id":"L1HDInKV","value":"die"},{"id":"L1HDHN5R","value":"qaeda"},{"id":"lvk1w_q1","value":"lvk1w_q1"},{"id":"L1HDBjIo","value":"gunmen"},{"id":"L1HC_QQR","value":"dui"},{"id":"L1HDAlsG","value":"pascucci"},{"id":"L1HDM1mS","value":"facts"},{"id":"lpbgoecl","value":"lpbgoecl"},{"id":"L1HDU0jQ","value":"vegas"},{"id":"L1HDNHxF","value":"killed"},{"id":"lvk1xam3","value":"lvk1xam3"},{"id":"L1HDVK7L","value":"bonus"},{"id":"L1HC-IeV","value":"mass casualty"},{"id":"L1HDKImj","value":"fidelity"},{"id":"L1HDJgD-","value":"robert robert"},{"id":"L1HDTssE","value":"shot shot"},{"id":"L1HDP5zM","value":"blood money"},{"id":"L1HDYks_","value":"alternative facts"},{"id":"L1HDFxqH","value":"pope"},{"id":"L1Hd55Wb","value":"gop ballgame"},{"id":"L1HDKfJ4","value":"danley"},{"id":"L1HDX16j","value":"muslim ban"},{"id":"lvk1xapj","value":"lvk1xapj"},{"id":"L1HC_s3L","value":"orlando shooting"},{"id":"L1HDC5u2","value":"bannon"},{"id":"L1HDAzI1","value":"militia"},{"id":"L1HDZUES","value":"fidelity settlement"},{"id":"L1HduaYx","value":"neonazis"},{"id":"L1HDUZBH","value":"korea"},{"id":"L1HDPdQn","value":"title"},{"id":"L1HDFiFN","value":"suit"},{"id":"L1HC-ayk","value":"dwarf"},{"id":"L1Hd6_uM","value":"planecrash"},{"id":"L1HC9lpK","value":"overdose"},{"id":"L1HDDvdy","value":"groped"},{"id":"L1HDa0fb","value":"inappropriate gifts"},{"id":"L1HDMki-","value":"kelley"},{"id":"L1HDNXML","value":"nationalist"},{"id":"L1HDJl0g","value":"sexual"},{"id":"L1HDWZEp","value":"fidelity ruling"},{"id":"L1HDGXhj","value":"birth control"},{"id":"L1HDFHj7","value":"ruling"},{"id":"L1HDaTOe","value":"charlottesville protests"},{"id":"L1HDB7Xm","value":"drunk"},{"id":"k_pflqbv","value":"k_pflqbv"},{"id":"L1HDScUY","value":"rape"},{"id":"lz23lo-s","value":"lz23lo-s"},{"id":"lvk1w-mp","value":"lvk1w-mp"},{"id":"L1HDNsT4","value":"scandals"},{"id":"L1HC_-i1","value":"rex tillerson"},{"id":"L1HDX-dN","value":"kabul"},{"id":"L1HDBD4d","value":"methamphetamine"},{"id":"L1HDZBJs","value":"grande"},{"id":"L1HDECdy","value":"dwarves"},{"id":"L1HC-teh","value":"aids"},{"id":"L1HDHfO6","value":"hurricane"},{"id":"L1HDTy2k","value":"supremacy"},{"id":"L1Hd9tpG","value":"alexandria virginia shooting"},{"id":"k-yfzwrj","value":"k-yfzwrj"},{"id":"L1HDMMp4","value":"fake news"},{"id":"L1HDPzgT","value":"pro choice"},{"id":"L1HDblxn","value":"capital markets"},{"id":"L1HDK17L","value":"supremacist"},{"id":"L1HDV0pk","value":"fired"},{"id":"L1HC9S6R","value":"chow"},{"id":"L1HDRPsf","value":"kill"},{"id":"L1HDOOO8","value":"insurance"},{"id":"L1HDH13W","value":"military"},{"id":"L1HDCNKv","value":"worst"},{"id":"L1HDGtVD","value":"charlottesville"},{"id":"L1HDJP-f","value":"violent"},{"id":"L1HDcD4C","value":"manchester bombing"},{"id":"L1HDQq_y","value":"sayfullo sayfullo"},{"id":"L1HC_eNg","value":"fatalities"},{"id":"L1HDEygN","value":"county"},{"id":"L1HDIT8G","value":"right"},{"id":"L1HDS2RU","value":"fire"},{"id":"L1HDBzc7","value":"wikileaks"},{"id":"L1HDASjr","value":"horan"},{"id":"L1HDYs0F","value":"deadly fire"},{"id":"L1HDLYOM","value":"donovan"},{"id":"L1HDcJJl","value":"arena"},{"id":"L1HDBUwS","value":"devos"},{"id":"L1HDL2pH","value":"limbaugh"},{"id":"L1HDEYyo","value":"action"},{"id":"L1HDbUms","value":"fargo"},{"id":"L1HC_AFL","value":"terror"},{"id":"L1HDU5ip","value":"attack"},{"id":"k-6fdcoe","value":"k-6fdcoe"},{"id":"L1HDVX_e","value":"palin"},{"id":"L1HC_iVI","value":"victim"},{"id":"L1HC-N51","value":"burnieika"},{"id":"L1HDFnIT","value":"ansbach"},{"id":"L1HDI5Tw","value":"guns"},{"id":"L1HDCjDL","value":"sutherland springs"},{"id":"L1HDHCLr","value":"exploitation"},{"id":"lpbgod83","value":"lpbgod83"},{"id":"L1HDEdp5","value":"bunus"},{"id":"L1HDcYlD","value":"gifts"},{"id":"llxju23h","value":"llxju23h"},{"id":"L1HDQRuT","value":"racism"},{"id":"lqpges7x","value":"lqpges7x"},{"id":"L1HDYZoq","value":"cartel"},{"id":"L1HDKC9j","value":"killer"},{"id":"L1HDP-ye","value":"services"},{"id":"L1HC9LCe","value":"Stoneman Douglas"},{"id":"L1Hd3LxM","value":"fakenews"},{"id":"L1HDDaJE","value":"national financial"},{"id":"L1HdszPS","value":"ActiveShooter"},{"id":"L1HDM7Qz","value":"weinstein"},{"id":"L1HC93Yf","value":"glitch"},{"id":"L1HDPFso","value":"nazi"},{"id":"L1HDTZZj","value":"stumpf"},{"id":"llxju10s","value":"llxju10s"},{"id":"L1HDGA_n","value":"charitable"},{"id":"L1HDJ8CP","value":"virginia"},{"id":"L1HDObGd","value":"liberals"},{"id":"L1HDIaOW","value":"lawsuit"},{"id":"L1HC-15Q","value":"sue"},{"id":"L1HDHIZt","value":"bonuses"},{"id":"L1HDSDc7","value":"racist"},{"id":"L1HDZdbq","value":"orange county"},{"id":"L1HDYGRi","value":"white supremacists"},{"id":"L1Hd2wxL","value":"ultra sector"},{"id":"L1HDNBZC","value":"putin"},{"id":"L1HDTERn","value":"tornado"},{"id":"L1HDB3Ni","value":"terrorist"},{"id":"L1HDal8c","value":"ramming incident"},{"id":"L1HC_mGE","value":"lauer"},{"id":"L1HDPXz2","value":"harvey"},{"id":"L1HDDqFH","value":"narcotics"},{"id":"L1HDSV2b","value":"saipov"},{"id":"L1HDGSDI","value":"earthquake"},{"id":"lz23loph","value":"lz23loph"},{"id":"L1HDBQ_3","value":"aleppo"},{"id":"L1HDKvlw","value":"conservatives"},{"id":"L1Hds3Ob","value":"massc asualty"},{"id":"L1HDHwbh","value":"scams"},{"id":"L1HdyKWb","value":"shotdead"},{"id":"L1HC-7MY","value":"fisbury"},{"id":"L1HDUGjh","value":"compensation"},{"id":"L1HDUS-r","value":"abusing"},{"id":"L1HDD0ro","value":"abuse"},{"id":"L1HDFCK2","value":"sayfullo"},{"id":"L1HDQ-Nn","value":"salary"},{"id":"L1HC9hdx","value":"london attack"},{"id":"lqkay69t","value":"lqkay69t"},{"id":"L1HDZv4c","value":"gande"},{"id":"L1HDRJUF","value":"gop gop"},{"id":"L1HDRbz9","value":"b"},{"id":"L1HDVrCz","value":"gavin"},{"id":"L1HDJLAV","value":"travel ban"},{"id":"L1HDY8N4","value":"london fire"},{"id":"L1HDH7vs","value":"time"},{"id":"lvk1w-x8","value":"lvk1w-x8"},{"id":"L1HDPtZj","value":"fort myers"},{"id":"L1Hd8UFK","value":"londonbridge"},{"id":"L1HDK7w3","value":"gun"},{"id":"L1HDXcwP","value":"flood"},{"id":"k_pflpps","value":"k_pflpps"},{"id":"L1HDMR1l","value":"sec"},{"id":"L1HDSvp_","value":"violence"},{"id":"L1HDaNeQ","value":"Fidelitys"},{"id":"L1HDNnLw","value":"Wesson"},{"id":"L1HDXwZJ","value":"white nationalists"},{"id":"L1HDbIQV","value":"white supremacist"},{"id":"L1HDArLO","value":"habibullaevic"},{"id":"L1HC_6w-","value":"death"},{"id":"L1HDJVo9","value":"kkk"},{"id":"L1HDOHyr","value":"driscoll"},{"id":"L1HDC-HJ","value":"suicide"},{"id":"L1HDA_Mh","value":"gunshots"},{"id":"L1HDCIIU","value":"crisis"},{"id":"L1HDZ9aZ","value":"marseille"},{"id":"L1HDMHt8","value":"sutherland sutherland"},{"id":"L1HC9y0H","value":"solicitors"},{"id":"L1HC-pne","value":"brutality"},{"id":"L1HDa6Cw","value":"ramming ramming"},{"id":"livyzadj","value":"livyzadj"},{"id":"L1HDNx01","value":"james morrow"},{"id":"L1HDWTF9","value":"law suit"},{"id":"L1HDGb65","value":"rapist"},{"id":"L1HDXInQ","value":"gift investigation"},{"id":"L1HDZQOp","value":"andrew sassine"},{"id":"L1HDFMyF","value":"immigration"}],"publisher":{"name":"Motley Fool","active":true,"uuid":"56f19c32-962f-44e6-b929-63e7b379738e","version_bucket":"stable","id":2208},"params":{"first_party_dmp_managed":true,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":true,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"fool"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/56f19c32-962f-44e6-b929-63e7b379738e","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/56f19c32-962f-44e6-b929-63e7b379738e","consent_set":"https://consumer.krxd.net/consent/set/56f19c32-962f-44e6-b929-63e7b379738e","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/56f19c32-962f-44e6-b929-63e7b379738e","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Motley Fool","cap":255,"id":1650098,"organization_id":2208,"uid":"ral3af1zw"},"tags":[{"id":27600,"name":"Krux DTC Standard","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n  \tKrux('scrape',{'page_attr_url_path_4':{'url_path':'4'}});\n\tKrux('scrape',{'page_attr_url_path_5':{'url_path':'5'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":28852,"name":"Motley Fool DataLayer DTC","content":"<script>\n(function(){\n    var dataObj = Krux('scrape.js_global', 'dataLayer'),\n        userKeys = 'isBuyer,isEcapped',\n        omitKeys = 'first_article_in_session,url,last_article_in_session',\n        custDelimit = 'undefined',\n        prefix = 'undefined_',\n        config = {\n            'userKeys': userKeys ? userKeys.split(',') : undefined,\n            'omitKeys': omitKeys ? omitKeys.split(',') : [],\n            'customDelimited': custDelimit ? custDelimit.split(',') : undefined,\n            'caseSensitive': 'undefined' === 'true',\n            'useFullPath': 'undefined' === 'true',\n            'useLastValue': 'undefined' === 'true',\n            'convertAttrNames': []\n        };\n    if (!prefix.match(/^$|null|undefined|false/)) {\n        config.convertAttrNames.push({\n            pattern: /((?:page|user)_attr_)/,\n            replacement: '$1' + prefix\n        });\n    }\n    config.omitKeys.push(/gtm\\./);\n    Krux('ingestDataLayer', dataObj, config);\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar consent = Krux('iab:urlParams');\r\nif (kuid) {\r\nif(!consent){\r\nconsent = \"\";\r\n}\r\nvar p = location.protocol == 'https:' ? 'https:' : 'http:';\r\nvar purl = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1';\r\n(new Image()).src  = p + purl + consent; \r\n}\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":7,"name":"OpenX User Match","content":"<script>\n\n(function(){\n    var prefix = location.protocol == 'https:' ? 'https:' : 'http:' ;\n    var match_pixel = prefix + '//u.openx.net/w/1.0/cm?id=b53b3de0-a5e8-47e3-a78f-ca218d037abe&r=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=openx&partner_uid=';\n    (new Image()).src = match_pixel;\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":32,"name":"Casale (Index Exchange) user match","content":"<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n      var prefix = window.location.protocol;\n      var casale_url = '';\n      var kurl = '//beacon.krxd.net/usermatch.gif?partner=casale&partner_uid=__UID__';\n      var encode_krux_url = encodeURIComponent(prefix + kurl);\n      \n      if (prefix == \"http:\") {\n         casale_url = prefix + '//ssum.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url;\n      }\n      else if (prefix == \"https:\") { \n         casale_url = prefix + '//ssum-sec.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url; \n      }\n\n      new Image().src = casale_url;\n   }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.cee73ba6ab74e5caa8092ae34993bbaa', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
