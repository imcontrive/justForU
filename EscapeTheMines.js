function solve(map, miner, exit, path=[]) {
  if (!map[miner.x] || !map[miner.x][miner.y]) return false;
  if (miner.x == exit.x && miner.y == exit.y) return path;
  map = map.map(v => v.slice());
  map[miner.x][miner.y] = false;
  return solve(map, {x: miner.x    , y: miner.y - 1}, exit, path.concat('up')) ||
         solve(map, {x: miner.x    , y: miner.y + 1}, exit, path.concat('down')) ||
         solve(map, {x: miner.x - 1, y: miner.y    }, exit, path.concat('left')) ||
         solve(map, {x: miner.x + 1, y: miner.y    }, exit, path.concat('right'));
}
