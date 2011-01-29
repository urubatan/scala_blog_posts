object ClosureApp {
  def printResult(func : (Int) => Any) {
    println(func(5))
  }
  def main(args : Array[String]){
    var i = 5
    val funcParam = (j : Int) => j + i
    printResult(funcParam)
    i = 6
    printResult(funcParam)
  }
}
ClosureApp.main(args)