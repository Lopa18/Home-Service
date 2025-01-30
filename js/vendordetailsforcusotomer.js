// to fetch the id from url we are using URLSearchParam
const urlParams = new URLSearchParams(window.location.search);
const vendorId = urlParams.get('vendorId');
console.log(vendorId);
function customercompletedworks(){
    //redirects to new page with the vendor ID as a query parameter
    window.location.href=`CompletedWorksForCustomer.html?vendorId=${vendorId}`
}

function customerongoingdworks(){
    window.location.href=`OngoingCustomerWorks.html?vendorId=${vendorId}`
}

let name=document.getElementById("name")
let email=document.getElementById("email")
let phone=document.getElementById("phone")
let role=document.getElementById("role")
let costperday=document.getElementById("costperday")
let address=document.getElementById("fullAddress")

window.fetch(`http://localhost:8080/vendorsById?id=${vendorId}`,{
    method:"GET"
})
.then((x)=>x.json())
.then((obj)=>{
    console.log(obj);

    if(obj.status===302){
        name.textContent=obj.data.name
        email.textContent=obj.data.email
        phone.textContent=obj.data.phone
        role.textContent=obj.data.role
        costperday.textContent=obj.data.costPerDay
        let add=obj.data.address
        address.textContent=`${add.d_no} , ${add.street} , ${add.landmark} , ${add.district} ${add.pinCode} ${add.state}`
    }
})
.catch(()=>{
  //  window.alert("data not fetched")
})