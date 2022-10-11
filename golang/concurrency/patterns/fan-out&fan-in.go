package patterns

import (
	"fmt"
	"sync"
)

func merge(cs ...<-chan int) <-chan int {
	// Implement fan-in
	// merge a list of channels to a single channel

	out := make(chan int)

	var wg sync.WaitGroup

	output := func(c <-chan int) {
		for n := range c {
			out <- n
		}
		wg.Done()
	}

	wg.Add(len(cs))
	for _, c := range cs {
		go output(c)
	}

	go func() {
		wg.Wait()
		close(out)
	}()
	return out
}

func Do2() {
	in := generator(2, 3)

	// TODO: fan out square stage to run two instances.

	// TODO: fan in the results of square stages.
	ch1 := square(in)
	ch2 := square(in)

	for n := range merge(ch1, ch2) {
		fmt.Println(n)
	}
}
