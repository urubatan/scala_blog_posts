import scala.actors.Actor
import scala.actors.Actor._

class PingPongPlayer() extends Actor {
  def act() {
    loop{
      react {
        case x:String => {
          println("Ping")
          reply("Pong")
        }
        case _ => exit()
      }
    }
  }
}
println("Start")
val ppp = new PingPongPlayer
ppp.start
val resp = (ppp !! "Ping")
println(resp())
val resp1 = (ppp !? "Ping")
println(resp1)
val resp2 = (ppp !? (100,"Ping"))
println(resp2)
ppp ! None
