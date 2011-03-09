import java.text._;

val square = (x : Int) => x * x
val toDate = (s : String) => new SimpleDateFormat("dd/MM/yyyy").parse(s)
val numbers = List(1, 2, 3, 4, 5, 6, 7, 8, 9)
val datestrings = List("18/02/1980", "29/05/2009", "30/07/1982", "10/09/1981")
println(numbers.map(square))
println(datestrings.map(toDate))