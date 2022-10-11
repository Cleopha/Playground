package context

import (
	"context"
	"fmt"
	"time"
)

type data struct {
	result string
}

func Do2() {

	// change value of deadline to test the deadline :)

	deadline := time.Now().Add(10 * time.Millisecond)
	ctx, cancel := context.WithDeadline(context.Background(), deadline)

	defer cancel()

	compute := func() <-chan data {
		ch := make(chan data)
		go func() {
			defer close(ch)
			deadline, ok := ctx.Deadline()
			if ok {
				if deadline.Sub(time.Now().Add(50*time.Millisecond)) < 0 {
					fmt.Println("not sufficient time given")
					return
				}
			}

			// Simulate work.
			time.Sleep(50 * time.Millisecond)

			// Report result.
			select {
			case ch <- data{"123"}:
			case <-ctx.Done():
				return
			}
		}()
		return ch
	}

	// Wait for the work to finish. If it takes too long move on.
	ch := compute()
	d, ok := <-ch
	if ok {
		fmt.Printf("work complete: %s\n", d)
	}

}
