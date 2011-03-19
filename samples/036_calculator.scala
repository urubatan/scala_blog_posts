abstract class Operation
class Addition(value1: Int, value2:Int) extends Operation {
	def add() = value1 + value2
}
class Subtraction(value1: Int, value2:Int) extends Operation  {
	def sub() = value1 - value2
}
class Multiplication(value1: Int, value2:Int) extends Operation  {
	def mult() = value1 * value2
}
class Division(value1: Int, value2:Int) extends Operation  {
	def div() = value1 / value2
}

def calculate(op : Operation) : Int = op match {
	case a:Addition => a.add()
	case s:Subtraction => s.sub()
	case m:Multiplication => m.mult()
	case d:Division => d.div()
	case _ => -1
}
println(calculate(new Addition(30,45)))

