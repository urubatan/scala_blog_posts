final class RichChar(c: Char) {
  def isDigit: Boolean = Character.isDigit(c)
    // isLetter, isWhitespace, etc.
}
implicit def charWrapper(c: Char) = new RichChar(c)
println('0'.isDigit)
