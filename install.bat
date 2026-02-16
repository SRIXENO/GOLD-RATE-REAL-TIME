@echo off
echo Installing dependencies...
echo.

echo [1/2] Installing Backend dependencies...
cd backend
call npm install
cd ..

echo.
echo [2/2] Installing Frontend dependencies...
cd frontend
call npm install
cd ..

echo.
echo ========================================
echo Installation complete!
echo ========================================
echo.
echo Run "start.bat" to launch the application
pause
