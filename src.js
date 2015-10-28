var dazzler;

function randHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generateNewColorScheme() {
  Array.prototype.forEach.call(document.getElementsByTagName('polygon'), function(shape) {
    d3.select(shape)
      .transition()
      .attr('fill', randHex())
  })
}

document.getElementById('shrink').addEventListener('click', function() {
  d3
    .selectAll('polygon')
    .transition()
    .attr('transform', 'scale(0.5, 0.5)')
})

document.getElementById('reset').addEventListener('click', function() {
  d3
    .selectAll('polygon')
    .transition()
    .attr('transform', 'scale(0.5, 0.5)')
})

document.getElementById('grow').addEventListener('click', function() {
  d3
    .selectAll('polygon')
    .transition()
    .attr('transform', 'scale(1, 1)')
})


document.getElementById('squishX').addEventListener('click', function() {
  d3
    .selectAll('polygon')
    .transition()
    .attr('transform', 'scale(' + Math.random() + ',' + Math.random() + ')')
})

document.getElementById('unsquish').addEventListener('click', function() {
  d3
    .selectAll('polygon')
    .transition()
    .attr('transform', 'scale(1, 1)')
})


document.getElementById('modernArt').addEventListener('click', function() {
  generateNewColorScheme();
});

document.getElementById('dazzle').addEventListener('click', function() {
  console.log('hi');
  dazzler = window.setInterval(function() {
    generateNewColorScheme();
  }, 250)
});

document.getElementById('stopDazzle').addEventListener('click', function() {
  clearInterval(dazzler);
});
