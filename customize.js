const tiktokCost = 50;
const instagramCost = 50;
const youtubeCost = 50;
const facebookCost = 50;
const pinterestCost = 50;
const videosPerWeekCost = 25;
const taxRate = 1.0455;
const laborRate = 1.075;
const adsEnabledCost = 100;

var platformCost = 0;
var videosCost = 0;
var videosPerWeek = 0;
var adsCost = 0;

var adsAllowed = false;

var tiktokIncluded = false;
var instagramIncluded = false;
var youtubeIncluded = false;
var facebookIncluded = false;
var pinterestIncluded = false;

var estimatedCost = 0;
var estimatedRevenue = 0;

const totalCost = document.querySelector(".estimatedCost");
const totalRevenue = document.querySelector(".estimatedRevenue");

const tiktok = document.querySelector(".Tiktok");
const instagram = document.querySelector(".Instagram");
const youtube = document.querySelector(".Youtube");
const facebook = document.querySelector(".Facebook");
const pinterest = document.querySelector(".Pinterest");
const consistency = document.querySelector(".consistencySlider");
const consistencyText = document.querySelector(".videosPerWeekText");
const allowAds = document.querySelector(".allowAds");

consistencyText.innerHTML = videosPerWeek + " Videos Per Week";
totalCost.innerHTML = "Estimated Cost: $" + estimatedCost + " / Month";
totalRevenue.innerHTML = "Estimated Cost: $" + estimatedRevenue + " / Month";


tiktok.addEventListener("click", ()=>{
    addPlatformCost("tiktok");
});
instagram.addEventListener("click", ()=>{
    addPlatformCost("instagram");
});
youtube.addEventListener("click", ()=>{
    addPlatformCost("youtube");
});
facebook.addEventListener("click", ()=>{
    addPlatformCost("facebook");
});
pinterest.addEventListener("click", ()=>{
    addPlatformCost("pinterest");
});

function addPlatformCost(platform){
    if(platform == "tiktok"){
        tiktokIncluded = !tiktokIncluded;
        tiktok.style = tiktokIncluded ? "opacity: 1;" : "opacity: 0.5";
        platformCost += tiktokIncluded ? tiktokCost - 0.01 : -tiktokCost + 0.01;
    }
    if(platform == "youtube"){
        youtubeIncluded = !youtubeIncluded;
        youtube.style = youtubeIncluded ? "opacity: 1;" : "opacity: 0.5";
        platformCost += youtubeIncluded ? youtubeCost - 0.01 : -youtubeCost + 0.01;
    }
    if(platform == "instagram"){
        instagramIncluded = !instagramIncluded;
        instagram.style = instagramIncluded ? "opacity: 1;" : "opacity: 0.5";
        platformCost += instagramIncluded ? instagramCost - 0.01: -instagramCost + 0.01;
    }
    if(platform == "facebook"){
        facebookIncluded = !facebookIncluded;
        facebook.style = facebookIncluded ? "opacity: 1;" : "opacity: 0.5";
        platformCost += facebookIncluded ? facebookCost - 0.01 : -facebookCost + 0.01;
    }
    if(platform == "pinterest"){
        pinterestIncluded = !pinterestIncluded;
        pinterest.style = pinterestIncluded ? "opacity: 1;" : "opacity: 0.5";
        platformCost += pinterestIncluded ? pinterestCost - 0.01 : -pinterestCost + 0.01;
    }

    
    totalCost.innerHTML = "Estimated Cost: $" + ((platformCost + adsCost + videosCost) * taxRate * laborRate).toFixed(2) + " / Month";
    totalRevenue.innerHTML = "Estimated Revenue: $" + (((platformCost + adsCost + videosCost) * taxRate * laborRate) / 2.25).toFixed(2) + " / Month";
}

consistency.addEventListener("change", ()=>{
    videosPerWeek = consistency.value;

    videosCost = consistency.value * videosPerWeekCost * 1.15;
    
    consistencyText.innerHTML = videosPerWeek + " Videos Per Week";
    totalCost.innerHTML = "Estimated Cost: $" + ((platformCost + adsCost + videosCost) * taxRate * laborRate).toFixed(2) + ' / Month';
    totalRevenue.innerHTML = "Estimated Revenue: $" + (((platformCost + adsCost + videosCost) * taxRate * laborRate) / 2.25).toFixed(2) + " / Month";
});

allowAds.addEventListener("change", ()=>{
    adsAllowed = !adsAllowed;

    if(adsAllowed){
        adsCost += adsEnabledCost;
    }
    if(!adsAllowed){
        adsCost -= adsEnabledCost;
    }

    totalCost.innerHTML = "Estimated Cost: $" + ((platformCost + adsCost + videosCost) * taxRate * laborRate).toFixed(2) + ' / Month';
    totalRevenue.innerHTML = "Estimated Revenue: $" + (((platformCost + adsCost + videosCost) * taxRate * laborRate) / 2.25).toFixed(2) + " / Month";
})