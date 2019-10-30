// Add .extstyler and hostname as classes to <html> tag
document.documentElement.classList.add(
  'extstyler',
  ...location.hostname
    .split('.')
    .reverse()
    .slice(1)
    .reverse()
);

document.querySelectorAll('input[autocorrect=off]').forEach(function(item) {
  item.setAttribute('autocorrect', 'on');
});
