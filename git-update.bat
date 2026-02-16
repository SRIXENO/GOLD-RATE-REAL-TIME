@echo off
echo ========================================
echo Git Update Script
echo ========================================
echo.

echo Checking git status...
git status
echo.

echo Adding all changes...
git add .
echo.

set /p commit_msg="Enter commit message: "
echo.

echo Committing changes...
git commit -m "%commit_msg%"
echo.

echo Pushing to remote repository...
git push
echo.

echo ========================================
echo Update complete!
echo ========================================
pause
