abstract class Operation
case class Addition(value1: Int, value2:Int) extends Operation 
case class Subtraction(value1: Int, value2:Int) extends Operation 
case class Multiplication(value1: Int, value2:Int) extends Operation 
case class Division(value1: Int, value2:Int) extends Operation 

def calculate(op : Operation) : Int = op match {
	case Addition(x,y) => x + y
	case Subtraction(a,b) => a - b
	case Multiplication(c,d) => c * d
	case Division(e,f) => e / f
	case _ => -1
}
println(calculate(Addition(30,45)))

