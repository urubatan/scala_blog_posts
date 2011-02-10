object ExceptionHolder {
  class BreakException extends Exception {}
  val breakException = new BreakException
}
def break = throw ExceptionHolder.breakException

def loop(body: => Unit): Unit = {
  try{
    body
    loop(body)
  }catch{
    case e: ExceptionHolder.BreakException => return
  }  
}

var i = 10
loop {
  if(i == 0) break
  println("i = " + i)
  i -= 1
} 
