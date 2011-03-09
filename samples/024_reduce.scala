val numbers = List(1, 2, 3, 4, 5, 6, 7, 8, 9)
println(numbers.reduceLeft(_ + _))

val sum = (a : Int, b : Int) => a + b
println(numbers.reduceLeft(sum))