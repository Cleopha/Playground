package waitGroup

import (
	"fmt"
	"sync"
)

func Join() {
	data := 0
	var wg sync.WaitGroup

	wg.Add(1)
	go func() {
		defer wg.Done()
		data += 3
	}()
	wg.Wait()

	fmt.Println("the value of data is", data)
}
