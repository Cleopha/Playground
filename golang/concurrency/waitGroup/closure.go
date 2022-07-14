package waitGroup

import (
	"fmt"
	"sync"
)

// run the program and check that variable i
// was pinned for access from goroutine even after
// enclosing function returns.

func ClosureOne() {
	var wg sync.WaitGroup

	incr := func(wg *sync.WaitGroup) {
		var i int
		wg.Add(1)

		go func() {
			defer wg.Done()
			i++
			fmt.Printf("value of i: %v\n", i)
		}()

		fmt.Println("return from function")
		return
	}

	incr(&wg)
	wg.Wait()
	fmt.Println("done..")
}

func ClosureTwo() {
	var wg sync.WaitGroup

	// what is the output
	// fix the issue.

	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			fmt.Println(i)
		}(i)
	}
	wg.Wait()
}
