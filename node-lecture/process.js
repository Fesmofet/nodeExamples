console.log('Processor architecture: ', process.arch) // arm | ia32 | x62
console.log('Platform: ', process.platform) //win32 | linux | freebsd

const ns2ms = (ns) => ns * 1000000

const startTime = process.hrtime()
const startCpuUsage = process.cpuUsage()

for (let i = 0; i < 10000000000; i++);

const diffTime = process.hrtime(startTime)
const diffUsage = process.cpuUsage(startCpuUsage)

const diffTimeMs = diffTime[1] * 1000 + ns2ms(diffTime[1])
const diffUsageUserMs = ns2ms(diffUsage.user)
const diffUsageSystemMS = ns2ms(diffUsage.system)
const cpuUsage = Math.round(
  (100 * (diffUsageUserMs + diffUsageSystemMS)) / diffTimeMs
)

console.log('CPU usage, %: ', cpuUsage)
