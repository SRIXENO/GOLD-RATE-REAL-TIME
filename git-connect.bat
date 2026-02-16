@echo off
echo ========================================
echo Connect to Git Repository
echo ========================================
echo.

set /p repo_url="Enter your repository URL (e.g., https://github.com/username/repo.git): "
echo.

echo Adding remote repository...
git remote add origin %repo_url%
echo.

echo Adding all files...
git add .
echo.

echo Creating first commit...
git commit -m "Initial commit - Gold Rate Dashboard with modern UI"
echo.

echo Pushing to repository...
git branch -M main
git push -u origin main
echo.

echo ========================================
echo Repository connected and pushed!
echo ========================================
pause
