function openCollection(collection) {
  switch(collection) {
    case 'formas':
      window.location.href = 'formas.html';
      break;
    case 'metalica':
      window.location.href = 'metalica.html';
      break;
    case 'papel':
      window.location.href = 'papel.html';
      break;
  }
}

function openModal(element) {
  const modal = document.getElementById('lampModal');
  const img = element.querySelector('img').src;
  const name = element.getAttribute('data-name');
  const description = element.getAttribute('data-description');
  const price = element.getAttribute('data-price');

  document.querySelector('.modal-img').src = img;
  document.getElementById('modalName').innerText = name;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('modalPrice').innerText = price;

  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('lampModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('lampModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
