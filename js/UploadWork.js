let form=document.getElementById("form")
form.onsubmit=(e)=>{
  e.preventDefault();
  let work=document.getElementById("type").value
  let doorno=document.getElementById("DoorNumber").value
let street=document.getElementById("Street").value
let landmark=document.getElementById("Landmark").value
let district=document.getElementById("District").value
let pincode=document.getElementById("pincode").value
let state=document.getElementById("State").value



var obj={
  type:work,

  address:{
     d_no:doorno,
     street:street,
     landmark:landmark,
     district:district,
     state:state,
     pinCode:pincode
  }
  
}

fetch(`http://localhost:8080/work?cus_id=${localStorage.getItem("id")}`, {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify(obj)
})
.then(response => response.json())
.then(obj => {
  
  console.log(obj);

  if(obj.status===201){
    window.location.href="http://127.0.0.1:5501/hamburgurCustomerPage.html"
  }

 
 
})
.catch(error => {

  console.error("error")
});

}