const getInfo=()=> {
    let userName = document.querySelector('h1').innerHTML.replace(/\s/g, '')
    let location = document.getElementsByClassName('pv-text-details__left-panel mt2')[0].querySelector("span").innerHTML.replace(/\s/g, '')
    return  { userName,location }

}
const getContactInfo =  (index)=> {
    
    return new Promise((resolve,reject)=>{
    document.getElementById("top-card-text-details-contact-info").click()
    let contactInfo = ''
    setTimeout(()=>{
        try {
            contactInfo = document.getElementsByClassName("artdeco-modal__content")[0].getElementsByClassName("pv-contact-info__ci-container")[index].querySelector("a").innerHTML.replace(/\s/g, '')
            console.log(contactInfo)
            resolve(contactInfo)
            document.getElementsByClassName("artdeco-modal__dismiss")[0].click()
        } catch (error) {
            console.log(contactInfo)
            reject("Failed to Retrive Data")
        }
    },2000)
      
})}


const logginguserData = async ()=>{

    const email = await getContactInfo(1)
        .then(data => {return data})
        .catch((err) => {return ""})

    const profileId = await getContactInfo(0)
        .then(data => {return data})
        .catch((err) => {return ""})

    const userInfo = {
            name: getInfo().userName,
            place: getInfo().location,
            contactDetails: {
                linkedIn: profileId,
                userEmail: email
            }
        }

    console.log(userInfo)
}

logginguserData()