const incrBtn = document.getElementById('increment-btn');
const decrBtn = document.getElementById('decrement-btn')
const saveBtn = document.getElementById('saveBtn');
const display = document.getElementById('count-el');
const update = document.getElementById('update')
let count = 0;


incrBtn.addEventListener('click', () => {
  count++;
  display.textContent = count;
})

decrBtn.addEventListener('click', () => {
  if(count > 0) {
    count--;
  }
   display.textContent = count;
 })
 
saveBtn.addEventListener('click', () => {
  update.style.display = 'block';
  update.textContent += ` ${count} -`;
  count = 0;
  display.textContent = count;
})