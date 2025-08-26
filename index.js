function addData(){
  let name=document.getElementById("name").value;
  let age=document.getElementById("age").value;
  let gender=document.getElementById("gender").value;
  let courses=document.getElementById("courses").value;
  let email=document.getElementById("email").value;

  if(!name || !age || !gender || !courses || !email ){
       alert("Please Enter the Data....!");
    return;
  }
  let table= document.getElementById("userInfo").getElementsByTagName('tbody')[0];
  let newRow=table.insertRow();
    /*TO insert the data from user to  table*/
  newRow.insertCell(0).innerText=name;
  newRow.insertCell(1).innerText=age;
  newRow.insertCell(2).innerText=gender;
  newRow.insertCell(3).innerText=courses;
  newRow.insertCell(4).innerText=email;

  /*this is for Delete Button*/
   let actionCell = newRow.insertCell(5);
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    table.deleteRow(newRow.rowIndex - 1); // remove this row
  };
  actionCell.appendChild(deleteBtn);
   
/*To clear the data at user form*/

document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("gender").value="Male";
document.getElementById("courses").value="";
document.getElementById("email").value="";


 
}