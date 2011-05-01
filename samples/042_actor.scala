import scala.actors.Actor
import scala.actors.Actor._

case object Ping
case object Pong
case object Stop

class Messenger(mediator : Actor) extends Actor {
  def act() {
    mediator ! Some("Hello")
    loop {
      react {
        case Some(x) => {
					Console.println(x)
					mediator ! None
				}
				case None => exit()
      }
    }
  }
}

class Mediator(destiny : Actor) extends Actor {
  def act() {
		loop{
			react {
				case Some(x) => {
					destiny ! Some(x)
					reply {
						react {
							case x: Option[_] => x
						}
					}
				}
				case None => {
					destiny ! None
					sender ! None
					exit()
				}
			}
		}
  }
}

class Destiny extends Actor {
	def act() {
		while(true) {	
			receive {
				case Some(x) => { 
					println(x)
					Thread.sleep(100)
					sender ! Some("World")
				}
				case None => exit()
			}
		}
	}
}
val destiny = new Destiny
val mediator = new Mediator(destiny)
val messenger = new Messenger(mediator)
destiny.start
mediator.start
messenger.start
Thread.sleep(10000)
