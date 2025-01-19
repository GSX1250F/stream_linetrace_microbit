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
function ライントレース (speed: number, leftSensor: number, rightSensor: number) {
    if (leftSensor < sensorThreshold && rightSensor < sensorThreshold) {
        前進(speed)
    } else if (leftSensor >= sensorThreshold && rightSensor < sensorThreshold) {
        左回転(speed)
    } else if (leftSensor < sensorThreshold && rightSensor >= sensorThreshold) {
        右回転(speed)
    } else if (leftSensor >= sensorThreshold && rightSensor >= sensorThreshold) {
        後退(speed)
    }
}
function 停止 () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
let sensorThreshold = 0
let rightSensor = 0
let leftSensor = 0
basic.showIcon(IconNames.Happy)
leftSensor = 0
rightSensor = 0
let speed = 600
sensorThreshold = 700
let sensorThresholdLap = 200
let angle = 0
停止()
basic.forever(function () {
    leftSensor = pins.analogReadPin(AnalogReadWritePin.P1)
    rightSensor = pins.analogReadPin(AnalogReadWritePin.P2)
    ライントレース(speed, leftSensor, rightSensor)
})
