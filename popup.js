const btn = document.getElementById('popup')
const title = document.getElementById('display')

const linkedinTabs = ['https://www.linkedin.com/in/arunima-gupta-b7bba41a0/','https://www.linkedin.com/in/isanur-sardar-a14106185/','https://www.linkedin.com/in/gourab-panigrahi-2400311a5/','https://www.linkedin.com/in/gaurav-nagpal20/']

btn.addEventListener('click',function(){
    getCurrentTab();
    console.log(getCurrentTab());
});
async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab]  = await chrome.tabs.query(queryOptions);
        title.innerHTML = tab[0].title;
        console.log(tab);
        btn.classList.add('inActive')
        title.classList.remove('inActive')

}

linkedinTabs.map((user,_index) => {
    chrome.tabs.create({
        active: true,
        url: user
    })
})