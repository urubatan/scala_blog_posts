val numbers = List(1, 2, 3, 4, 5, 6, 7, 8, 9)
val sum = (a : Int, b : Int) => a + b
println(numbers.foldLeft(2)(sum))

println(numbers.foldLeft(100)(sum))