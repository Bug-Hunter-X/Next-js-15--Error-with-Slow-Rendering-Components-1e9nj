# Next.js 15: Slow Rendering Component Error

This repository demonstrates a bug in Next.js 15 where slowly rendering components can cause unexpected errors. The error is due to a race condition between the component's rendering and the data fetching process.

## Bug Description

A simple component that fetches data using `useEffect` and displays a loading message until data is available may lead to a hydration mismatch error in Next.js 15. The error occurs if the component takes a significant amount of time to render and update its state.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console.

## Solution

The solution is to use a suspense boundary to handle the loading state. This prevents the error by ensuring that the component is only rendered after the data is fetched.