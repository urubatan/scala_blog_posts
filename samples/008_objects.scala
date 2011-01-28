val set = new scala.collection.mutable.HashSet[Any]
set += "This is a string"  
set += 732                 
set += 'c'                 
set += true                
set += (() => {})          
set += new java.lang.Object              
set.foreach {e => println(e.toString + " -- " + e.getClass) }
