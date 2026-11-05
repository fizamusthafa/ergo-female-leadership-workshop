---
name: ergo-register-cleaner
description: "Cleans a messy KPI or performance register in Excel and writes a tidy copy with a change log, without touching the original. Use when someone says clean my register, prepare the monthly KPI file, tidy this KPI sheet, fix the currencies and dates in my register, or get this register ready for a PivotTable."
---

<!-- Workshop template. Illustrative figures for training purposes, not ERGO results -->

# ERGO register cleaner

A template skill: read it, then change the rules marked with a comment so they match how your team works.

## Steps
1. Find the register: the sheet with columns such as Entry_ID, Country, KPI, Month, Target and Actual. Read the README sheet first if there is one.
2. Copy the data to a new sheet `Register_Clean`. Do all changes there.
3. **Currencies:** use ISO codes only. € / Euro / eur / "EUR " become `EUR`, zł / Zloty become `PLN`. Count KPIs (policies, complaints) have no currency.
4. **Dates:** convert every date to a real Excel date shown as `yyyy-mm-dd`. Text such as 2026-03-04, 04.03.2026, 4 Mar 2026 counts as a date. Slash dates (03/14/2026) are month/day/year. <!-- Change this rule to fit your team -->
5. **Names:** for Country, Business_Unit and KPI, use the most common spelling in the column (Deutschland and DE become Germany, Kfz and Car become Motor, GWP becomes Gross written premium). Status must be one of On track, At risk, Off track.
6. **Text numbers:** convert numbers stored as text to real numbers. German format "12.345,50" means 12345.5.
7. **Spaces:** trim leading and trailing spaces in every text cell.
8. **Missing or impossible values:** leave the cell blank and write the reason in a `Data_Flags` column (for example "Actual missing in source" or "Reported_On invalid in source (31.06.2026)").
9. **Duplicates:** remove rows only when every value is identical to another row.

## Conditional formatting
Add `Variance_vs_Target` = (Actual − Target) / Target as a live formula, blank when Actual is blank. Format it as a percentage with one decimal and colour it: <!-- Change these thresholds to fit your team -->
- below −10%: fill #BF1629, white bold text
- from −10% up to (but not including) 0%: amber fill #FFC000, dark text
- 0% or more: green fill #C6EFCE, dark green text #006100

## Summary row
Below the table, add one row labelled `Total` with: number of rows, number of On track / At risk / Off track, sum of Target and Actual per currency (never add EUR and PLN together), and the count of rows with a Data_Flag.

## Output rules
- Column order: Entry_ID, Country, Business_Unit, KPI, Month, Target, Actual, Currency, Reported_On, Owner, Status, Comment, Data_Flags, Variance_vs_Target.
- Format the data as an Excel table named `Register_Clean`. Header row bold, white text on charcoal #242424, freeze the header row. <!-- Change this rule to fit your team -->
- Keep the original sheet untouched. All output goes to `Register_Clean` and `Change_Log`.
- Monetary values stay in thousands of the original currency.

## Don't
- Never delete rows, except exact duplicates.
- Never guess or fill in missing values.
- Never change a Target, even if it looks wrong. Flag it instead.
- Never convert currencies unless I ask for it.

## When you finish
Create a `Change_Log` sheet with one line per type of change: what was changed, how many cells and the Entry_IDs. Then give me the same summary in chat in five lines or fewer, and list anything you were unsure about.
