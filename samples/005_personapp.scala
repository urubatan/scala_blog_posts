class Person(val firstName:String, val lastName:String, val age:Int)
{
  override def toString = "[Person: firstName=" + firstName + " lastName=" + lastName + " age="+age+"]"
}

object PersonApp
{
  def main(args : Array[String]) : Unit =
  {
    val person = new Person("Rodrigo", "Urubatan", 30)
    System.out.println(person)
  }
}