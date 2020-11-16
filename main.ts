// Se capturan las entradas de luz, temperatura y humedad. NO PUDE MOSTRAR LA T MAX NI MIN.
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        basic.showNumber(input.lightLevel())
        basic.showNumber(input.temperature())
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.pause(10000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("T_P")
    basic.showNumber(Temperatura_promedio)
    basic.showString("H_P")
    basic.showNumber(Humedad_promedio)
    basic.showString("I_P")
    basic.showNumber(Iluminacion_promedio)
})
// Se crean 3 variables: T, H, I
let Iluminacion_promedio = 0
let Humedad_promedio = 0
let Temperatura_promedio = 0
let Temperatura = 0
let Humedad = 0
let Iluminacion = 0
// Toma la T 6 veces. En un rango de 0 a 50 Grados C.
for (let index = 0; index < 5; index++) {
    Temperatura += randint(0, 50)
}
// Saca el promedio de las 6 mediciones
Temperatura_promedio += Temperatura / 5
// Aquí se hace el mismo procedimiento que se hizo con la T, pero ahora  es la H.
for (let index = 0; index < 5; index++) {
    Humedad += randint(0, 1023)
}
Humedad_promedio += Humedad / 5
// Aquí se hace el procedimiento de la Iluminación
for (let index = 0; index < 5; index++) {
    Iluminacion += randint(0, 255)
}
Iluminacion_promedio += Humedad / 5
