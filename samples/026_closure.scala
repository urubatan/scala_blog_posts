var factor = 5
val multiplier = (x : Int ) => x * factor
val numbers = List(1, 2, 3, 4, 5, 6, 7, 8, 9)

println(numbers.map(multiplier))
factor = 10
println(numbers.map(multiplier))
