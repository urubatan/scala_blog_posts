class Stack[+A] {
  def push[B >: A](elem: B): Stack[B] = new Stack[B] {
    override def top: B = elem
    override def pop: Stack[B] = Stack.this
    override def toString() = elem.toString() + " " +
                              Stack.this.toString()
  }
  def top: A = error("no element on stack")
  def pop: Stack[A] = error("no element on stack")
  override def toString() = ""
}

var s = new Stack[Any]().push("hello");
s = s.push(new Object())
s = s.push(7)
Console.println(s)
