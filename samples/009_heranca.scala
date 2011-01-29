abstract class Animal {
  def breathe : Unit;
}
class Dog extends Animal {
  def breathe {
    println("Dogs breath!");
  }
}
class Person(val fullName : String, val age : Int) extends Animal {
  def breathe = println("Dogs breath!");
  override def toString = "[Person name:" + fullName + "]"
}
class Student(fullName : String, age : Int) extends Person(fullName, age) {
}