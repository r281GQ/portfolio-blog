---
path: "/blog/my-second-post"
date: "2018-11-07"
title: "My second blog post"
---

**Original answer:** I'm not sure if you will like how mathematical courses typically introduce matrices. As a programmer you might be happier with grabbing any decent 3D graphics book. It should certainly have very concrete 3x3 matrices. Also find out the ones that will teach you [projective transformations][1] (projective geometry is a very beautiful area of low-dimensional geometry and easy to program).

# Mini-course in matrix math with Python 3

**Contents:**

1.  **Matrices** `[Vector, __add__, reflect_y, rotate, dilate, transform]`
1.  **Matrices: Overloaded** `[Matrix, __add__, __str__, __mul__, zero, det, inv, __pow__]`
1.  **Bonus: Complex numbers**
1.  **Matrices: The (R)evolution**. It's already in the making (there's a summary at the end)

**Preface:** Based on my teaching experience, I think that the courses referenced by others are very good _courses_. That means if your goal is understanding matrices as mathematicians do, than you should by all means get the whole course. But if your goals are more modest, here's my try at something more tailored to your needs (but still written with the goal to convey many theoretical concepts, kind of contradicting my original advice.)

**How to use:**

* This post is long. You might consider printing this and going slow, like one part a day.
* Code is essential. This is a course for programmers. Exercises are essential too.
* You should **[take a look at the code companion][2]** which contains all this code and much more
* It's "2 for the price of 1" special: you can also learn Python 3 here. And complex numbers.
* I'll highly value any attempt to read this (do I officially qualify for the longest post ever?), so feel free to comment if you don't understand something (and also if you do).

1.  # Matrices

## Vectors

Before matrices come vectors. You sure know how to handle the 2- and 3- dimensional vectors:

    class Vector:
        """This will be a simple 2-dimensional vector.

        In case you never encountered Python before, this string is a
        comment I can put on the definition of the class or any function.
        It's just one of many cool features of Python, so learn it here!

        """

        def __init__(self, x, y):
            self.x = x
            self.y = y

now you can write

    v = Vector(5, 3)
    w = Vector(7, -1)

but it's not much fun by itself. Let's add more useful methods:

        def __str__(self: 'vector') -> 'readable form of vector':
            return '({0}, {1})'.format(self.x, self.y)

        def __add__(self:'vector', v: 'another vector') -> 'their sum':
            return Vector(self.x + v.x, self.y + v.y)

        def __mul__(self:'vector', number: 'a real number') -> 'vector':
            '''Multiplies the vector by a number'''
            return Vector(self.x * number, self.y * number)

That makes things more interesting as we can now write:

print(v + w \* 2)

and get the answer `(19, 1)` nicely printed as a vector (if the examples look unfamiliar, think how this code would look in C++).

## Tranformations

Now it's all cool to be able to write `1274 * w` but you need more vector operations for the graphics. Here are some of them: you can flip the vector around `(0,0)` point, you can reflect it around `x` or `y` axis, you can rotate it clockwise or counterclockwise (it's a good idea to draw a picture here).

Let's do some simple operations:

        ...

        def flip(self:'vector') -> 'vector flipped around 0':
            return Vector(-self.x, -self.y)

        def reflect_x(self:'vector') -> 'vector reflected around x axis':
            return Vector(self.x, -self.y)


    print(v.flip(), v.reflect_x())

* **Question:** is it possible to express `flip(...)` using the operations I had below? What about `reflect_x`?

Now you may wonder why I omitted `reflect_y`. Well, it's because I want you to stop for a moment and write your own version of it. Ok, here's mine:

        def reflect_y(self:'vector') -> 'vector reflected around y axis':
            return self.flip().reflect_x()

See, if you look how this function computes, it's actually quite trivial. But suddenly an amazing thing happened: I was able to write a transformation using only the existing transformations `flip` and `reflect_x`. For all I care, `reflect_y` could be defined in a derived class without access to `x` and `y` and it would still work!

Mathematicians would call these functions _operators_. They would say that `reflect_y` is an operator obtained by _composition_ of operators `flip` and `reflect_x` which is
denoted by `reflect_y = flip ? reflect_x` (you should see the small circle, a Unicode symbol `25CB`).

* **Note:** I will quite freely use the `=` symbol from now to denote that two operations produce the same result, like in the paragraph above. This is a "mathematical `=`", which [cannot be expressed as a program][3].

So if I do

    print(v.reflect_y())

I get the result `(-5, 3)`. Go and picture it!

* **Question:** Consider a composition `reflect_y ? reflect_y`. How would you name it?

## Rotations

Those operations were nice and useful, but you are probably wondering why am so slow to introduce rotations. Ok, here I go:

        def rotate(self:'vector', angle:'rotation angle') -> 'vector':
            ??????

At this point, if you know how to rotate vectors, you should go on and fill in the question marks. Otherwise please bear with me for one more simple case: counterclockwise rotation by `90` degrees. This one is not hard to draw on a piece of paper:

        def rotate_90(self:'vector') -> 'rotated vector':
            new_x = - self.y
            new_y =   self.x
            return Vector(new_x, new_y)

Trying

    x_axis = Vector(1, 0)
    y_axis = Vector(0, 1)

    print(x_axis.rotate_90(), y_axis.rotate_90())

now gives `(0, 1) (-1, 0)`. Run it yourself!

* **Question:** Prove that `flip = rotate_90 ? rotate_90`.

