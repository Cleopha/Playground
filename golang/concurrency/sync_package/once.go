package sync_package

import (
	"fmt"
	"sync"
)

func Five() {
	var wg sync.WaitGroup
	once := sync.Once{}

	load := func() {
		fmt.Println("Run only once initialization function")
	}

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()

			//TODO: modify so that load function gets called only once.

			once.Do(load)
		}()
	}
	wg.Wait()
}
