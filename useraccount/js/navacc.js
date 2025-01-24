async function loadPartial(id, file) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

loadPartial('navbar', 'navacc.html');
loadPartial('footer', 'footeracc.html');


