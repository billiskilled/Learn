package main

import (
    "flag"
    "b/lib"
)

var name string

func init() {
    flag.StringVar(&name, "name", "everyone", "The greeting word.")
}

func main() {
    flag.Parse()
    lib2.Hello(name)
}
