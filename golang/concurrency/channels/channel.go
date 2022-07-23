package channels

import "fmt"

// Channel example
func One() {

	ch := make(chan int)

	go func(a, b int) {
		c := a + b
		ch <- c
	}(1, 2)
	// get the value computed from goroutine
	fmt.Printf("computed value %v\n", <-ch)
}

// Range channel example
func Two() {
	ch := make(chan int)
	go func() {
		for i := 0; i < 6; i++ {
			fmt.Println("Sending: ", i)
			// send iterator over channel
			ch <- i
		}
		close(ch)
	}()
	// range over channel to recv values
	for i := range ch {
		fmt.Println("Received: ", i)
	}
}

// buffered channel example
func Three() {
	ch := make(chan int, 6)

	go func() {
		defer close(ch)

		for i := 0; i < 6; i++ {
			fmt.Println("Sending: ", i)
			ch <- i
		}
	}()

	for i := range ch {
		fmt.Println("Received: ", i)
	}
}
