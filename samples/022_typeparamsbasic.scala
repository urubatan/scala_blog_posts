//Declaração parcial da classe Array em Scala
class Array[A] {
def apply(index: Int): A
def update(index: Int, elem: A)
}

val x = new Array[String]()
val y: Array[Any] = x
y(0) = new Rational(1, 2) // Açucar sintatico para y.update(0, new Rational(1, 2))