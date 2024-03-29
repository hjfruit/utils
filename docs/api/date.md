# Date

> 时间日期相关工具函数

## formatDate

> 时间/日期格式化

```ts
import { formatDate } from '@fruits-chain/utils'

const targetDate = new Date('2023-02-14')
const targetTimestamp = new Date('2023-02-14').valueOf()
const currentYear = new Date().getFullYear()
const currentDate = new Date(`${currentYear}-02-18 13:21:55`)
formatDate(targetDate) // 2023-02-14
formatDate(targetTimestamp) // 2023-02-14
formatDate(targetDate, { mode: 'date-time' }) // '2023-02-14 08:00'
formatDate(targetDate, { template: 'YYYY-MM' }) // 2023-02
formatDate(targetDate, { mode: 'date-time', template: 'YYYY-MM' }) // 2023-02
formatDate(targetDate, {}) // 2023-02-14
formatDate(currentDate, { rule: 'no-current-year' }) // 02-28
formatDate(currentDate, { mode: 'date', rule: 'no-current-year' }) // 02-28
formatDate(currentDate, {
  template: 'YYYY/MM/DD HH:mm',
  rule: (date, template) => {
    const isSameYear = dayjs(date).isSame(dayjs(), 'year')
    if (isSameYear) {
      return template.replace(/^YYYY\//, '')
    }
    return template
  },
}) //
```

## formatRangeDate

> 时间/日期段格式化

```ts
formatRangeDate([null, targetTimestamp]) // ~至2023-02-18
formatRangeDate([targetDate, null]) // 2023-02-14至~
formatRangeDate([null, undefined]) // ''
formatRangeDate([targetDate, targetTimestamp]) // 2023-02-14至2023-02-18

formatRangeDate([targetDate, targetTimestamp], { mode: 'date-time' }) // 2023-02-14 08:00至2023-02-18 08:00
formatRangeDate([targetDate, targetTimestamp], { template: 'MM-DD' }) // 02-14至02-18
formatRangeDate([null, targetTimestamp], {
  empty: '--',
}) // --至2023-02-18
formatRangeDate([targetDate, targetTimestamp], {
  spliter: ' To ',
}) // 2023-02-14 To 2023-02-18
```

## getRangeDate

> 获取时间/日期段

```ts
const targetRangeDate = getRangeDate(3, 'days')
const targetRangeDate1 = getRangeDate(3, 'months')
const targetRangeDate2 = getRangeDate(3, 'days', 'day', new Date('2022-12-21'))
const targetRangeDate3 = getRangeDate(-3, 'days', 'day', new Date('2022-12-21'))
const targetRangeDate4 = getRangeDate(1, 'month', 'day', new Date('2022-12-21'))
```

## formatDuration

`v1.0.3`

> 时长格式化

```ts
formatDuration(1000) // 1s
formatDuration(1001) // 1s1ms
formatDuration(61, { from: 'm' }) // 1h1m
formatDuration(61, { from: 'm', locale: true }) // 1时1分
formatDuration(61, { from: 'd', to: 'ms' }) // 5270400000ms
formatDuration(61, { from: 'd', to: 'h', locale: true }) // 1464时
```
