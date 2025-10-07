(function() {
  const dragEl = document.getElementById('ex3_element');
  const source = document.getElementById('ex3_one');
  const target = document.getElementById('ex3_two');

  dragEl.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.effectAllowed = 'move';
  });

  target.addEventListener('dragover', function(e) {
    e.preventDefault(); // pozwala na drop
    target.classList.add('drag-over');
  });

  target.addEventListener('dragleave', function() {
    target.classList.remove('drag-over');
  });

  target.addEventListener('drop', function(e) {
    e.preventDefault();
    target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const el = document.getElementById(id);
    if (el && source.contains(el)) {
      target.appendChild(el);
      el.setAttribute('draggable', 'false');
    }
  });

})();
