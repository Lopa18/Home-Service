

// Function to fetch and insert HTML content
function includeComponent(url, containerId) {
  fetch(url)
      .then(response => response.text())
      .then(htmlContent => {
          document.getElementById(containerId).innerHTML = htmlContent;
      })
      .catch(error => {
          console.error(`Error loading ${url}: ${error}`);
      });
}

// Include the navigation bar and sidebar components
includeComponent('hamburgurCustomerPage.html', 'navbar-container');






// --------------------------------------------------------------------------------------------------
// the below code belongs for getting details

let get = document.getElementById('fetch');
 get.addEventListener('click', (event) => {
    event.preventDefault(); 

  let customerName=document.getElementById("customer-name")
  let customerEmail=document.getElementById("customer-email")
  let customerPassword=document.getElementById("customer-password")
  let customerPhone=document.getElementById("customer-phone")
  let customerfamilycount=document.getElementById("customer-familycount")
  let customerDno=document.getElementById("customer-doorno")
  let customerLandmark=document.getElementById("customer-landmark")
  let customerStreet=document.getElementById("customer-street")
  let customerDistrict=document.getElementById("customer-district")
  let customerPincode=document.getElementById("customer-pincode")
  let customerState=document.getElementById("customer-state")


let customerInfoDiv=document.getElementById("customer-info")

    fetch(`http://localhost:8080/customer?id=${localStorage.getItem("id")}`, {
      method: 'GET'
      
      })
      .then(response => response.json())
      .then(obj => {
        
        //initialising response backend data
        console.log(obj);
        
        customerName.textContent= obj.data.name
        customerEmail.textContent= obj.data.email
        customerPassword.textContent=obj.data.pasword
        customerPhone.textContent=obj.data.phone
        customerfamilycount.textContent=obj.data.familyCount

        customerDno.textContent= obj.data.address.d_no
        customerLandmark.textContent=obj.data.address.landmark
        customerStreet.innerHTML=obj.data.address.street
        customerDistrict.innerHTML=obj.data.address.district
        customerPincode.innerHTML=obj.data.address.pinCode
        customerState.innerHTML=obj.data.address.state

        
        // let display=customerInfoDiv.classList.toggle('none')
        // if(display){
        //   customerInfoDiv.style.display="block"
        // }
        // else{
        //   customerInfoDiv.style.display='none'
        // }
       
       
       
      })
      .catch(error => {
      
        console.error("error")
      });


});