chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
    if(changeInfo.status === "complete"){

        if(tab.url.includes("linkedin.com/in/")){ 
            chrome.scripting.executeScript({
                files: ['info.js'],
                target: {
                    tabId: tabId
                }
            })
            .then(() => {
                console.log("INJECTED THE FOREGROUND SCRIPT.");
            })
            .catch(err => console.log(err));
        } 
    }
});