package _select

import (
	"fmt"
	"time"
)

func Two() {
	ch := make(chan string, 1)

	go func() {
		time.Sleep(2 * time.Second)
		ch <- "one"
	}()

	//implement timeout for recv on channel ch
	select {
	case m := <-ch:
		fmt.Println(m)
	case <-time.After(3 * time.Second):
		fmt.Println("timeout")
	}
}
