package main

import "fmt"

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for idx, num := range nums {

		if v, found := m[target-num]; found {
			return []int{v, idx}
		}

		m[num] = idx
	}
	return nil
}

func countDigit(nb int) int {
	for ; nb != 0; nb /= 10 {
		fmt.Println(nb % 10)
	}
	return 0
}
func main() {
	//fmt.Println(twoSum([]int{3, 2, 4}, 6))
	countDigit(95467)
}
