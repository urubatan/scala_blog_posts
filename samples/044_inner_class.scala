class Book {
  class Chapter(name:String,content:String) {
    override def toString() = "<chapter name=\"" + name + "\">" + content + "</chapter>"
  }
  var chapters: List[Chapter] = Nil
  def newChapter(name:String, content:String) = {
    val chap = new Chapter(name,content)
    chapters = chap :: chapters
    chap
  }
  override def toString() = "<book>" + chapters.foldRight("")((memo,it) => memo + it.toString ) + "</book>"
}

