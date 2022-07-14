package main

import "concurrency/waitGroup"

func main() {
	waitGroup.ClosureTwo()
	waitGroup.ClosureOne()
}
