import swing._
import swing.event._
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
object Calculator extends SimpleSwingApplication {
	def newTextField =  new TextField {
		text = "0"
		columns = 5
	}
	var input1 = newTextField
	var input2 = newTextField
	var resultLabel = new Label {
		text = "0"
	}
	def calculate(op : Operation) : Unit = op match {
		case null => throw new Exception("The parameter should not be null")
		case _ => resultLabel.text = "" + op.calculate()
	}

	var buttons = new GridPanel(2,2) {
		List(Action("Add"){
			calculate(new Addition(input1.text.toInt,input2.text.toInt))
			}, 
			Action("Sub"){
			calculate(new Subtraction(input1.text.toInt,input2.text.toInt))
			}, 
			Action("Mult"){
			calculate(new Multiplication(input1.text.toInt,input2.text.toInt))
			}, 
			Action("Div"){
			calculate(new Division(input1.text.toInt,input2.text.toInt))
			}) foreach { contents += new Button(_)}
	}
	listenTo(input1.keys,input2.keys)
	reactions += {
		case KeyPressed (source, key, modifiers, location) => println("Clicked " + key)
	}
	def top = new MainFrame {
		title = "Calculator"
		contents = new GridPanel(4,1){
			List(input1, input2, resultLabel, buttons) foreach {contents += _ }
		}
	}
}
