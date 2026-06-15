# Auditing the Accessibility Gap: Native React vs. Headless Primitives

[![React 19](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Base UI](https://img.shields.io/badge/Base_UI-Headless-007FFF?style=flat&logo=mui)](https://mui.com/base-ui/)
[![WCAG 2.2 AA](https://img.shields.io/badge/WCAG-2.2_AA-brightgreen?style=flat)](https://www.w3.org/WAI/standards-guidelines/wcag/)

**Live Production Environment:** [View the Live Sandbox](https://prateek1789.github.io/final-year-project/)

## 📖 Project Overview
Despite strict international mandates (ADA, EAA), over 95% of the modern web remains inaccessible to assistive technologies. This project explores the architectural friction between declarative Single Page Applications (SPAs) and the imperative DOM manipulation required for WAI-ARIA compliance. 

This repository serves as a controlled empirical code audit. It directly compares the structural viability, codebase complexity, and WCAG 2.2 adherence of user interface components engineered using native React hooks (manual state management) versus identical interfaces constructed using **Base UI headless primitives**.

## 🚀 Tech Stack
*   **Core Framework:** React 19 (Client-side SPA)
*   **Build Tool:** Vite
*   **Type System:** TypeScript (Strict Mode)
*   **Styling Engine:** Tailwind CSS v4 (Visual Normalization)
*   **Accessibility Abstraction:** Base UI
*   **Automated Linting:** Axe-core

## 🧪 Experimental Methodology
The audit evaluates structural accessibility across three escalating tiers of interaction complexity. Each tier features two parallel implementations: a **Control Group** (Native React/Manual ARIA) and an **Experimental Group** (Base UI).

1.  **Level 1: The Custom Select (Linear State)**
    *   Tests basic focus virtualization, dynamic `aria-expanded` toggles, and `aria-activedescendant` pointer logic.
2.  **Level 2: The Tabbed Interface (Coordinate Relationships)**
    *   Tests horizontal interaction matrices, roving `tabindex` routing, and decoupled `aria-controls` bindings.
3.  **Level 3: Action-Based Message Composer (Composite UI)**
    *   Tests nested focus boundaries, dynamic disclosure patterns (emoji popover), and programmatic focus entrapment/restoration upon unmounting.

Visual styling via Tailwind CSS was perfectly normalized across both groups to completely isolate the semantic Document Object Model (DOM) logic for testing.

## 📊 Evaluation Metrics & Key Findings
Components were audited against three strict metrics:

*   **WCAG 2.2 Conformance:** Measured via automated Axe-core DOM linting and strict manual keyboard navigation matrices.
    *   *Finding:* Native implementations consistently failed under dynamic rendering cycles (e.g., severe unmount focus drops, orphaned ARIA attributes). Base UI implementations achieved a **100% automated and manual compliance pass rate**.
*   **Codebase Complexity (Lines of Code):** Measuring the required programmatic surface area (filtering out CSS/visual markup).
    *   *Finding:* Delegating state architecture to Base UI reduced the required functional boilerplate logic (`useState`, `useEffect`, `useRef` loops) by an **average of 50%**.
*   **Architectural Friction:** Evaluating developer cognitive load and type-contract complexity.
    *   *Finding:* Headless primitives successfully isolate the declarative React rendering cycle from the imperative DOM focus matrix, effectively eliminating manual ARIA synchronization errors.

## ⚙️ Local Installation & Development
To run this controlled sandbox locally and test the keyboard navigation matrices:

**1. Clone the repository:**
```bash
git clone [https://github.com/prateek1789/final-year-project.git](https://github.com/prateek1789/final-year-project.git)
cd final-year-project