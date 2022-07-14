package goroutines

import (
	"fmt"
	"time"
)

func printFunc(s string) {
	for i := 0; i < 3; i++ {
		fmt.Println(s)
		time.Sleep(1 * time.Millisecond)
	}
}

func LaunchGoroutines() {
	printFunc("direct call")

	// goroutine function call
	go printFunc("goroutine-1")

	// goroutine with anonymous fonction
	go func(s string) {
		for i := 0; i < 3; i++ {
			fmt.Println(s)
			time.Sleep(1 * time.Millisecond)
		}
	}("goroutine-2")

	// goroutine with function value call
	fv := printFunc
	go fv("goroutine-3")

	fmt.Println("wait for goroutines.")
	time.Sleep(100 * time.Millisecond)

	fmt.Println("done...")
}
