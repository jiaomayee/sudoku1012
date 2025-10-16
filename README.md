# Sudoku Game

This is a Sudoku game project with multiple difficulty levels, game statistics, and save functionality.

## Expert Puzzle Loading Mechanism

Starting from v1.1.0, expert difficulty puzzles are loaded directly from a frontend JSON file, eliminating the dependency on backend services and databases. This improves loading speed and reduces network requests.

### Technical Implementation
- Python script extracts expert puzzles from sudoku_date.db database
- Automatically handles data formatting issues (converts '0' and '.' to empty cells)
- Validates puzzle integrity and generates standard format JSON
- Frontend implements caching mechanism for improved performance
- Provides graceful error handling and fallback mechanisms