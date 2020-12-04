var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
var data ={
  todo:[],
  completed:[]
}
var transport=''

document.getElementById('add').addEventListener('click', function() {
	var  value  = document.getElementById('item').value;
	if (value) {
    data.todo.push(value);
		additem(value);
		document.getElementById('item').value='';
	}

});
function removeItem() {
  var item=this.parentNode.parentNode;
  var parent =item.parentNode;
  item.remove()
  var id =parent.id
  if (id==='todo')  {
    data.todo.splice(data.todo.indexOf(val), 1)

  }
  else {
    data.completed.splice(data.todo.indexOf(val), 1)

  }

  
};

function show(e) {
  if(e.parentNode){
  console.log(e.parentNode.parentNode.parentNode.id);}
  
  if (this.parentNode){
    console.log("this.target", this);
    var itemw=this.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    var itm=this.parentNode.parentNode.textContent ;
    var inpt=document.getElementById('inpt');
    inpt.value=itm
    transport=this.parentNode.parentNode.id
  }



if( itemw==='Page1'){
  document.getElementById('Page1').style.display='none';
  document.getElementById('Page2').style.display='block';
}
else {
  if (this.parentNode)
  {}
  else
  {document.getElementById('Page1').style.display='block';
  document.getElementById('Page2').style.display='none';}
  var renewd =document.getElementById(transport);
  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;
  console.log(transport)
  while (renewd.firstChild) {
    renewd.removeChild(renewd.firstChild);
  }
  renewd.innerText=document.getElementById(transport).innerText=document.getElementById('inpt').value
  var buttons = document.createElement('div');
  buttons.classList.add('buttons');
  var updateIcon=document.createElement('i');
  updateIcon.classList.add('fas');
  updateIcon.classList.add('fa-redo');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;
  remove.addEventListener( 'click', removeItem);

  var update=document.createElement('button');
  update.classList.add('updt');
  update.appendChild(updateIcon)
  //update.innerHTML=updateSVG;
  update.addEventListener( 'click', show);

  // Add click event for removing the item

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;
  complete.addEventListener('click', completedItem)


  buttons.appendChild(remove);
  buttons.appendChild(complete);
  buttons.appendChild(update);
  renewd.appendChild(buttons);
 
  
  

};

}

function updateItem() {
  var items=this.parentNode.parentNode;
  console.log(items.childNodes[0].href)

}

function completedItem() {
  var item= this.parentNode.parentNode;
  var parent=item.parentNode;
  var id =parent.id
  var target =(id==='todo') ? document.getElementById('completed'): document.getElementById('todo');
  var val=item.innerText;
  if (id==='todo')  {
    data.todo.splice(data.todo.indexOf(val), 1)
    data.completed.push(val);

  }
  else {
    data.completed.splice(data.todo.indexOf(val), 1)
    data.todo.push(val);

  }
 
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0])
};



function additem(value){
  var  list= document.getElementById('todo');
  var a= document.createElement('a')
  var link_test=document.createTextNode(value);
  a.href='update.html'
  a.appendChild(link_test)
  
  var item = document.createElement('li');
  /*item.innerText = value;*/
  var nr=data.todo.length+data.completed.length
  item.setAttribute("id", nr)
  var buttons = document.createElement('div');
  buttons.classList.add('buttons');
  var updateIcon=document.createElement('i');
  updateIcon.classList.add('fas');
  updateIcon.classList.add('fa-redo');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;
  remove.addEventListener( 'click', removeItem);

  var update=document.createElement('button');
  update.classList.add('updt');
  update.appendChild(updateIcon)
  //update.innerHTML=updateSVG;
  update.addEventListener( 'click', show);

  // Add click event for removing the item

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;
  complete.addEventListener('click', completedItem)


  buttons.appendChild(remove);
  buttons.appendChild(complete);
  buttons.appendChild(update);
  item.appendChild(a);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
  
}