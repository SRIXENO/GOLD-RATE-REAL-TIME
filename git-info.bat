@echo off
echo ========================================
echo Git Repository Information
echo ========================================
echo.

echo Remote Repository URL:
git remote -v
echo.

echo Current Branch:
git branch
echo.

echo Recent Commits:
git log --oneline -5
echo.

pause
