// function openpopup(){
//     document.getElementById("popupContainer").style.display="block"
//     document.getElementById("overlay").style.display="block"
// } 
// function closepopup(){
//     document.getElementById("popupContainer").style.display="none"
//     document.getElementById("overlay").style.display="none"
// }



// // the below code belongs to update page


// let form=document.getElementById("form")

// let id=localStorage.getItem("id")
// let addressid=localStorage.getItem("address Id")


// // console.log(addressid);
// // console.log(id);
// // console.log(form);

// form.addEventListener("submit",(e)=>{
// e.preventDefault();


// let name=document.getElementById("name").value
// let email=document.getElementById("email").value
// let password=document.getElementById("password").value
// let phone=document.getElementById("phone").value
// let costperday=document.getElementById("costPersDay").value
// let role=document.getElementById("role").value
// let doorno=document.getElementById("DoorNumber").value
// let street=document.getElementById("Street").value
// let landmark=document.getElementById("Landmark").value
// let district=document.getElementById("District").value
// let pincode=document.getElementById("pincode").value
// let state=document.getElementById("State").value





//   var obj={
//     id:id,
//     name:name,
//     email:email,
//     phone:phone,
//     pwd:password,
//     costPerDay:costperday,
//     role:role,

//     address:{
//       id:addressid,
//        d_no:doorno,
//        street:street,
//        landmark:landmark,
//        district:district,
//        state:state,
//        pinCode:pincode
//     }
    
//  }

//  fetch('http://localhost:8080/vendors', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(obj)
// })
//   .then(response => response.json())
//   .then(obj => {
    
//     console.log(obj);

//     localStorage.setItem("id",obj.data.id)
//     localStorage.setItem("name",obj.data.name)
//     localStorage.setItem("email",obj.data.email)
//     localStorage.setItem("phone",obj.data.phone)
//     localStorage.setItem("password",obj.data.pwd)
//     localStorage.setItem("costperday",obj.data.costPerDay)
//     localStorage.setItem("role",obj.data.role)
//     localStorage.setItem("address Id" ,obj.data.address.id)
//      localStorage.setItem("door number",obj.data.address.d_no)
//      localStorage.setItem("street",obj.data.address.street)
//      localStorage.setItem("landmark",obj.data.address.landmark)
//      localStorage.setItem("district",obj.data.address.district)
//      localStorage.setItem("state",obj.data.address.state)
//      localStorage.setItem("pin-code",obj.data.address.pinCode)
   
//   })
//   .catch((error )=> {
  
//     console.error("error")
//   });


// }
// )









// // the below code belongs to upload work



// let form1=document.getElementById("form1")
// form1.onsubmit=(e)=>{
//   e.preventDefault();
//   let work=document.getElementById("work").value
//   let doorno=document.getElementById("adDoorNumber").value
// let street=document.getElementById("adStreet").value
// let landmark=document.getElementById("adLandmark").value
// let district=document.getElementById("adDistrict").value
// let pincode=document.getElementById("adpincode").value
// let state=document.getElementById("adState").value



// var obj={
//   type:work,

//   address:{
//      d_no:doorno,
//      street:street,
//      landmark:landmark,
//      district:district,
//      state:state,
//      pinCode:pincode
//   }
  
// }

// fetch(`http://localhost:8080/work?cus_id=${localStorage.getItem("id")}`, {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json'
// },
// body: JSON.stringify(obj)
// })
// .then(response => response.json())
// .then(obj => {
  
//   console.log(obj);

 
 
// })
// .catch(error => {

//   console.error("error")
// });

// }


// // the below code belongs to customer delete
// let de=document.getElementById("delete")
// console.log(de);
// de.addEventListener("click",(e)=>{
//   e.preventDefault();


//   fetch(`http://localhost:8080/vendor?id=${localStorage.getItem("id")}`, {
// method: 'DELETE'

// })
// .then(response => response.json())
// .then(obj => {
  
//   console.log(obj);
//   if(obj.data!=null){
//     window.alert("data deleted succefully")
//   }
  
 
 
// })
// .catch(error => {

//   console.error("error")
// });


// })






// // the below code belongs for getting details

// let get = document.getElementById('fetch');
// get.addEventListener('click', (event) => {
//     event.preventDefault(); 

