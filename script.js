(function() {
  const dragEl = document.getElementById('ex3_element');
  const containers = [document.getElementById('ex3_one'), document.getElementById('ex3_two')];

  dragEl.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.effectAllowed = 'move';
  });

  containers.forEach(container => {
    container.addEventListener('dragover', function(e) {
      e.preventDefault(); // pozwala na drop
      container.classList.add('drag-over');
    });
    container.addEventListener('dragleave', function() {
      container.classList.remove('drag-over');
    });

    container.addEventListener('drop', function(e) {
      e.preventDefault();
      container.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const el = document.getElementById(id);
      if (el) container.appendChild(el); // element może być przenoszony do dowolnego kontenera
    });
  });

})();
