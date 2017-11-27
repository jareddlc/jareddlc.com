document.addEventListener('DOMContentLoaded', function () {

  // hamburger menu
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Modals
  var rootEl = document.documentElement;
  var $modals = Array.prototype.slice.call(document.querySelectorAll('.modal'), 0);
  var $modalButtons = Array.prototype.slice.call(document.querySelectorAll('.modal-button'), 0)
  var $modalCloses = Array.prototype.slice.call(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'), 0);

  // add open listeners
  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  // add close listeners
  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  // add ESC key to close modal
  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  // remove is-active from all modals
  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }
});
