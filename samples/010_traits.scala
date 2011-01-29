trait Flyer {
  def fly = println("I can fly!")
}
trait Jumper {
  def jump = println("I can jump!")
}
trait Walker {
  def walk = println("I walk too!")
}
class Animal {
  def breathe = println("Dogs breath!")
}
class Dog extends Animal with Jumper {
}
class Bird extends Animal with Flyer with Jumper{
}
class Airplane extends Flyer {
}
object TraitsApp extends Application {
  val dog = new Dog with Walker
  val bird = new Bird
  val plane = new Airplane
  dog.breathe
  dog.jump
  dog.walk
  bird.breathe
  bird.jump
  bird.fly
  plane.fly
}