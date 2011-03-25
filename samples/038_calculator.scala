import swing._
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
	var buttons = new GridPanel(2,2) {
		List("Add", "Sub", "Mult", "Div") foreach { contents += new Button(_) }
	}
	def top = new MainFrame {
		title = "Calculator"
		contents = new GridPanel(4,1){
			List(input1, input2, resultLabel, buttons) foreach {contents += _ }
		}
	}
}
