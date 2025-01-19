function 左回転 (speed: number) {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, speed * 0.8)
    pins.analogWritePin(AnalogPin.P15, speed)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 後退 (speed: number) {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, speed * 0.8)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, speed * 0.8)
}
function 前進 (speed: number) {
    pins.analogWritePin(AnalogPin.P13, speed)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, speed)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 右回転 (speed: number) {
    pins.analogWritePin(AnalogPin.P13, speed)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, speed * 0.8)
}
function 停止 () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
basic.showIcon(IconNames.Happy)
let leftSensor = 0
let rightSensor = 0
let speed = 600
let sensorThreshold = 700
停止()
basic.forever(function () {
    leftSensor = pins.analogReadPin(AnalogReadWritePin.P1)
    rightSensor = pins.analogReadPin(AnalogReadWritePin.P2)
    if (leftSensor < sensorThreshold && rightSensor < sensorThreshold) {
        前進(speed)
    } else if (leftSensor >= sensorThreshold && rightSensor < sensorThreshold) {
        左回転(speed)
    } else if (leftSensor < sensorThreshold && rightSensor >= sensorThreshold) {
        右回転(speed)
    } else if (leftSensor >= sensorThreshold && rightSensor >= sensorThreshold) {
        後退(speed)
    }
})
