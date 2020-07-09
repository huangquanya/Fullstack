package main

import "fmt"

func findCircleNum(M [][]int) int {
	return 0
}

func main()  {
	count:=findCircleNum(
		[][]int{
			{1,1,0},
			{1,1,0},
			{0,0,1}
		}
	)
	fmt.Printf("朋友圈的数量是%d",count)
	
}