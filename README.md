# React Router Dom v6 Nested Routes Issue

This repository demonstrates a common issue encountered when using nested routes in React Router Dom v6. The problem involves routes not rendering correctly, resulting in blank screens when navigating to nested paths.

## Issue Description

The main App.js file contains nested routes under the `/contact` path. Navigating to the nested routes `/contact/email` or `/contact/phone` does not render the corresponding components. Instead, a blank screen is displayed.

## Solution

The solution involves checking the implementation of the nested routes and ensuring they are correctly configured within the parent route's element. The AppSolution.js file provides a corrected implementation.