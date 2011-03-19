def calculate(value1 : Int, value2 : Int, operation : String) : Int = operation match {
	case "+" => value1 + value2
	case "-" => value1 - value2
	case "*" => value1 * value2
	case "/" => value1 / value2
	case _ => -1
}
println(calculate(20, 25, "+"))
