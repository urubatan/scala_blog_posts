class Duck {
  def quack = println("quack quack!")
}
class Hunter {
  def quack = println("Imitates a Duck: quack quack!")
}
def inTheForest(duck : {def quack;}) {
  duck.quack
}
inTheForest(new Hunter)
inTheForest(new Duck)