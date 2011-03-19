abstract class Operation {
	def calculate() : Int;
}
class Addition(value1: Int, value2:Int) extends Operation {
	def calculate() = value1 + value2
}
class Subtraction(value1: Int, value2:Int) extends Operation  {
	def calculate() = value1 - value2
}
class Multiplication(value1: Int, value2:Int) extends Operation  {
	def calculate() = value1 * value2
}
class Division(value1: Int, value2:Int) extends Operation  {
	def calculate() = value1 / value2
}

def calculate(op : Operation) : Int = op match {
	case null => throw new Exception("The parameter should not be null")
	case _ => op.calculate()
}
println(calculate(new Addition(30,45)))

