trait ToXML {
  def toXML = "<xml>" + toString() + "</xml>"
}
class TraitTest(name:String) {
  override def toString = "--" + name
}
var t = new TraitTest("Name Test") with ToXML
println(t.toXML)
