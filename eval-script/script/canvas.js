(function() {
  var canvas = document.getElementById("c")
  var c = canvas.getContext("2d")
  
  var COLOR = "81, 97, 204"
  
  
  // canvas.width = window.getComputedStyle(canvas).getPropertyValue("width").replace("px", "")
  // canvas.height = window.getComputedStyle(canvas).getPropertyValue("height").replace("px", "")
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  var MAX_LENGTH = (canvas.width + canvas.height) / 3
  
  function Line(start, w, a) {
    this.start = start
    this.length = 0
    this.width = w
    this.theta = a
  
    this.update = function() {
      if(this.length > MAX_LENGTH) return
      this.length += 1
      if(Math.random() > 0.99 && lines.length < 200) {
        lines.push(new Line({
          x: this.start.x + (Math.cos(this.theta) * this.length), 
          y: this.start.y + (Math.sin(this.theta) * this.length)
        }, this.width / 1.5, this.theta + (Math.PI / 2) * (((Math.random() - 1) > 0.5) ? -1 : 1)))
      }
    }
    
    this.draw = function() {
      c.lineWidth = this.width
      c.strokeStyle = "rgba(" + COLOR + ", " + this.width / 10 + ")"
      c.beginPath()
      c.moveTo(this.start.x, this.start.y)
      c.lineTo(this.start.x + Math.cos(this.theta) * this.length, this.start.y + Math.sin(this.theta) * this.length)
      c.closePath()
      c.stroke()
    }
  }
  
  var lines = [new Line({ x: canvas.width / 2, y: canvas.height / 2 }, 10, Math.random() * Math.PI * 2)]
  
  function animate() {
    requestAnimationFrame(animate)
  
    for(var i = 0; i < lines.length; i++) {
      lines[i].update()
      lines[i].draw()
    }
  }
  
  animate()

})()
