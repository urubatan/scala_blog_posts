def multiply(x : Int, y : Int) = x * y
val list = List(1, 2, 3, 4, 5, 6, 7)

println(list.map(multiply(5,_:Int)))

val multi10 = multiply(10,_:Int)
println(list.map(multi10))