//   let vendorName=document.getElementById("vendor-name")
//   let vendorEmail=document.getElementById("vendor-email")
//   let vendorPassword=document.getElementById("vendor-password")
//   let vendorPhone=document.getElementById("vendor-phone")
//   let vendorfamilycount=document.getElementById("vendor-costperday")
//   let vendorRole=document.getElementById("vendor-role")
//   let vendorDno=document.getElementById("vendor-doorno")
//   let vendorLandmark=document.getElementById("vendor-landmark")
//   let vendorStreet=document.getElementById("vendor-street")
//   let vendorDistrict=document.getElementById("vendor-district")
//   let vendorPincode=document.getElementById("vendor-pincode")
//   let vendorState=document.getElementById("vendor-state")


// let vendorInfoDiv=document.getElementById("vendor-info")

//     fetch(`http://localhost:8080/vendorsById?id=${localStorage.getItem("id")}`, {
//       method: 'GET'
      
//       })
//       .then(response => response.json())
//       .then(obj => {
        
//         console.log(obj);
        
//         vendorName.textContent= obj.data.name
//         vendorEmail.textContent= obj.data.email
//         vendorPassword.textContent=obj.data.password
//         vendorPhone.textContent=obj.data.phone
//         vendorfamilycount.textContent=obj.data.costPerDay
//         vendorRole.textContent=obj.data.role

//         vendorDno.textContent= obj.data.address.d_no
//         vendorLandmark.textContent=obj.data.address.landmark
//         vendorStreet.innerHTML=obj.data.address.street
//         vendorDistrict.innerHTML=obj.data.address.district
//         vendorPincode.innerHTML=obj.data.address.pinCode
//         vendorState.innerHTML=obj.data.address.state

        
//         let display=vendorInfoDiv.classList.toggle('none')
//         if(display){
//           vendorInfoDiv.style.display="block"
//         }
//         else{
//           vendorInfoDiv.style.display='none'
//         }
       
       
       
//       })
//       .catch(error => {
      
//         console.error("error")
//       });


// });



// // the below code is for  fetching list of works


// const workContainer = document.getElementById('work-container');

// // Fetch data from the backend API
// fetch(`http://localhost:8080/allwork?id=${localStorage.getItem("id")}`,{
//     method: 'GET'
// })
//     .then(response => response.json())
//     .then(data => {

//         console.log(data);
//         console.log(data.data[0]);
//         console.log(data.data[0].type);
//         console.log(data.data[0].address.landmark);
        
//        obj= Array.from(data);
//         for(let i=0;i<=data.data.length;i++){
        

//             console.log(data.data[i].type);

//             const workWidget = document.createElement('div');
//             workWidget.classList.add('work-widget');

//             const title = document.createElement('div');
//             title.classList.add('work-title');
//             title.textContent = "Work Details ";

//             const details = document.createElement('div');
//             details.classList.add('work-details');

//             const type = document.createElement('div');
//             type.textContent = `Job Type: ${data.data[i].type}`;

//             const District = document.createElement('div');
//             District.classList.add('work-location');
//             District.textContent = `District: ${data.data[i].address.district}`;

           

//             const State = document.createElement('div');
//             State.classList.add('work-state');
//             State.textContent = `State: ${data.data[i].address.state}`;

//             const button=document.createElement("div")
//             button.classList.add('button')
//             button.innerHTML=`<button ">Apply Now</button>`


//             button.addEventListener('click', () => {
//                 // Redirect to the work details page based on workData.id
//                 window.location.href = `workpage.html?id=${data.data[i].id}`;
//             });
           

          
//             details.appendChild(type);
//             details.appendChild(District);
//             // details.appendChild(time);
//             details.appendChild(State);
//             // details.appendChild(description);
//             details.appendChild(button)
//             workWidget.appendChild(title);
//             workWidget.appendChild(details);

//             workContainer.appendChild(workWidget);
   
//      }
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });


// // the below code is belongs to logout

// function logout(){
//   localStorage.clear();
//   window.location.href="http://127.0.0.1:5501/VendorLogin.html"
// }
// const logoutButton = document.getElementById('logo');
// logoutButton.addEventListener('click', logout);










