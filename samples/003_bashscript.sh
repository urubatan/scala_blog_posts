#!/bin/sh
exec scala "$0" "$@"
!#
Console.println("Hello, world!")
argv.toList foreach Console.println