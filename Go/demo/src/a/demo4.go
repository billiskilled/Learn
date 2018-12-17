package main

import (
    "flag"
)

var name string

func init() {
    flag.StringVar(&name, "name", "everyone", "The greeting word.")
}

func main() {
    flag.Parse()
    hello(name)
}
