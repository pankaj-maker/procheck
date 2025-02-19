# procheck
procheck is a powerful CSV validation tool that automatically detects headers and applies configurable validation rules for common lead data fields. It ensures data accuracy and generates separate output files for valid and invalid records.

# Features
-Automatic header detection for CSV files.
-Configurable validation rules for common lead data fields:
-Company names
-Person names
-Locations
-Phone numbers
-Email addresses
-Employee size counts
-URLs, dates, numbers, and more...
-Generates two output files:
-clean.csv: Contains all valid records.
errors.csv: Contains invalid records with detailed error descriptions.
# Installation
You can install procheck via npm:

npm install -g procheck
Usage
To start an interactive session for CSV validation, run:

# Usage

procheck validate yourfile.csv
This will guide you through:

Reviewing detected headers.
Setting validation rules for each column.
Running the validation process.
Generating clean.csv and errors.csv files.
# Validation Rules
procheck supports the following validation types:

Validation Type	Description
company	Validates company names.
person	Validates person names.
email	Validates email addresses.
phone	Validates phone numbers (international format supported).
location	Validates geographical locations.
employee_size	Validates employee count numbers.
url	Validates URLs.
date	Validates dates in various formats.
text	Basic text validation.
number	Numeric validation.

# Example

procheck validate leads.csv
After processing, two output files will be generated:

clean.csv: Contains records that passed validation.
errors.csv: Contains invalid records with detailed error descriptions.
# License
This project is licensed under the MIT License.

