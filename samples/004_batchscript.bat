::#!
@echo off
call scala %0 %*
goto :eof
::!#
Console.println("Hello, world!")
argv.toList foreach Console.println