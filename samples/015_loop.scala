class LoopUnlessCond(body: => Unit) {
  def unless(cond: => Boolean) {
    body
    if (!cond) unless(cond)
  }
}

def loop(body: => Unit): LoopUnlessCond = new LoopUnlessCond(body)

var i = 10
loop {
  println("i = " + i)
  i -= 1
} unless (i == 0)
