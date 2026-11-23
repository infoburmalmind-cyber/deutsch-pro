@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo === Deutsch Pro v3.0 — Push to GitHub ===
git remote -v
echo.
set /p CUSTOM_URL="Enter GitHub repo URL (or press Enter to keep current origin): "
if not "%CUSTOM_URL%"=="" (
    git remote remove origin 2>nul
    git remote add origin "%CUSTOM_URL%"
)

echo.
echo Pushing branch main to origin...
git -c credential.username=infoburmalmind-cyber push -u origin main
if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Make sure the repository exists on GitHub:
    echo   https://github.com/new  (Repository name: deutsch-pro, leave empty without README)
    pause
    exit /b 1
)

echo.
echo [OK] Successfully pushed to GitHub!
pause
