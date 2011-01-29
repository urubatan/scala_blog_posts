object UsefulTypes {
  type Duck = {def quack;}
}
import UsefulTypes.Duck
def inTheForest(duck : Duck) {
  duck.quack
}
