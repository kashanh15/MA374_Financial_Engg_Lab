let jQueryLoadedEvent=document.createEvent("Event");jQueryLoadedEvent.initEvent("jQuery Loaded",true,false);document.addEventListener("DOMContentLoaded",()=>{document.dispatchEvent(jQueryLoadedEvent);console.log("firing jqevent");});if(navigator.serviceWorker){navigator.serviceWorker.getRegistrations().then(function(registrations){for(let registration of registrations){registration.unregister();}});};