Anyway, I won't hide the secret ingredient for longer:

    import math   # we'll need math from now on
      ...

    class Vector:

          ...

        def rotate(self:'vector', angle:'rotation angle') -> 'rotated vector':
            cos = math.cos(angle)
            sin = math.sin(angle)
            new_x = cos * self.x - sin * self.y
            new_y = sin * self.x + cos * self.y
            return Vector(new_x, new_y)

Now let's try something along the lines:

    print(x_axis.rotate(90), y_axis.rotate(90))

If you expect the same result as before, `(0, 1) (-1, 0)`, you're bound to be disappointed. That code prints:

    (-0.448073616129, 0.893996663601) (-0.893996663601, -0.448073616129)

and boy, is it ugly!

* **Notation:** I will say that we applied operation `rotate(90)` to `x` in the example above. The knowledge we gained is that `rotate(90) != rotate_90`.

* **Question:** What happened here? How to express `rotate_90` in terms of `rotate`? How to express `flip` in terms of `rotate`?

## Dilations

Those rotations are certainly useful, but they are not everything you need to do even the 2D graphics. Consider the following transformations:

        def dilate(self:'vector', axe_x:'x dilation', axe_y:'y dilation'):
            '''Dilates a vector along the x and y axes'''
            new_x = axe_x * self.x
            new_y = axe_y * self.y
            return Vector(new_x, new_y)

This `dilate` thing dilates the `x` and `y` axes in a possibly different way.

* **Exercise:** Fill in the question marks in `dilate(?, ?) = flip`, `dilate(?, ?) = reflect_x`.

I will use this `dilate` function to demonstrate a thing mathematicians call _commutativity_: that is, for every value of parameters `a`, `b`, `c`, `d` you can be sure that

dilate(a, b) ? dilate(c, d) = dilate(c, d) ? dilate(a, b)

* **Exercise:** Prove it. Also, is it true that for all possible values of parameters those below would hold?


    *      `rotate(a) ? rotate(b) = rotate(b) ? rotate(a)`
    *      `dilate(a, b) ? rotate(c) = rotate(c) ? dilate(a, b)`
    *      `rotate(a) ? __mul__(b) = __mul__(b) ? rotate(a)`

## Matrices

Let's summarize all the stuff we had around here, our _operators on vector `x`_

* `flip`, `reflect_x`, `*`, `rotate(angle)`, `dilate(x, y)`

from which one could make some really crazy stuff like

* `flip ? rotate(angle) ? dilate(x, y) ? rotate(angle_2) ? reflect_y + reflect_x = ???`

As you create more and more complicated expressions, one would hope for some kind of order that would suddenly reduce all possible expressions to a useful form. Fear not! Magically, every expression of the form above can be simplified to

        def ???(self:'vector', parameters):
            '''A magical representation of a crazy function'''
            new_x = ? * self.x + ? * self.y
            new_y = ? * self.x + ? * self.y
            return Vector(new_x, new_y)

with some numbers and/or parameters instead of `?`s.

* **Example:** Work out what the values of '?' are for `__mul__(2) ? rotate(pi/4)`
* **Another example:** Same question for `dilate(x, y) ? rotate(pi/4)`

This allows us to write a universal function

        def transform(self:'vector', m:'matrix') -> 'new vector':
            new_x = m[0] * self.x + m[1] * self.y
            new_y = m[2] * self.x + m[3] * self.y
            return Vector(new_x, new_y)

which would take any 4-tuple of numbers, called **matrix**, and _apply_ it to vector `x`. Here's an example:

    rotation_90_matrix = (0, -1, 1, 0)
    print(v, v.rotate_90(), v.transform(rotation_90_matrix))

which prints `(5, 3) (-3, 5) (-3, 5)`. Note that if you apply `transform` with
any matrix to origin, you still get origin:

    origin = Vector(0, 0)
    print(origin.transform(rotation_90_matrix))

* **Exercise:** what are the tuples `m` that describe `flip`, `dilate(x, y)`, `rotate(angle)`?

As we part with the `Vector` class, here's an exercise for those who want to test both their vector math knowledge and Pythonic skills:

* **The final battle:** Add to the `Vector` class all vector operations that you can come up with (how many of standard operators can you overload for vectors? Check out my answer).

2.  # Matrices: Overloaded

As we found out in the previous section, a matrix can be thought of a shorthand that allows us to encode a vector operation in a simple way. For example, `rotation_90_matrix` encodes the rotation by 90 degrees.

## Matrix objects

Now as we shift our attention from vectors to matrices, we should by all means have a class
for matrix as well. Moreover, in that function `Vector.transform(...)` above the role of the matrix was somewhat misrepresented. It's more usual for `m` to be fixed while vector changes, so from now on our transformations will be methods of matrix class:

    class Matrix:

        def __init__(self:'new matrix', m:'matrix data'):
            '''Create a new matrix.

            So far a matrix for us is just a 4-tuple, but the action
            will get hotter once The (R)evolution happens!

            '''
            self.m = m

        def __call__(self:'matrix', v:'vector'):
            new_x = self.m[0] * v.x + self.m[1] * v.y
            new_y = self.m[2] * v.x + self.m[3] * v.y
            return Vector(new_x, new_y)

If you don't know Python, `__call__` overloads the meaning of `(...)` for matrices so I can use the standard notation for a matrix _acting_ on a vector. Also, the matrices are usually written using a single uppercase letter:

    J = Matrix(rotation_90_matrix)
    print(w, 'rotated is', J(w))

* **Exercise:** repeat this example with matrices from the previous exercise.

## Addition

Now, let's find out what else we can do with matrices. Reme
