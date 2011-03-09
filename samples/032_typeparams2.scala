//Declaração parcial da classe Array em Scala
class Array[A+] {
def apply(index: Int): A
def [B <: A]update(index: Int, elem: B)
}
