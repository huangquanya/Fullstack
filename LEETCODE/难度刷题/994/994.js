/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    // 上下左右四个方向
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let queue = [];
    let time = -1;
    // 找到所有坏桔子
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // console.log(grid[i][j])
            if (grid[i][j] === 2) {
                queue.push({ x: i, y: j })
            }
        }
    }
    while (queue.length) {
        // 每分钟找到所有当前怀桔子
        time++;
        let rowNode = queue.splice(0);
        // 所有当前的怀桔子的四个正方向让它腐烂
        for (let { x, y } of rowNode) {
            for (let direct of directions) {
                let x_new = x + direct[0]
                let y_new = y + direct[1]
                if (0 <= x_new && x_new < grid.length && 0 <= y_new && y_new <= grid[0].length && grid[x_new][y_new] === 1) {
                    grid[x_new][y_new] = 2;
                    queue.push({ x: x_new, y: y_new })
                }
            }
        }
    }
    for(let row of grid) {
        if(row.includes(1)) return -1;
    }
    console.log(Math.max(0, time))
    return Math.max(0, time)
};

orangesRotting([[0, 2]])