// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Task 1
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

// Task 2
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Task 3
for (link of menuLinks) {
    let aEl = document.createElement('a');
    aEl.setAttribute('href', link.href)
    aEl.innerText = link.text
    topMenuEl.appendChild(aEl)
}

// Task 4
let subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Task 5
let topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.tagName !== 'A') {
    return
  } else {
    console.log(event.target.innerText)
  }
  if(event.target.classList.contains('active')){
    event.target.classList.remove('active')
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return
  } 
  for(link of topMenuLinks){
    link.classList.remove('active')
  }
  event.target.classList.add('active')
  console.log(event)
  let linkName = event.target.innerText.toLowerCase()
  let linkObject;
  console.log(linkName)
  for(link of menuLinks){
    if(link.text !== linkName){
      continue;
    } else {
      linkObject = link // I want to be able to access this object later to build the subMenu
      if(link.subLinks){
        showingSubMenu = true;
      } else {
        showingSubMenu = false;
      }
    }
  }
  if(showingSubMenu){
    buildSubMenu(linkObject.subLinks)
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>'
  }
})

function buildSubMenu(linkArr) {
  subMenuEl.innerHTML = ''
  for(link of linkArr){
    aElement = document.createElement('a');
    aElement.setAttribute('href', link.href);
    aElement.innerText = link.text;
    subMenuEl.appendChild(aElement)

  }
}

subMenuEl.addEventListener('click', function(event){
  event.preventDefault();
  if(event.target.tagName !== 'A') {
    return
  } else {
    console.log(event.target.innerText)
  }

})