package main

import (
    "flag"
    "fmt"
)

var name string

func init() {
    flag.StringVar(&name, "name", "everyone", "The greeting word.")
}

func main() {
    flag.Parse()
    fmt.Printf("Hello, %s!", name)
}
