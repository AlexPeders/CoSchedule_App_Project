const apiroot = 'http://www.dnd5eapi.co/api/'
const results = document.getElementById('results')
let p = document.createElement('p')
p.textContent = 'Try Entering the spell Magic Missile'
p.id = 'resultMsg'
results.appendChild(p)

function handleErrors(response){
  if(!response.ok){
    p=document.getElementById('resultMsg')
    const e = document.createElement('p')
    e.setAttribute('class', 'error-msg')
    e.id='resultMsg'
    e.textContent = response.statusText
    results.replaceChild(e,p)
    throw Error(response.statusText);
  }
  return response.json();
}
document.getElementById('searchButton').onclick = function(){
  //These need to be inside callback from searchButton
  const queryType = document.getElementById('searchtype').value
  const queryValue = document.getElementById('searchBox').value.toLowerCase().replace(/\s+/g, '-')
  //Should probably add some input protection here
  fetch(`${apiroot}${queryType}/${queryValue}`)
    .then(handleErrors)
    .then(response=>{
      //data parsing occurs here Data dump for now?
      //Need to detect type to dump data?
      console.log(response)
      p=document.getElementById('resultMsg')
      qdata = document.createElement('p')
      qdata.setAttribute('class', 'result-msg')
      qdata.id = 'resultMsg'
      qdata.textContent = response.desc
      results.replaceChild(qdata, p)//only want one set to display at a time
    })
    .catch(err=>{throw Error(err)})
};
document.getElementById('add').onclick = function(){
  //Someway to save user data, current search, and active data
}
document.getElementById('save').onclick = function(){
  //A slightly different method which simply changes an existing favorites
  //Both of these will likely be one POST type command
}
document.getElementById('remove').onclick = function() {
  //Someway to delete user data from its saved location
}
