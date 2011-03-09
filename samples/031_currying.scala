def multiply2(x : Int)(y : Int) = x * y

def doIt(a : Int, f : (v : Int)=> Int) : Int = f(a)

println(doIt(3,multiply2(5)))