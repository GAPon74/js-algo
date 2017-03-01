function writeAlgoDemo1() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("<p>Side a= " + side_a + "</p><p>Side b= " + side_b + "</p>");
    document.write("<p>Обьем куба равен " + side_a * side_a * side_a + "</p>");
    document.write("<p>Площадь квадрата равна " + side_a * side_a + "</p>");
    document.write("<p>Площадь прямоугольника равна " + side_a * side_b + "</p>");
}

function writeAlgoDemo2() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("<p>Side a=" + side_a + "</p><p>Side b=" + side_b + "</p>");
    document.write("<p>Площадь прямоугольного треугольника равна " + side_a * side_b / 2 + "</p>");
}

function writeAlgoDemo3() {
    var radius = Math.random() * 10 + 5;
    var square = Math.PI * radius * radius;
    document.write("<p>Radius=" + radius + "</p>");
    document.write("<p>Площадь круга равна " + square + "</p>");
}