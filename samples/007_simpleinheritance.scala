abstract class Person(val name : String, val age : Int) {
  override def toString = "[Person name:" + name + " age:" + age + "]"
  def doSomething;
}

class Student(name : String, age : Int) extends Person(name,age) {
  override def doSomething = println(this + " I'm studying! I swear!")
}

class Worker(name : String, age : Int) extends Person(name,age) {
  override def doSomething = println(this + " I'm working!")
}

object PersonApp {
  def main(args : Array[String]) {
    val people = List(new Student("Junior", 10), new Student("Kelly", 12), new Worker("Jon Doe", 40))
    people.foreach {p => p.doSomething }
  }
}
PersonApp.main(args)