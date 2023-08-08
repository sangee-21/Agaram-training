def cal_gst(amount):
    return amount*.08

gold_rate=32000

making_chrg=3000

gst=cal_gst(gold_rate+making_chrg)

total=(gold_rate+making_chrg+gst)

print(total)