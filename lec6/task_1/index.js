// Нужно создать класс, который в общем описывает
// какую-то фигуру по координатам:
// A1(0.6:2.1), A2(1.8:3.6), A3(2.2:2.3), A4(3.6:2.4) A5(3.1:0.5)
// координаты передаются при создании экземпляра класса.
// Так же фигура имеет метод "нарисовать фигуру",
// для простоты мы просто в консоль выводим координаты.
// Далее нужно создать ещё два класса, круг и прямоугольник,
// которые наследуются от фигуры, но задаются уже по другому:
// круг задается координатами центра и радиусом, прямоугольник
// задается координатами верхнего левого угла и длинна/ширина.
//  Так же эти классы имеют метод "получить площадь", которая
//  расчитывается на основе данных переданных при создании.

class Figure {
  constructor(coordinates) {
    this._coordinates = coordinates;
  }

  get coordinates() {
    return this._coordinates.map(coordinate => `${coordinate.x} : ${coordinate.y}`);
  }
}

const coordinates = [
  {x: 0.6, y: 2.1},
  {x: 1.8, y: 3.6},
  {x: 2.2, y: 2.3},
  {x: 3.6, y: 2.4},
  {x: 3.1, y: 0.5},
]

const fig = new Figure(coordinates);
console.log('Координаты нашей фигуры:', fig.coordinates);

// Создание круга

class Circle extends Figure {
  get coordinates() {
    return this._coordinates.map(coordinate => `${coordinate.x} : ${coordinate.y} : ${coordinate.y}`);
  }

  get square() {
    return 2 * Math.PI * this._coordinates[0].r;
  }
}

const circle = new Circle([{x: 1, y: 2, r: 5}]);
console.log('Координаты круга:', circle.coordinates);
console.log('Площадь круга: ', Math.floor(circle.square));

// Создание прямоугольника

class Rectangle extends Figure {
  get coordinates() {
    return (`${this._coordinates[0].x} : ${this._coordinates[0].y} : ${this._coordinates[0].x + this._coordinates[0].w} : ${this._coordinates[0].y + this._coordinates[0].h}`);
  }
  get square () {
    return this._coordinates[0].w * this._coordinates[0].h;
  }
}

const rectangle = new Rectangle([{x: 1, y: 1, w: 4, h: 2}]);
console.log('Координаты прямоугольника:', rectangle.coordinates);
console.log('Площадь прямоугольника: ', rectangle.square);
