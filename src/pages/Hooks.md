---
title: "Hooks"
date: "2019-10-07"
---


> Description
Hooks allow function components to have states. It eliminates completely usage of classes. It is recommended to use function components with hooks rather than classes with state. Class componenets might be deeprecated in future. Advantagee of hooks is that we can createe our own hooks and logic behind them. 

>Examples of hooks:
useState - allows function component to have state
useEffect - allows function component to use a certain function any time component renders, it is equivalent to lifecycles of class components

> Importing
Each hook neeeds to be imported from react.
Example 1:
import React from "react";
import {useState} from "react";

Example 2:
import React, {useState} from "react";
