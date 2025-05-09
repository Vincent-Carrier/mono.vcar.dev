---
title: 'JavaScript Iterators Made Easy'
slug: 'js-iterators'
description: 'JavaScript iterators are one of my favourite features of the language, yet nobody seems to know about them.'
date: '2023/03/22'
---

# JavaScript Iterators Made Easy

JavaScript iterators are one of my favourite features of the language, yet nobody seems to know about them. Used well, they can make your code clearer, decoupled, and more memory-efficient.

## So, what are Iterators anyway?

Glad you asked. An **Iterator** is, simply put, an object which lets us loop through some values. Its signature looks more or less like this:

```typescript
interface Iterator<T> {
	next(): { value: T; done: boolean }
}
```

This is a low-level protocol, not something you generally interact with as a programmer. In contrast, the **Iterable** protocol is something you exploit every day. Whenever you use `for (let item of something)`, you take advantage of the fact that `something` is an Iterable. That `something` can be a string, an array, even your own objects. The only requirement is that it should have a `[Symbol.iterator]` function returning an Iterator object.

The simplest way to create an Iterable is to write a **generator function**:

```js
function* simpleGenerator() {
	yield 1
	yield 2
	yield 3
}

let iterable = simpleGenerator()

for (let n of iterable) {
	console.log(n) // => 1 2 3
}
```

An important side note: the result of a generator function implements both the Iterable _and_ the Iterator protocols.

## Wait, what's that little asterisk? What's that `yield` thing?

Just like `async` tells the JavaScript parser "This functions returns a `Promise`. BTW, it may use the `await` keyword.", the asterisk tells the parser "Hey, this function is a generator. It returns an Iterable. It may use `yield` within its body."

`yield` tells the for-of loop "Here's your next thing. Have fun with it. Come back to me when you need some more." The important thing to remember is that `yield` **does not terminate the function** like `return` would, but merely suspends its execution until the next for-loop iteration.

## What else can you do with them?

A ton of things, actually. Some [Lodash](http://lodash.com) utilities are trivial to implement with generators. Here's a few of my favourites:

```js
function* range(from, to, step = 1) {
	for (let i = from; i <= to; i += step) {
		yield i
	}
}

console.log([...range(4, 10, 2)])
// => [4, 6, 8, 10]
```

```js
function* take(iterable, max) {
	let i = 0
	for (let next of iterable) {
		if (i < max) yield next
		else return
		i++
	}
}

console.log([...take(range(4, 10, 2), 2)])
// => [4, 6]
```

You could even [implement your own React-like framework](https://crank.js.org/) on top of Iterables, effectively treating the DOM as a render loop.

## You mentioned `yield*` earlier. What's that about?

`yield*` is like the `yield` keyword, but is used with Iterables instead of plain values. This lets us compose generator functions together in a very natural way:

```js
function* times(n) {
	yield* range(0, n - 1)
}

console.log([...times(4)])
// => [0, 1, 2, 3]
```

## So, are Iterables just, like... arrays?

Eh... not quite. An `Array` _is_ an Iterable, but not all Iterables are `Array`s. The main difference is that **Iterators are lazy**. They only compute the next element when explicitly asked. This makes them a great fit for, say, computing the thousandth element of the Fibonacci sequence.

```js
function* fibonacci() {
	let current = 0,
		next = 1
	while (true) {
		yield current
		;[current, next] = [next, next + current]
	}
}

const iterator = fibonacci()
for (let i = 0; i < 999; i++) {
	// looping "manually"
	iterator.next()
}

console.log(iterator.next().value)
// => 2.686381002448534e+208
```

While this may take some compute power, it doesn't bog down our precious RAM with numbers we may no longer care about. This is a pretty trivial example but, in a real-world scenario, you might even be able to fit the entire `Array` in memory.

We can always convert an Iterable to an `Array`, using `Array.from()` or the spread operator.

```js
console.log(Array.from(take(fibonacci(), 6)))
// => [0, 1, 1, 2, 3, 5]
console.log([...take(fibonacci(), 6)])
// => [0, 1, 1, 2, 3, 5]
```

## You said something about making your own objects Iterables?

Right! We just need to implement `[Symbol.iterator]`. Here's what that would look like in practice:

```js
let ticTacToe = {
	grid: [
		['X', 'O', '_'],
		['O', '_', '_'],
		['_', '_', 'X']
	],
	*[Symbol.iterator]() {
		for (let y = 0; y < 3; y++) {
			yield* this.grid[y]
		}
	}
}

for (let cell of ticTacToe) {
	console.log(cell)
	// => X O _ O _ ...
}
```

<hr/>

I hope you can see now how Iterators, Iterables and generators let us write code that is more scalable, more expressive, and more maintainable.

## Further reading

- [Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on MDN
