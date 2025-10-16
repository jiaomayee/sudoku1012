# Sudoku Game

This is a Sudoku game project with multiple difficulty levels, game statistics, and save functionality.

## Expert Puzzle Loading Mechanism

Starting from v1.1.0, expert difficulty puzzles are loaded directly from a frontend JSON file, eliminating the dependency on backend services and databases. This improves loading speed and reduces network requests.

### Technical Implementation
- Expert puzzles are stored in `frontend/public/expert_puzzles.json` file
- Frontend loads puzzles via `loadExpertPuzzlesFromJson()` function in `puzzleUtils.js`
- Three-level caching mechanism implemented (memory cache, localforage cache, JSON file loading)
- Automatic fallback to program-generated expert puzzles when JSON loading fails
- Python script extracts expert puzzles from sudoku_date.db database
- Automatically handles data formatting issues (converts '0' to '.' for empty cells)
- Validates puzzle integrity and ensures each valid puzzle contains at least 17 non-zero numbers
- Current JSON file contains 1465 valid expert-level puzzles

### Extraction Script
Use `extract_expert_puzzles.py` script to re-extract and generate expert puzzle data files from the database.