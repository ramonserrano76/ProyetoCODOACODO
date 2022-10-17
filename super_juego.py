import random
import re


class Dado:
    def __init__(self):
        self.valor = 1

    def tirar(self):
        self.valor.random.randint(1, 6)

    def imprimir(self):
        print(f"Salio: {self.valor}")

    def obtener_valor(self):
        return self.valor

    def __repr__(self):
        return f"Dado({self.valor})"

    def __str__(self):
        return f"{self.valor}"

    @property
    def valor(self):
        return self.valor


class JuegoDado:
    def __init__(self):
        self.dado_1 = Dado()
        self.dado_2 = Dado()
        self.dado_3 = Dado()


def Jugar(self):
    self.dado_1.tirar()
    self.dado_1.imprimir()
    self.dado_2.tirar()
    self.dado_2.imprimir()
    self.dado_3.tirar()
    self.dado_3.imprimir()

    if self.dado_1.obtener_valor() == self.dado_2.obtener_valor() == self.dado_3.obtener_valor():
        print("Ganaste")
    else:
        print("Perdite")


mi_juego = JuegoDado()
mi_juego = Jugar()
